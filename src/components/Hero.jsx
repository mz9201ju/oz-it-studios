// src/components/Hero.jsx
import React from "react";
import styles from "./Hero.module.css";
import VisionCard from "./VisionCard";
import { scrollToSection } from "../utils/scrollToSection";
import AnimatedReveal from "./AnimatedReveal";

export default function Hero() {
    return (
        <main className={styles.hero}>
            {/* LEFT: Text block */}
            <AnimatedReveal
                variant="subtle"
                delay={0.05}
                style={{ width: "100%" }}
            >
                <h1 className={styles.hero__title}>
                    Vision-level
                    <span className={styles.hero__titleLine}>
                        <span className={styles.hero__titleHighlight}>IT delivery</span>
                        for real businesses.
                    </span>
                </h1>

                <p className={styles.hero__subtitle}>
                    Senior-level engineering across cloud, web, DevOps, and security —
                    built with the same obsession for detail you expect from premium
                    hardware.
                </p>

                <div className={styles.hero__pillsRow}>
                    <span className={styles.hero__pill}>React · Spring Boot · Azure</span>
                    <span className={styles.hero__pill}>End-to-end delivery</span>
                    <span className={styles.hero__pill}>Hands-on architecture</span>
                </div>

                <div className={styles.hero__buttons}>
                    <button
                        type="button"
                        className={styles.hero__buttonPrimary}
                        onClick={() => scrollToSection("services")}
                    >
                        View Services
                    </button>

                    <button
                        type="button"
                        className={styles.hero__buttonGhost}
                        onClick={() => scrollToSection("projects")}
                    >
                        View Projects
                    </button>
                </div>
            </AnimatedReveal>

            {/* RIGHT: Vision card */}
            <AnimatedReveal
                variant="float"
                delay={0.18}
                style={{ width: "100%" }}
            >
                <VisionCard />
            </AnimatedReveal>
        </main>
    );
}
