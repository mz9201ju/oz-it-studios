export const REVEAL_VARIANTS = {
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

export const REVEAL_THRESHOLD = 0.15;
