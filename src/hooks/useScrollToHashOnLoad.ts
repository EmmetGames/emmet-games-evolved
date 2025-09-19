import { useEffect } from "react";

/**
 * Reads hash from sessionStorage (if set by Navigation) or from window.location.hash,
 * then scrolls smoothly to the target element on page load.
 *
 * @param options.delay - Delay before trying to scroll (ms). Default: 100
 * @param options.retry - Number of retries if the element is not yet in the DOM. Default: 0
 * @param options.retryInterval - Delay between retries (ms). Default: 200
 */
export function useScrollToHashOnLoad(options?: {
  delay?: number;
  retry?: number;
  retryInterval?: number;
}) {
  useEffect(() => {
    const delay = options?.delay ?? 100;
    const retry = options?.retry ?? 0;
    const retryInterval = options?.retryInterval ?? 200;

    const fromStorage = sessionStorage.getItem("scrollToHash");
    const fromLocation = window.location.hash;
    const target = fromStorage || fromLocation;

    if (!target) return;

    let attempts = 0;

    const scroll = () => {
      const el = document.querySelector(target);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        sessionStorage.removeItem("scrollToHash");
      } else if (attempts < retry) {
        attempts++;
        setTimeout(scroll, retryInterval);
      } else {
        console.warn(`Element ${target} not found after ${attempts + 1} attempts`);
      }
    };

    setTimeout(scroll, delay);
  }, []);
}
