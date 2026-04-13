const About = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-10  gap-10 bg-slate-100">
      <div className="flex justify-center">
        <img
          src="profile.jpg"
          alt="Profile"
          className="w-60 h-60 object-cover rounded-full shadow-lg"
        />
      </div>

      <div className="max-w-xl text-center md:text-left">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>

        <p className="text-gray-700 mb-4">
          Hi, I'm Shaad Ali, a passionate Full Stack Developer with a strong
          interest in building modern and responsive web applications.
        </p>

        <p className="text-gray-700">
          I love working with React, Tailwind, and exploring new technologies. I
          aim to create clean, user-friendly, and efficient solutions.
        </p>
      </div>
    </section>
  );
};

export default About;
