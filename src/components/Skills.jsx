const skills = [
    { name: 'HTML', level: 95, color: 'bg-pink-400' },
    { name: 'CSS/Tailwind', level: 90, color: 'bg-pink-500' },
    { name: 'JavaScript', level: 85, color: 'bg-purple-400' },
    { name: 'React', level: 80, color: 'bg-purple-500' },
    { name: 'UI/UX Design', level: 90, color: 'bg-pink-600' },
    { name: 'Figma', level: 85, color: 'bg-purple-600' },
  ];
  
  const Skills = () => {
    return (
      <section id="skills" className="py-20 px-6 bg-pink-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            My <span className="gradient-text">Skills</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Technical Skills</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className={`${skill.color} h-3 rounded-full`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Design Tools</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <h4 className="font-medium text-gray-800">Adobe Creative Suite</h4>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl">✏️</span>
                  </div>
                  <h4 className="font-medium text-gray-800">Figma</h4>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl">🖌️</span>
                  </div>
                  <h4 className="font-medium text-gray-800">Sketch</h4>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl">📐</span>
                  </div>
                  <h4 className="font-medium text-gray-800">Procreate</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;