import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "alishaad051@gmail.com",
      link: "mailto:alishaad051@gmail.com",
    },
    {
      icon: "📞",
      label: "Phone",
      value: "+91 7983372074",
      link: "tel:+917983372074",
    },
    {
      icon: "📍",
      label: "Location",
      value: "India",
      link: "#",
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-b from-slate-800 to-slate-900 px-4 py-20 flex flex-col items-center text-white"
    >
      <div className="max-w-5xl w-full">
        {/* Section Header */}
        <div className="text-center mb-16 slide-up-fade">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            I'm always open to opportunities, collaborations, and meaningful conversations.
            Let's connect!
          </p>
        </div>

        {/* Contact Container */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 slide-up-fade">
            <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-start gap-4 p-5 rounded-lg bg-slate-700/50 border border-slate-600 hover:bg-slate-600/50 hover:border-blue-500/50 transition-all duration-300 group"
                >
                  <div className="text-3xl mt-1 group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{info.label}</p>
                    <p className="text-white font-semibold group-hover:text-blue-400 transition-colors">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <p className="text-gray-400 mb-4">Follow or connect with me on:</p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/shaadali-tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-700 hover:bg-blue-600 rounded-lg flex items-center justify-center text-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 transform hover:scale-110"
                  title="GitHub"
                >
                  🐙
                </a>
                <a
                  href="https://linkedin.com/in/shaad-ali-8099562a3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-700 hover:bg-blue-600 rounded-lg flex items-center justify-center text-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 transform hover:scale-110"
                  title="LinkedIn"
                >
                  💼
                </a>
                <a
                  href="mailto:alishaad051@gmail.com"
                  className="w-12 h-12 bg-slate-700 hover:bg-blue-600 rounded-lg flex items-center justify-center text-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 transform hover:scale-110"
                  title="Email"
                >
                  💌
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6 slide-up-fade"
            style={{ animationDelay: "0.1s" }}
          >
            {/* Success Message */}
            {submitted && (
              <div className="p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-300 animate-pulse">
                ✅ Thanks for reaching out! I'll get back to you soon.
              </div>
            )}

            {/* Name Input */}
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 outline-none transition-all duration-300 placeholder-gray-500"
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
                className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 outline-none transition-all duration-300 placeholder-gray-500"
              />
            </div>

            {/* Message Textarea */}
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell me about your project or opportunity..."
                rows="5"
                className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 outline-none transition-all duration-300 placeholder-gray-500 resize-vertical"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 flex items-center justify-center gap-2"
            >
              <span>Send Message</span>
              <span>✈️</span>
            </button>

            <p className="text-center text-gray-400 text-sm">
              I'll try to respond within 24 hours.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
