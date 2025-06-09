interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    githubUrl: string;
    technologies: string[];
  };
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="project-card flex flex-col">
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <p className="text-gray-700 mb-4 flex-grow">{project.description}</p>

      <div className="mb-4 flex flex-wrap gap-2">
        {project.technologies.map((tech, index) => (
          <span key={index} className="text-xs px-2 py-1 bg-gray-100 rounded-full">
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center w-fit gap-2 text-sm font-medium hover:underline"
        >
          <img src="images/github.svg" alt="logo-github" className="h-7 w-7" />
          View on GitHub
        </a>

        {project.title === "L-N-D-S" && <span className="p-1 bg-red-500 text-white text-xs rounded">Private</span>}
        {project.title.includes("Documentation") && <span className="p-1 bg-green-500 text-white text-xs rounded">Documentation</span>}
      </div>
    </div>
  );
};

export default ProjectCard;
