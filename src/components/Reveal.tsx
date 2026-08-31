"use client";

import { useEffect } from "react";

/**
 * Einblenden beim Scrollen für alle Elemente mit [data-reveal].
 *
 * Bewusst mehrfach abgesichert, weil unsichtbarer Inhalt der schlimmste
 * Fehlerfall ist:
 *
 *  1. Der versteckte Startzustand greift erst, wenn .reveal-on am <html> hängt.
 *     Ohne JavaScript bleibt die Seite dadurch vollständig sichtbar.
 *  2. Ein IntersectionObserver meldet auch Elemente, die beim Start schon im
 *     Blickfeld sind – etwa wenn der Browser beim Neuladen die alte
 *     Scrollposition wiederherstellt oder die Seite direkt auf #ablauf landet.
 *     Auf solche Sprünge folgt nicht zwingend ein Scroll-Ereignis.
 *  3. Zusätzliche Durchläufe nach dem Laden fangen Fälle ab, in denen sich das
 *     Layout noch verschiebt, weil Schriften nachgeladen werden.
 */
export default function Reveal() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("reveal-on");

    const offen = new Set(
      Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]")),
    );

    const zeigen = (el: HTMLElement) => {
      el.classList.add("is-visible");
      offen.delete(el);
      observer?.unobserve(el);
    };

    /** Blendet alles ein, was gerade im Blickfeld liegt – ohne Scroll-Ereignis. */
    const durchlauf = () => {
      const grenze = window.innerHeight * 0.92;
      for (const el of Array.from(offen)) {
        if (el.getBoundingClientRect().top < grenze) zeigen(el);
      }
    };

    let observer: IntersectionObserver | undefined;

    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (eintraege) => {
          for (const eintrag of eintraege) {
            if (eintrag.isIntersecting) zeigen(eintrag.target as HTMLElement);
          }
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
      );
      offen.forEach((el) => observer?.observe(el));
    }

    let geplant = false;
    const beiEreignis = () => {
      if (geplant) return;
      geplant = true;
      window.requestAnimationFrame(() => {
        geplant = false;
        durchlauf();
      });
    };

    durchlauf();
    const timer = [
      window.setTimeout(durchlauf, 400),
      window.setTimeout(durchlauf, 1500),
    ];

    window.addEventListener("scroll", beiEreignis, { passive: true });
    window.addEventListener("resize", beiEreignis, { passive: true });
    window.addEventListener("load", durchlauf);
    window.addEventListener("hashchange", durchlauf);
    window.addEventListener("pageshow", durchlauf);

    return () => {
      timer.forEach(window.clearTimeout);
      window.removeEventListener("scroll", beiEreignis);
      window.removeEventListener("resize", beiEreignis);
      window.removeEventListener("load", durchlauf);
      window.removeEventListener("hashchange", durchlauf);
      window.removeEventListener("pageshow", durchlauf);
      observer?.disconnect();
      root.classList.remove("reveal-on");
    };
  }, []);

  return null;
}
