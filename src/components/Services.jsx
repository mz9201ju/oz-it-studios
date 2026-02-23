import styles from "./Services.module.css";
import mobileStyles from "./Services.mobile.module.css";
import AnimatedReveal from "./AnimatedReveal";
import { SERVICES } from "../constants/services";

export default function Services() {
    return (
        <section id="services" className={`${styles.services} ${mobileStyles.services}`}>
            <AnimatedReveal variant="subtle" delay={0.05}>
                <h2 className={`${styles.services__title} ${mobileStyles.services__title}`}>IT Services Suite</h2>
                <p className={`${styles.services__subtitle} ${mobileStyles.services__subtitle}`}>
                    From greenfield builds to complex refactors — architected, implemented,
                    and shipped end-to-end.
                </p>
            </AnimatedReveal>

            <div className={`${styles.services__grid} ${mobileStyles.services__grid}`}>
                {SERVICES.map((svc, idx) => (
                    <AnimatedReveal
                        key={svc.title}
                        variant="subtle"
                        delay={0.08 + idx * 0.06}
                    >
                        <div className={`${styles.services__card} ${mobileStyles.services__card}`}>
                            <h3 className={styles.services__cardTitle}>{svc.title}</h3>
                            <p className={styles.services__cardText}>{svc.desc}</p>
                        </div>
                    </AnimatedReveal>
                ))}
            </div>
        </section>
    );
}
