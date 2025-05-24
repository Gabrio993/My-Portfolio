import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-[75vh] flex flex-col justify-center pt-16">
      <div className="max-w-3xl">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">Hello, I'm a Web Developer</h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-2xl">
          Passionate about clean code and intuitive design. Gaining experience in developing modern web applications with Vue.js and React.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button onClick={scrollToProjects} className="btn btn-dark">
            View My Work
          </button>
          <a href="#contact" className="btn">
            Get In Touch
          </a>
        </div>
      </div>

      <div className=" mx-auto animate-bounce ">
        <button onClick={scrollToProjects} className=" cursor-pointer mx-auto relative top-20" aria-label="Scroll down">
          <ArrowDown className="text-black" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
