// src/components/AnimatedReveal.jsx
import React, { useRef, useEffect, useState } from "react";
import styles from "./AnimatedReveal.module.css";

const variants = {
  subtle: {
    hidden: { opacity: 0, transform: "translateY(16px)" },
    visible: { opacity: 1, transform: "translateY(0)" },
  },
  float: {
    hidden: { opacity: 0, transform: "translateY(24px) scale(0.96)" },
    visible: { opacity: 1, transform: "translateY(0) scale(1)" },
  },
  cinematic: {
    hidden: { opacity: 0, transform: "translateY(40px) scale(0.94)" },
    visible: { opacity: 1, transform: "translateY(0) scale(1)" },
  },
};

export default function AnimatedReveal({
  children,
  as: Tag = "div",
  variant = "subtle",
  delay = 0,
  style = {},
  ...rest
}) {
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
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const selected = variants[variant] || variants.subtle;
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
