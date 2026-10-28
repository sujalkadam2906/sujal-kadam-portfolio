import React, { useState, useEffect } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Styleguide from "./pages/Styleguide";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Research from "./components/Research/Research";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Certifications from "./components/Certifications/Certifications";
import Achievements from "./components/Achievements/Achievements";
import ResumeCTA from "./components/ResumeCTA/ResumeCTA";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { SHOW_EXPERIENCE } from "./data/experience";

function AppContent() {
  const [isStyleguide, setIsStyleguide] = useState(false);

  useEffect(() => {
    const checkRoute = () => {
      setIsStyleguide(
        window.location.pathname === "/styleguide" ||
        window.location.hash === "#styleguide"
      );
    };
    checkRoute();
    window.addEventListener("hashchange", checkRoute);
    window.addEventListener("popstate", checkRoute);
    return () => {
      window.removeEventListener("hashchange", checkRoute);
      window.removeEventListener("popstate", checkRoute);
    };
  }, []);

  if (isStyleguide) {
    return <Styleguide />;
  }

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Research />
        {SHOW_EXPERIENCE && <Experience />}
        <Education />
        <Certifications />
        <Achievements />
        <ResumeCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
