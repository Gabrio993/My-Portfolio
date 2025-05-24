import { Project } from "../types/types";

const projects: Project[] = [
  {
    id: 1,
    title: "L-N-D-S",
    description: "A fully responsive news platform built with Vue.js, Nuxt.js and Tailwind CSS, composition API and Pinia for state management.",
    githubUrl: "https://github.com/Gabrio993",
    technologies: ["Vue.js", "Nuxt.js", "Tailwind CSS", "Typescript", "Composition API"],
  },
  {
    id: 2,
    title: "Angular-Fitness",
    description: "This project lets logged-in users view gym classes and book them until spots run out.",
    githubUrl: "https://github.com/Gabrio993/Angular-Project",
    technologies: ["Angular.js", "Typescript", "Bootstrap"],
  },
  {
    id: 3,
    title: "Gym-Equipment",
    description: "A small web app for booking gym equipment, featuring user registration and authentication for secure access.",
    githubUrl: "https://github.com/Gabrio993/Gym-Equipment",
    technologies: ["React.js", "Typescript", "Tailwind CSS"],
  },
  {
    id: 4,
    title: "Web-API",
    description: "A simple web APi for a book review service built in PHP and js for the client side",
    githubUrl: "https://github.com/Gabrio993/Book-Review-API",
    technologies: ["PHP", "Javascript"],
  },
  {
    id: 5,
    title: "Portfolio",
    description: "A personal portfolio landing page bult in React to introduce myself and showcase a selection of my projects",
    githubUrl: "https://github.com/Gabrio993/My-Portfolio",
    technologies: ["React.js", "Typescript", "Tailwind CSS"],
  },
  {
    id: 6,
    title: "Work-Hours-Tracker",
    description: "A simple Python script with a graphical interface (GUI) made with `tkinter` to help you track your work hours for each month.",
    githubUrl: "https://github.com/Gabrio993/Work-Hours-Tracker",
    technologies: ["Python"],
  },
];

export default projects;
