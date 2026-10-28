import React, { useState, useEffect } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Styleguide from "./pages/Styleguide";
import NotFound from "./pages/NotFound";
import SignalIntro from "./components/ui/SignalIntro";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Research from "./components/Research/Research";
import Certifications from "./components/Certifications/Certifications";
import About from "./components/About/About";
import ResumeCTA from "./components/ResumeCTA/ResumeCTA";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { SHOW_EXPERIENCE, experience } from "./data/experience";
import Experience from "./components/Experience/Experience";

function AppContent() {
  const [currentRoute, setCurrentRoute] = useState("home");

  useEffect(() => {
    const checkRoute = () => {
      const pathname = window.location.pathname;
      const hash = window.location.hash;

      if (pathname === "/styleguide" || hash === "#styleguide") {
        setCurrentRoute("styleguide");
      } else if (
        pathname !== "/" &&
        pathname !== "" &&
        pathname !== "/index.html" &&
        !pathname.startsWith("/#") &&
        !pathname.startsWith("/certificates") &&
        !pathname.startsWith("/images") &&
        !pathname.startsWith("/projects") &&
        !pathname.startsWith("/research") &&
        !pathname.endsWith(".pdf")
      ) {
        // Unknown route
        setCurrentRoute("404");
      } else {
        setCurrentRoute("home");
      }
    };

    checkRoute();
    window.addEventListener("hashchange", checkRoute);
    window.addEventListener("popstate", checkRoute);
    return () => {
      window.removeEventListener("hashchange", checkRoute);
      window.removeEventListener("popstate", checkRoute);
    };
  }, []);

  if (currentRoute === "styleguide") {
    return <Styleguide />;
  }

  if (currentRoute === "404") {
    return <NotFound />;
  }

  return (
    <>
      <SignalIntro />
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <main id="main">
        {/* Section order per brief Section 4 */}
        <Hero />
        <Projects />
        <Skills />
        <Research />
        <Certifications />
        <About />
        {SHOW_EXPERIENCE && <Experience />}
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
