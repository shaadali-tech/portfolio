const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-20 gap-12 md:gap-16 bg-gradient-to-b from-slate-900 to-slate-800 text-white"
    >
      {/* Profile Image Section */}
      <div className="flex justify-center slide-up-fade">
        <div className="relative group">
          {/* Glowing Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>

          {/* Image Container */}
          <div className="relative">
            <img
              src="/profile.jpg"
              alt="Shaad Ali"
              className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-full shadow-2xl border-4 border-slate-800 transform group-hover:scale-105 transition-transform duration-300"
            />
            {/* Overlay Badge */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
              <span className="text-white font-semibold text-lg">MERN + Power BI</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 max-w-2xl slide-up-fade" style={{ animationDelay: "0.2s" }}>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="gradient-text">About Me</span>
        </h2>

        <div className="space-y-4 text-gray-200">
          <p className="text-lg leading-relaxed">
            Hi! I'm <span className="text-blue-400 font-semibold">Shaad Ali</span>, a passionate Full Stack Developer and Data Analyst with expertise in building modern, scalable web applications and creating insightful data visualizations.
          </p>

          <p className="text-lg leading-relaxed">
            With a strong foundation in the <span className="text-blue-400 font-semibold">MERN stack</span> (MongoDB, Express, React, Node.js), I craft user-friendly interfaces and robust backend solutions. I'm also proficient in <span className="text-purple-400 font-semibold">Power BI</span> for transforming raw data into actionable business intelligence.
          </p>

          <p className="text-lg leading-relaxed">
            I'm passionate about creating clean, efficient code and solving complex problems. When I'm not coding or analyzing data, you'll find me exploring new technologies and contributing to open-source projects.
          </p>
        </div>

        {/* Skills Highlight */}
        <div className="mt-8 grid grid-cols-2 gap-4">
          <div className="bg-slate-700/50 hover:bg-slate-600/50 p-4 rounded-lg border border-blue-500/30 hover:border-blue-500/60 transition-all duration-300">
            <h3 className="font-semibold text-blue-400 mb-2">🌐 Web Dev</h3>
            <p className="text-sm text-gray-300">React, Node.js, MongoDB</p>
          </div>

          <div className="bg-slate-700/50 hover:bg-slate-600/50 p-4 rounded-lg border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300">
            <h3 className="font-semibold text-purple-400 mb-2">📊 Analytics</h3>
            <p className="text-sm text-gray-300">Power BI, SQL, Data Viz</p>
          </div>

          <div className="bg-slate-700/50 hover:bg-slate-600/50 p-4 rounded-lg border border-pink-500/30 hover:border-pink-500/60 transition-all duration-300">
            <h3 className="font-semibold text-pink-400 mb-2">🎨 Frontend</h3>
            <p className="text-sm text-gray-300">Tailwind, UX Design, Responsive</p>
          </div>

          <div className="bg-slate-700/50 hover:bg-slate-600/50 p-4 rounded-lg border border-green-500/30 hover:border-green-500/60 transition-all duration-300">
            <h3 className="font-semibold text-green-400 mb-2">⚙️ Backend</h3>
            <p className="text-sm text-gray-300">APIs, Database, Authentication</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
