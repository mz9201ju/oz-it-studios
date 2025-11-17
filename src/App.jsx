import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import SocialFooter from "./components/SocialFooter";
import ScrollToTopButton from "./components/ScrollToTopButton";

import styles from "./App.module.css";

export default function App() {
  return (
    <div className={styles.page}>
      <div className={styles.maxWidth}>
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
