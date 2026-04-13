const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/shaadali-tech",
      icon: "🐙",
      color: "hover:text-gray-400",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/shaad-ali-8099562a3",
      icon: "💼",
      color: "hover:text-blue-400",
    },
    {
      name: "Email",
      url: "mailto:alishaad051@gmail.com",
      icon: "📧",
      color: "hover:text-red-400",
    },
  ];

  const footerLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-gray-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-slate-800">
          {/* Brand Section */}
          <div className="text-center md:text-left slide-up-fade">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center font-bold text-white">
                SA
              </div>
              <h3 className="text-xl font-bold gradient-text">Shaad Ali</h3>
            </div>
            <p className="text-gray-400 text-sm max-w-xs">
              Building scalable web applications and transforming data into
              insights.
            </p>
          </div>

          {/* Quick Links */}
          <div
            className="text-center slide-up-fade"
            style={{ animationDelay: "0.1s" }}
          >
            <h4 className="text-white font-semibold  mb-4">Quick Links</h4>
            <div className="space-y-2">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-400 hover:text-blue-400 transition-colors duration-300 smooth-underline"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div
            className="text-center md:text-right slide-up-fade"
            style={{ animationDelay: "0.2s" }}
          >
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex justify-center md:justify-end gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.name}
                  className={`w-10 h-10 flex items-center justify-center rounded-lg bg-slate-800 hover:bg-slate-700 text-lg transition-all duration-300 transform hover:scale-110 ${social.color}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Skills & Tech Stack */}
        <div
          className="mb-8 pb-8 border-b border-slate-800 slide-up-fade"
          style={{ animationDelay: "0.3s" }}
        >
          <h4 className="text-white font-semibold mb-4 text-center">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              "React",
              "Node.js",
              "MongoDB",
              "Express",
              "Tailwind",
              "Power BI",
              "SQL",
              "JavaScript",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-slate-800 border border-blue-500/30 rounded-full text-sm text-gray-300 hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Copyright & Bottom Info */}
        <div
          className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400 slide-up-fade"
          style={{ animationDelay: "0.4s" }}
        >
          <p>
            © {currentYear}{" "}
            <span className="font-semibold text-white">Shaad Ali</span>. All
            rights reserved.
          </p>
          <p className="text-center">
            Crafted with <span className="text-red-500">❤️</span> using React &
            Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
