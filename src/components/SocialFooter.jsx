import {
    FaFacebookF,
    FaGithub,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BUY_COFFEE_LINK, SOCIAL_LINKS } from "../constants/social";
import styles from "./SocialFooter.module.css";
import mobileStyles from "./SocialFooter.mobile.module.css";

const ICON_BY_KEY = {
    github: FaGithub,
    linkedin: FaLinkedinIn,
    youtube: FaYoutube,
    facebook: FaFacebookF,
    email: MdEmail,
    instagram: FaInstagram,
};

export default function SocialFooter() {
    return (
        <footer className={styles.socialFooter}>
            <div className={`${styles.socialLinks} ${mobileStyles.socialLinks}`}>
                {SOCIAL_LINKS.map((link) => {
                    const Icon = ICON_BY_KEY[link.key];

                    return (
                        <a
                            key={link.key}
                            href={link.href}
                            className={`${styles.socialButton} ${mobileStyles.socialButton} ${styles[link.key]}`}
                            target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                            rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
                            aria-label={link.label}
                        >
                            <Icon />
                        </a>
                    );
                })}
            </div>

            <div className={`${styles.buyCoffeeContainer} ${mobileStyles.buyCoffeeContainer}`}>
                <a href={BUY_COFFEE_LINK} target="_blank" rel="noreferrer">
                    <img
                        src="https://cdn.buymeacoffee.com/buttons/default-orange.png"
                        alt="Buy Me a Coffee"
                    />
                </a>
            </div>

            <p className={styles.copyright}>
                © {new Date().getFullYear()} OZ · IT STUDIOS — Built by Omer Zahid
            </p>
        </footer>
    );
}
