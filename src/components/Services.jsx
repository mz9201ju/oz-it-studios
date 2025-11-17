// src/components/Services.jsx
import React from "react";
import styles from "./Services.module.css";
import AnimatedReveal from "./AnimatedReveal";

export default function Services() {
    const services = [
        {
            title: "Cloud Infrastructure & Migrations",
            desc: "Design, deploy, and manage secure, scalable environments on Azure, AWS, and GCP.",
        },
        {
            title: "Web & API Engineering",
            desc: "High-performance React frontends backed by Node and Spring Boot APIs.",
        },
        {
            title: "DevOps & Platform Automation",
            desc: "CI/CD, containers, GitHub Actions, observability, and production hardening.",
        },
        {
            title: "Security & Compliance",
            desc: "Identity, zero-trust, audits, and secure-by-default system design.",
        },
    ];

    return (
        <section id="services" className={styles.services}>
            <AnimatedReveal variant="subtle" delay={0.05}>
                <h2 className={styles.services__title}>IT Services Suite</h2>
                <p className={styles.services__subtitle}>
                    From greenfield builds to complex refactors — architected, implemented,
                    and shipped end-to-end.
                </p>
            </AnimatedReveal>

            <div className={styles.services__grid}>
                {services.map((svc, idx) => (
                    <AnimatedReveal
                        key={svc.title}
                        variant="subtle"
                        delay={0.08 + idx * 0.06}
                    >
                        <div className={styles.services__card}>
                            <h3 className={styles.services__cardTitle}>{svc.title}</h3>
                            <p className={styles.services__cardText}>{svc.desc}</p>
                        </div>
                    </AnimatedReveal>
                ))}
            </div>
        </section>
    );
}
