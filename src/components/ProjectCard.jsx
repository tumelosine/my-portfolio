import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs px-3 py-1 bg-pink-100 text-pink-800 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex space-x-3">
          <a
            href={project.demoUrl}
            className="text-sm font-medium text-pink-600 hover:text-pink-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
          <a
            href={project.codeUrl}
            className="text-sm font-medium text-purple-600 hover:text-purple-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Code
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;