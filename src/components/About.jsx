const About = () => {
    return (
      <section id="about" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="gradient-text">About Me</span>
          </h2>
          
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-10">
              <p className="text-gray-600 mb-4">
                I'm a passionate frontend developer with a keen eye for design. 
                With over 5 years of experience in the industry, I specialize in 
                creating visually appealing and user-friendly web applications.
              </p>
              <p className="text-gray-600 mb-4">
                My journey in tech started when I was studying graphic design 
                and discovered my love for coding. Now, I combine both skills 
                to create digital experiences that are not only functional but 
                also beautiful.
              </p>
              <p className="text-gray-600 mb-6">
                When I'm not coding, you can find me painting, exploring new 
                coffee shops, or hiking with my dog.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-pink-100 text-pink-800 px-4 py-2 rounded-full">
                  Creative
                </div>
                <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full">
                  Detail-Oriented
                </div>
                <div className="bg-pink-100 text-pink-800 px-4 py-2 rounded-full">
                  Problem Solver
                </div>
                <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full">
                  Team Player
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 bg-gradient-to-br from-pink-100 to-purple-100 p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">My Education</h3>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex flex-col items-center mr-6">
                    <div className="w-4 h-4 bg-pink-500 rounded-full"></div>
                    <div className="w-px h-full bg-gradient-to-b from-pink-500 to-purple-500"></div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">B.Sc. Software Engineering</h4>
                    <p className="text-gray-600">IU International University of Applied Sciences, Present</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex flex-col items-center mr-6">
                    <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                    <div className="w-px h-full bg-gradient-to-b from-purple-500 to-pink-500"></div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">Professional Front-End Developer Certification</h4>
                    <p className="text-gray-600">Coursera & Meta, 2025</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex flex-col items-center mr-6">
                    <div className="w-4 h-4 bg-pink-500 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">Frontend Development Bootcamp</h4>
                    <p className="text-gray-600">Umuzi, 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;