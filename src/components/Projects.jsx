import ProjectCard from './ProjectCard';
import project1 from '../assets/images/project1.jpg';
import project2 from '../assets/images/project2.jpg';

const projects = [
  {
    title: 'To do App',
    description: 'A fully responsive e-commerce platform with cart functionality and payment integration.',
    tags: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    image: project1,
    demoUrl: 'https://tumelosine.github.io/to-do-react-app/',
    codeUrl: 'https://github.com/tumelosine/to-do-react-app',
  },
  {
    title: 'Booking Restaurant Table',
    description: 'A modern fitness application design with workout tracking and nutrition planning.',
    tags: ['UI/UX', 'Figma', 'Mobile Design'],
    image: project2,
    demoUrl: 'https://little-lemon-booking-website.vercel.app/',
    codeUrl: 'https://github.com/tumelosine/lemonsite',
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Here are some of my favorite projects I've worked on, showcasing both
          development and design skills.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="#"
            className="btn-primary inline-flex items-center"
          >
            View All Projects
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;