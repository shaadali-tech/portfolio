const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white text-center px-4 pt-20 relative overflow-hidden"
    >
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 float-animation"></div>
        <div
          className="absolute -bottom-8 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 float-animation"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 slide-up-fade">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 gradient-text">
          Hi, I'm Shaad Ali 👋
        </h1>

        {/* Professional Title */}
        <h2 className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-4">
          Full Stack MERN Developer & Data Analyst (Power BI)
        </h2>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          I build scalable web applications and transform data into meaningful
          insights.
          <br className="hidden sm:block" />
          Expertise in React, Node.js, MongoDB, and Power BI dashboards.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button
            onClick={() => scrollToSection("projects")}
            className="group relative px-8 py-3 font-semibold text-white overflow-hidden rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
          >
            <span className="relative z-10">View My Work</span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-50 blur transition-opacity duration-300"></span>
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="group px-8 py-3 font-semibold text-white border-2 border-purple-500 hover:border-purple-400 rounded-lg hover:bg-purple-500/10 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
          >
            Get in Touch
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center animate-bounce mt-8">
          <svg
            className="w-6 h-6 text-blue-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
