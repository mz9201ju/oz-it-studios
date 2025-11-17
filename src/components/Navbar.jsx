// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
    const [isShrunk, setIsShrunk] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsShrunk(window.scrollY > 80);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`${styles.navbar} ${isShrunk ? styles.shrink : ""}`}>
            <div className={styles.centerWrapper}>
                <div className={`${styles.navbar__logoOrb} ${isShrunk ? styles.shrinkLogo : ""}`} />
                <div className={`${styles.navbar__brandText} ${isShrunk ? styles.shrinkText : ""}`}>
                    OZ · IT STUDIO
                </div>
            </div>
        </nav>
    );
}
