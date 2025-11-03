import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "education", "certificates", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Animated mesh background */}
      <div className="fixed inset-0 mesh-bg opacity-50 -z-10" />
      <div className="fixed inset-0 bg-background/80 -z-10" />

      <Navigation activeSection={activeSection} />

      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="education">
          <Education />
        </section>

        <section id="certificates">
          <Certificates />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default Index;
