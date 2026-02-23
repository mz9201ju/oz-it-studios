import { FaArrowUp } from "react-icons/fa";
import styles from "./ScrollToTopButton.module.css";
import mobileStyles from "./ScrollToTopButton.mobile.module.css";
import useScrollThreshold from "../hooks/useScrollThreshold";

export default function ScrollToTopButton() {
    const visible = useScrollThreshold(300);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className={`${styles.scrollToTopButton} ${mobileStyles.scrollToTopButton} ${!visible ? styles.scrollToTopButtonHidden : ""}`}
        >
            <FaArrowUp className={`${styles.scrollToTopIcon} ${mobileStyles.scrollToTopIcon}`} />
        </button>
    );
}
