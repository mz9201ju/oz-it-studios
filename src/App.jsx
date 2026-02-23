import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import SocialFooter from "./components/SocialFooter";
import ScrollToTopButton from "./components/ScrollToTopButton";

import styles from "./App.module.css";
import mobileStyles from "./App.mobile.module.css";

export default function App() {
  return (
    <div className={`${styles.page} ${mobileStyles.page}`}>
      <div className={`${styles.maxWidth} ${mobileStyles.maxWidth}`}>
        <ScrollToTopButton />
        <Navbar />
        <Hero />
        <Services />
        <Projects />
        <Contact />
        <SocialFooter />
      </div>
    </div>
  );
}
