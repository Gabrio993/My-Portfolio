import { useState } from "react";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects";

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const technologies = Array.from(new Set(projects.flatMap((project) => project.technologies)));

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.technologies.includes(filter));

  return (
    <div>
      <h2 className="section-title">Projects</h2>

      <div className="mb-8 flex flex-wrap gap-2">
        <button
          className={`px-3 py-1 rounded-full text-sm border ${filter === "all" ? "bg-black text-white" : "bg-white text-black border-black"}`}
          onClick={() => setFilter("all")}
        >
          All
        </button>

        {technologies.map((tech) => (
          <button
            key={tech}
            className={`px-3 py-1 rounded-full text-sm border ${filter === tech ? "bg-black text-white" : "bg-white text-black border-black"}`}
            onClick={() => setFilter(tech)}
          >
            {tech}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
