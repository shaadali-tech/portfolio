import Projectsboth from "../data/Projectsboth";

const Projects = () => {
  const getTechStack = (title) => {
    const techMap = {
      "E-commmerce": ["React", "Node.js", "MongoDB", "Tailwind"],
      "Weather-Dashboard": ["React", "API", "Responsive"],
      "E-commerce Sales Dashboard": ["Power BI", "Analytics", "Data Viz"],
      "Car Sales Dashboard": ["Power BI", "SQL", "Dashboard"],
    };
    return techMap[title] || ["MERN", "Web"];
  };

  const getTechColor = (tech) => {
    const colors = {
      React: "bg-blue-500/20 text-blue-300 border-blue-500/30",
      Node: "bg-green-500/20 text-green-300 border-green-500/30",
      "MongoDB": "bg-green-600/20 text-green-400 border-green-600/30",
      Tailwind: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
      API: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
      Responsive: "bg-purple-500/20 text-purple-300 border-purple-500/30",
      "Power BI": "bg-orange-500/20 text-orange-300 border-orange-500/30",
      Analytics: "bg-red-500/20 text-red-300 border-red-500/30",
      "Data Viz": "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
      SQL: "bg-blue-600/20 text-blue-400 border-blue-600/30",
      Dashboard: "bg-pink-500/20 text-pink-300 border-pink-500/30",
    };
    return colors[tech] || "bg-gray-500/20 text-gray-300 border-gray-500/30";
  };

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-slate-800 to-slate-900 text-white px-4 py-20"
    >
      <div className="max-w-7xl w-full">
        {/* Section Header */}
        <div className="text-center mb-16 slide-up-fade">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">My Projects</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Showcasing my best work in full-stack development and data analytics
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Projectsboth.map((project, index) => (
            <div
              key={project.id}
              className="group relative h-full slide-up-fade"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card Container */}
              <div className="bg-slate-700/50 backdrop-blur-md rounded-xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 border border-slate-600 hover:border-blue-500/50 h-full flex flex-col">
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-slate-600">
                  <img
                    src={project.Image || "/profile.jpg"}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = "/profile.jpg";
                    }}
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Tech Stack Badges - Overlay */}
                  <div className="absolute top-4 right-4 flex flex-wrap gap-2 justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {getTechStack(project.title)
                      .slice(0, 2)
                      .map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 rounded-full bg-blue-600/80 text-white"
                        >
                          {tech}
                        </span>
                      ))}
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 mb-4 flex-1 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {getTechStack(project.title).map((tech, i) => (
                      <span
                        key={i}
                        className={`text-xs px-3 py-1 rounded-full border ${getTechColor(
                          tech
                        )}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Button Container */}
                  <div className="flex gap-3 mt-auto">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 text-center"
                    >
                      Live Demo
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-slate-600 hover:bg-slate-500 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 border border-slate-500 hover:border-slate-400 text-center"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
