import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTopButton() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <button
            onClick={scrollToTop}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.18)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
            }}
            style={{
                position: "fixed",
                bottom: "32px",
                right: "26px",
                height: "55px",
                width: "55px",
                borderRadius: "50%",
                display: visible ? "flex" : "none",
                alignItems: "center",
                justifyContent: "center",
                background:
                    "linear-gradient(120deg, #38bdf8, #a855f7, #22c55e)",
                boxShadow: "0 6px 20px rgba(0,0,0,0.35)",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
                zIndex: 9999,
            }}
        >
            <FaArrowUp style={{ color: "#fff", fontSize: "20px" }} />
        </button>
    );
}
