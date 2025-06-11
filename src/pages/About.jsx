import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Online Earning App",
    description: "A responsive web app with user authentication and live data sync.",
    link: "https://meer-rind.github.io/online-earning-app/",
  },
  {
    id: 2,
    title: "Project Two",
    description: "A modern landing page built with React and Tailwind CSS.",
    link: "https://example.com/project2",
  },
  {
    id: 3,
    title: "Project Three",
    description: "A portfolio project integrating email forms and animations.",
    link: "https://example.com/project3",
  },
];

export default function About() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="about" className="bg-gray-900 py-16 border-b rounded-xl px-4 sm:px-6 lg:px-8 text-yellow-300">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-16 mt-2 pb-4 border-yellow-500 text-center sm:text-left">
          Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.03 }}
              className="bg-gray-800 border border-gray-700 hover:border-yellow-400 transition-all duration-300 p-6 rounded-2xl shadow-md flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold text-yellow-200 mb-2">
                  {project.title}
                </h3>
                <p className="text-yellow-100 mb-4 text-sm">
                  {project.description}
                </p>
              </div>

              <div className="flex justify-between items-center mt-auto pt-4">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-sm font-medium text-yellow-400 hover:underline"
                >
                  Learn More
                </button>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-400 text-gray-900 p-2 rounded-full hover:bg-yellow-300 transition"
                  aria-label={`Visit ${project.title}`}
                >
                  <ArrowRight size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Selected Project Display */}
        {selectedProject && (
          <motion.div
            key={selectedProject.id}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-12 p-6 bg-gray-800 rounded-xl shadow-inner border border-yellow-500"
          >
            <h3 className="text-2xl font-semibold text-yellow-300 mb-2">
              {selectedProject.title}
            </h3>
            <p className="text-yellow-100 text-sm sm:text-base">{selectedProject.description}</p>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
