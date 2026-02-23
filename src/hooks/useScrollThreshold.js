import { useEffect, useState } from "react";

export default function useScrollThreshold(threshold) {
  const [isPastThreshold, setIsPastThreshold] = useState(false);

  useEffect(() => {
    let frameId = null;

    const updateThresholdState = () => {
      setIsPastThreshold(window.scrollY > threshold);
      frameId = null;
    };

    const handleScroll = () => {
      if (frameId !== null) {
        return;
      }
      frameId = window.requestAnimationFrame(updateThresholdState);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  return isPastThreshold;
}
