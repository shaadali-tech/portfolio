const Skills = () => {
  const webDevSkills = [
    { name: "React.js", level: 85, icon: "⚛️" },
    { name: "Node.js", level: 80, icon: "🟢" },
    { name: "MongoDB", level: 80, icon: "🍃" },
    { name: "JavaScript", level: 90, icon: "✨" },
    { name: "Express.js", level: 85, icon: "🚀" },
    { name: "Tailwind CSS", level: 90, icon: "🎨" },
  ];

  const dataSkills = [
    { name: "Power BI", level: 85, icon: "📊" },
    { name: "Excel", level: 90, icon: "📈" },
    { name: "SQL", level: 85, icon: "🗄️" },
    { name: "Data Visualization", level: 88, icon: "📉" },
    { name: "Data Analysis", level: 85, icon: "🔍" },
    { name: "Report Design", level: 80, icon: "📋" },
  ];

  const SkillBar = ({ skill }) => {
    return (
      <div className="skill-item group">
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{skill.icon}</span>
            <span className="font-semibold text-gray-200 group-hover:text-white transition-colors">
              {skill.name}
            </span>
          </div>
          <span className="text-sm font-bold text-blue-400 group-hover:text-blue-300 transition-colors">
            {skill.level}%
          </span>
        </div>

        {/* Progress Bar */}
        <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transform origin-left transition-all duration-1000 ease-out group-hover:shadow-lg group-hover:shadow-blue-500/50"
            style={{
              width: `${skill.level}%`,
              animation: `slideInBar 0.8s ease-out forwards`,
            }}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <section
      id="skills"
      className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white px-4 py-20 flex flex-col items-center"
    >
      <div className="max-w-6xl w-full">
        {/* Section Header */}
        <div className="text-center mb-16 slide-up-fade">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Proficient in MERN stack development and Power BI analytics
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Web Development Section */}
          <div
            className="space-y-6 slide-up-fade"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🌐</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Web Development</h3>
                <p className="text-gray-400 text-sm">MERN Stack</p>
              </div>
            </div>

            <div className="space-y-5 bg-slate-700/30 p-8 rounded-xl border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300">
              {webDevSkills.map((skill, index) => (
                <div key={index}>
                  <SkillBar skill={skill} />
                </div>
              ))}
            </div>
          </div>

          {/* Data Analysis Section */}
          <div
            className="space-y-6 slide-up-fade"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Data Analysis</h3>
                <p className="text-gray-400 text-sm">Power BI & SQL</p>
              </div>
            </div>

            <div className="space-y-5 bg-slate-700/30 p-8 rounded-xl border border-orange-500/20 hover:border-orange-500/50 transition-all duration-300">
              {dataSkills.map((skill, index) => (
                <div key={index}>
                  <SkillBar skill={skill} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Skills Summary */}
        <div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 slide-up-fade"
          style={{ animationDelay: "0.3s" }}
        >
          {[
            { title: "Full Stack", count: "MERN" },
            { title: "Database", count: "MongoDB" },
            { title: "Analytics", count: "Power BI" },
            { title: "Frontend", count: "React" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-slate-700/50 hover:bg-slate-600/50 p-6 rounded-lg text-center border border-slate-600 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <p className="text-gray-300 text-sm mb-2">{item.title}</p>
              <p className="text-xl font-bold gradient-text">{item.count}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes slideInBar {
          from {
            width: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
