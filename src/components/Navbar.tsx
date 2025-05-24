import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => (window.scrollY > 50 ? setScrolled(true) : setScrolled(false));
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-10 py-4 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="font-bold text-xl">Portfolio</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <button onClick={() => scrollToSection("home")} className="nav-link">
            Home
          </button>
          <button onClick={() => scrollToSection("projects")} className="nav-link">
            Projects
          </button>
          <button onClick={() => scrollToSection("contact")} className="nav-link">
            Contact
          </button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 transition-all duration-500 ease-in-out ${
          isMenuOpen ? "opacity-100 " : "opacity-0  scale-75  "
        }`}
      >
        <div className="flex flex-col space-y-4 px-4">
          <button onClick={() => scrollToSection("home")} className="nav-link text-left w-fit">
            Home
          </button>
          <button onClick={() => scrollToSection("projects")} className="nav-link text-left w-fit">
            Projects
          </button>
          <button onClick={() => scrollToSection("contact")} className="nav-link text-left w-fit">
            Contact
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
