import { useEffect, useRef } from "react";
import styles from "./VisionCard.module.css";
import mobileStyles from "./VisionCard.mobile.module.css";

export default function VisionCard() {
    const cardRef = useRef(null);
    const frameRef = useRef(null);

    useEffect(() => {
        return () => {
            if (frameRef.current) {
                cancelAnimationFrame(frameRef.current);
            }
        };
    }, []);

    const handleMove = (e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const midX = rect.width / 2;
        const midY = rect.height / 2;

        const deltaX = (x - midX) / midX;
        const deltaY = (y - midY) / midY;

        const rotateY = deltaX * 10;
        const rotateX = -deltaY * 10;

        if (frameRef.current) {
            cancelAnimationFrame(frameRef.current);
        }

        frameRef.current = requestAnimationFrame(() => {
            card.style.setProperty("--rotate-x", `${rotateX}deg`);
            card.style.setProperty("--rotate-y", `${rotateY}deg`);
        });
    };

    const resetTilt = () => {
        if (!cardRef.current) {
            return;
        }

        cardRef.current.style.setProperty("--rotate-x", "0deg");
        cardRef.current.style.setProperty("--rotate-y", "0deg");
    };

    return (
        <div
            ref={cardRef}
            className={`${styles.visionCard} ${mobileStyles.visionCard}`}
            onMouseMove={handleMove}
            onMouseLeave={resetTilt}
        >
            <div className={styles.visionCard__badge}>
                Live system snapshot
            </div>

            <div className={`${styles.visionCard__meta} ${mobileStyles.visionCard__meta}`}>
                • Active environments: <strong>Prod · Staging</strong>
            </div>

            <h3 className={`${styles.visionCard__title} ${mobileStyles.visionCard__title}`}>Delivery Profile</h3>

            <p className={`${styles.visionCard__text} ${mobileStyles.visionCard__text}`}>
                Think of this as your control center: one engineer owning design,
                build, and rollout — not a handoff maze.
                <br />
                <br />
                • System design mapped to real code
                <br />
                • CI/CD you can explain in 60 seconds
                <br />
                • Monitoring from day zero
            </p>
        </div>
    );
}
