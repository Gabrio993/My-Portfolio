import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import Contact from "../components/Contacts";

const Index = () => {
  useEffect(() => {
    // Update the document title
    document.title = "Personal Portfolio";
  }, []);

  return (
    <div className="min-h-screen bg-white text-black ">
      <Navbar />
      <main>
        <section id="home" className="section">
          <Hero />
        </section>

        <section id="projects" className="section bg-gray-50">
          <Projects />
        </section>

        <section id="contact" className="section">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
