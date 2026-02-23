import styles from "./Contact.module.css";
import mobileStyles from "./Contact.mobile.module.css";
import AnimatedReveal from "./AnimatedReveal";
import useContactForm from "../hooks/useContactForm";
import { CONTACT_MESSAGES, CONTACT_PHONE_NUMBER } from "../constants/contact";

export default function Contact() {
    const { form, errors, loading, status, handleChange, handleSubmit } = useContactForm();
    const isSuccess = status === CONTACT_MESSAGES.success;

    return (
        <section id="contact" className={`${styles.contact} ${mobileStyles.contact}`}>
            <AnimatedReveal variant="subtle" delay={0.05}>
            <h2 className={`${styles.contact__title} ${mobileStyles.contact__title}`}>Engage for Your Next Build</h2>
                <p className={styles.contact__subtitle}>
                    Whether it’s a greenfield platform, migration, or performance
                    overhaul — you get one owner delivering across architecture,
                    implementation, DevOps, and quality.
                </p>
            </AnimatedReveal>

            <AnimatedReveal variant="float" delay={0.12}>
                <div className={`${styles.contact__card} ${mobileStyles.contact__card} ${isSuccess ? styles.fireAnimation : ""}`}>
                    {/* INPUT ROW */}
                    <div className={`${styles.contact__row} ${mobileStyles.contact__row}`}>

                        <div className={styles.contact__field}>
                            <input
                                name="name"
                                placeholder="Your Name *"
                                className={`${styles.contact__input} ${mobileStyles.contact__input} ${errors.name ? styles.errorInput : ""}`}
                                value={form.name}
                                onChange={handleChange}
                            />
                            {errors.name && <p className={styles.errorText}>{errors.name}</p>}
                        </div>

                        <div className={styles.contact__field}>
                            <input
                                name="email"
                                placeholder="Email Address *"
                                className={`${styles.contact__input} ${mobileStyles.contact__input} ${errors.email ? styles.errorInput : ""}`}
                                value={form.email}
                                onChange={handleChange}
                            />
                            {errors.email && <p className={styles.errorText}>{errors.email}</p>}
                        </div>

                        <div className={styles.contact__field}>
                            <input
                                name="company"
                                placeholder="Company (optional)"
                                className={`${styles.contact__input} ${mobileStyles.contact__input}`}
                                value={form.company}
                                onChange={handleChange}
                            />
                        </div>

                    </div>

                    {/* MESSAGE */}
                    <div className={styles.contact__fieldFull}>
                        <textarea
                            name="message"
                            placeholder="Message *"
                            className={`${styles.contact__textarea} ${mobileStyles.contact__textarea} ${errors.message ? styles.errorInput : ""}`}
                            value={form.message}
                            onChange={handleChange}
                        />
                        {errors.message && <p className={styles.errorText}>{errors.message}</p>}
                    </div>

                    {/* BUTTONS */}
                    <div className={styles.contact__buttonWrap}>
                        <button
                            type="button"
                            className={`${styles.contact__button} ${mobileStyles.contact__button}`}
                            onClick={handleSubmit}
                            disabled={loading}
                        >
                            {loading ? "Sending..." : "Send Message"}
                        </button>
                    </div>

                    <div className={styles.contact__buttonWrap}>
                        <button
                            type="button"
                            className={`${styles.contact__button} ${mobileStyles.contact__button}`}
                            onClick={() => window.location.assign(`tel:${CONTACT_PHONE_NUMBER}`)}
                        >
                            Call OZ
                        </button>
                    </div>

                    {/* STATUS */}
                    {status && <p className={styles.contact__status}>{status}</p>}
                </div>
            </AnimatedReveal>
        </section>
    );
}
