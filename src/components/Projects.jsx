import styles from "./Projects.module.css";
import mobileStyles from "./Projects.mobile.module.css";
import AnimatedReveal from "./AnimatedReveal";
import { PROJECTS } from "../constants/projects";

export default function Projects() {
    return (
        <section id="projects" className={`${styles.projects} ${mobileStyles.projects}`}>
            <AnimatedReveal variant="subtle" delay={0.05}>
                <h2 className={styles.projects__title}>Featured Projects</h2>
                <p className={styles.projects__subtitle}>
                    Real-world engineering across cloud, web, automation, and platform delivery.
                </p>
            </AnimatedReveal>

            <div className={`${styles.projects__grid} ${mobileStyles.projects__grid}`}>
                {PROJECTS.map((p, idx) => (
                    <AnimatedReveal
                        key={p.title}
                        variant="float"
                        delay={0.08 + idx * 0.06}
                    >
                        <a
                            className={`${styles.projects__card} ${mobileStyles.projects__card}`}
                            href={p.url}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`Open ${p.title}`}
                        >
                            {/* Screenshot */}
                            <div className={`${styles.projects__imageWrap} ${mobileStyles.projects__imageWrap}`}>
                                <img
                                    src={p.img}
                                    alt={p.title}
                                    className={styles.projects__image}
                                    loading="lazy"
                                />
                            </div>

                            {/* Text content */}
                            <h3 className={styles.projects__cardTitle}>{p.title}</h3>
                            <p className={styles.projects__cardDesc}>{p.desc}</p>

                            <span className={styles.projects__cardCTA}>
                                View Project →
                            </span>
                        </a>
                    </AnimatedReveal>
                ))}
            </div>
        </section>
    );
}
