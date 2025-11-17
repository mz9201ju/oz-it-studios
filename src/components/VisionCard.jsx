// src/components/VisionCard.jsx
import React, { useState } from "react";
import styles from "./VisionCard.module.css";

export default function VisionCard() {
    const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

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

        setTilt({ rotateX, rotateY });
    };

    const resetTilt = () => {
        setTilt({ rotateX: 0, rotateY: 0 });
    };

    return (
        <div
            className={styles.visionCard}
            style={{
                transform: `perspective(900px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
            }}
            onMouseMove={handleMove}
            onMouseLeave={resetTilt}
        >
            <div className={styles.visionCard__badge}>
                Live system snapshot
            </div>

            <div className={styles.visionCard__meta}>
                • Active environments: <strong>Prod · Staging</strong>
            </div>

            <h3 className={styles.visionCard__title}>Delivery Profile</h3>

            <p className={styles.visionCard__text}>
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
