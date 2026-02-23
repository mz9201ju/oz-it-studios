// src/components/AnimatedReveal.jsx
import { useEffect, useRef, useState } from "react";
import styles from "./AnimatedReveal.module.css";
import { REVEAL_THRESHOLD, REVEAL_VARIANTS } from "../constants/animation";

export default function AnimatedReveal({
  children,
  as = "div",
  variant = "subtle",
  delay = 0,
  style = {},
  ...rest
}) {
  const Tag = as;
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: REVEAL_THRESHOLD }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const selected = REVEAL_VARIANTS[variant] || REVEAL_VARIANTS.subtle;
  const stateStyles = visible ? selected.visible : selected.hidden;

  return (
    <Tag
      ref={ref}
      className={styles.animatedReveal}
      style={{
        ...stateStyles,
        transitionDelay: `${delay}s`,
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
