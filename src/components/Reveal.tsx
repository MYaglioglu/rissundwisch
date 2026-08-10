"use client";

import { useEffect } from "react";

/**
 * Scroll-Reveal für alle Elemente mit [data-reveal].
 *
 * Bewusst rect-basiert statt IntersectionObserver: die versteckte Startposition
 * wird erst per .reveal-on am <html> aktiviert. Ohne oder bei fehlerhaftem JS
 * bleibt damit die komplette Seite sichtbar – nichts kann "leer" ausliefern.
 */
export default function Reveal() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("reveal-on");

    let nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    let ticking = false;

    const update = () => {
      ticking = false;
      const trigger = window.innerHeight * 0.92;
      const remaining: HTMLElement[] = [];

      for (const node of nodes) {
        if (node.getBoundingClientRect().top < trigger) {
          node.classList.add("is-visible");
        } else {
          remaining.push(node);
        }
      }

      nodes = remaining;
      if (nodes.length === 0) detach();
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    };

    const detach = () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();

    return () => {
      detach();
      root.classList.remove("reveal-on");
    };
  }, []);

  return null;
}
