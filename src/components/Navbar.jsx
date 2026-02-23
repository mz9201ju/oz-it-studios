import styles from "./Navbar.module.css";
import mobileStyles from "./Navbar.mobile.module.css";
import useScrollThreshold from "../hooks/useScrollThreshold";

export default function Navbar() {
    const isShrunk = useScrollThreshold(80);

    return (
        <nav className={`${styles.navbar} ${mobileStyles.navbar} ${isShrunk ? `${styles.shrink} ${mobileStyles.shrink}` : ""}`}>
            <div className={`${styles.centerWrapper} ${mobileStyles.centerWrapper}`}>
                <div className={`${styles.navbar__logoOrb} ${mobileStyles.navbar__logoOrb} ${isShrunk ? `${styles.shrinkLogo} ${mobileStyles.shrinkLogo}` : ""}`} />
                <div className={`${styles.navbar__brandText} ${mobileStyles.navbar__brandText} ${isShrunk ? `${styles.shrinkText} ${mobileStyles.shrinkText}` : ""}`}>
                    OZ · IT STUDIOS
                </div>
            </div>
        </nav>
    );
}
