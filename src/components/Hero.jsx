import devImage from '../assets/images/dev-image.jpg';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="gradient-text">Sinesipho Gungqwa</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-gray-600 mb-6">
            Frontend Developer & UI/UX Designer
          </h2>
          <p className="text-gray-600 mb-8 max-w-lg">
            I create beautiful, functional websites and applications with a focus
            on user experience and modern design aesthetics.
          </p>
          <div className="flex space-x-4">
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full border-2 border-pink-500 text-pink-600 font-medium hover:bg-pink-50 transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full blur-md opacity-30 animate-pulse"></div>
            <img
              src={devImage}
              alt="Developer"
              className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;