import Projectsboth from "../data/Projectsboth";

const Projects = () => {
  return (
    <section className="min-h-screen flex  flex-col justify-center items-center bg-gradient-to-r from-slate-700 to-slate-900 text-white text-center px-4">
      <h2 className="text-3xl mt-8 font-bold mb-6">My Projects</h2>
      <div className="flex flex-row flex-wrap justify-center gap-6">
        {Projectsboth.map((project) => (
          <div
            key={project.id}
            className="bg-slate-800 p-6 rounded-lg shadow-lg flex flex-col items-center mb-6 w-full max-w-md hover:scale-105 transition duration-300"
          >
            <img
              src={project.Image || "/profile.jpg"}
              alt={project.title}
              className="w-full h-48 object-cover mb-4 rounded"
              onError={(e) => {
                e.currentTarget.src = "/profile.jpg";
              }}
            />
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-row gap-4">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Live
                </a>
              </button>
              <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
