const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-slate-900 to-slate-700 text-white text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Hi, I'm Shaad Ali 👋
      </h1>

      <p className="text-lg md:text-2xl mb-6">
        Full Stack Developer | React Enthusiast 🚀
      </p>

      <div className="flex gap-4">
        <button className="bg-blue-500 px-6 py-2 rounded-lg hover:bg-blue-600">
          View Projects
        </button>

        <button className="border border-white px-6 py-2 rounded-lg hover:bg-white hover:text-black">
          Contact Me
        </button>
      </div>
    </section>
  );
};

export default Hero;
