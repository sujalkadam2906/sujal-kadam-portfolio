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

function App() {
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
        <Experience />
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

export default App;
