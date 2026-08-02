import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { SOCIAL_LINKS, CONTACT_INFO } from "../utils/constants";
import { GithubIcon, LinkedinIcon } from "../utils/icons";

const iconMap = {
  mail: Mail,
  phone: Phone,
  "map-pin": MapPin,
};

function Toast({ message, show, onClose }) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, 3500);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 toast-in">
      <div className="glass rounded-xl px-6 py-4 flex items-center gap-3 shadow-2xl border border-emerald-400/20">
        <CheckCircle size={18} className="text-emerald-400 flex-shrink-0" />
        <span className="text-white font-body text-sm">{message}</span>
      </div>
    </div>
  );
}

function Contact({ darkMode }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowToast(true);
    setFormData({ name: "", email: "", message: "" });
  };

  const inputClass = `w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-cyan-400/50 ${
    darkMode
      ? "bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-cyan-400/50"
      : "bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:border-cyan-300"
  }`;

  return (
    <section
      id="contact"
      className={`relative py-24 md:py-32 ${darkMode ? "section-dark" : "section-light"}`}
    >
      <div className={`absolute inset-0 ${darkMode ? "bg-grid" : "bg-grid-light"} opacity-30`} />
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className={`inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase mb-4 ${
              darkMode
                ? "bg-cyan-400/10 text-cyan-400 border border-cyan-400/20"
                : "bg-cyan-50 text-cyan-600 border border-cyan-200"
            }`}
          >
            Contact
          </span>
          <h2
            className={`font-heading text-3xl md:text-4xl font-bold ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p
            className={`mt-4 text-base max-w-2xl mx-auto ${
              darkMode ? "text-slate-300" : "text-slate-600"
            }`}
          >
            Have a project in mind or want to collaborate? Feel free to reach
            out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-6"
          >
            {CONTACT_INFO.map((info) => {
              const IconComp = iconMap[info.icon];
              return (
                <a
                  key={info.label}
                  href={info.href}
                  className={`flex items-start gap-4 p-5 rounded-2xl transition-all duration-300 hover:scale-105 ${
                    darkMode
                      ? "glass hover:border-cyan-400/30"
                      : "bg-white shadow-lg shadow-slate-200/50 border border-slate-100 hover:border-cyan-200"
                  }`}
                >
                  <div
                    className={`p-3 rounded-xl flex-shrink-0 ${
                      darkMode
                        ? "bg-cyan-400/10 text-cyan-400"
                        : "bg-cyan-50 text-cyan-600"
                    }`}
                  >
                    <IconComp size={20} />
                  </div>
                  <div>
                    <p
                      className={`text-xs font-medium uppercase tracking-wider mb-1 ${
                        darkMode ? "text-slate-400" : "text-slate-400"
                      }`}
                    >
                      {info.label}
                    </p>
                    <p
                      className={`text-sm font-medium ${
                        darkMode ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {info.value}
                    </p>
                  </div>
                </a>
              );
            })}

            {/* Social Links */}
            <div
              className={`p-5 rounded-2xl ${
                darkMode
                  ? "glass"
                  : "bg-white shadow-lg shadow-slate-200/50 border border-slate-100"
              }`}
            >
              <p
                className={`text-sm font-medium mb-4 ${
                  darkMode ? "text-white" : "text-slate-900"
                }`}
              >
                Follow Me
              </p>
              <div className="flex gap-3">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-xl transition-all duration-300 hover:scale-110 ${
                      darkMode
                        ? "bg-white/5 text-slate-300 hover:text-cyan-400 hover:bg-cyan-400/10 border border-white/5"
                        : "bg-slate-100 text-slate-500 hover:text-cyan-600 hover:bg-cyan-50 border border-slate-200"
                    }`}
                  >
                    {social.name === "github" && <GithubIcon size={20} />}
                    {social.name === "linkedin" && <LinkedinIcon size={20} />}
                    {social.name === "mail" && <Mail size={20} />}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className={`p-6 md:p-8 rounded-2xl ${
                darkMode
                  ? "glass"
                  : "bg-white shadow-lg shadow-slate-200/50 border border-slate-100"
              }`}
            >
              <div className="space-y-5">
                <div>
                  <label
                    className={`block text-sm font-medium mb-2 ${
                      darkMode ? "text-slate-200" : "text-slate-700"
                    }`}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    placeholder="Your name"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    className={`block text-sm font-medium mb-2 ${
                      darkMode ? "text-slate-200" : "text-slate-700"
                    }`}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    placeholder="your@email.com"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    className={`block text-sm font-medium mb-2 ${
                      darkMode ? "text-slate-200" : "text-slate-700"
                    }`}
                  >
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    rows={5}
                    placeholder="Your message..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105 btn-glow"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      <Toast
        message="Message sent successfully! I'll get back to you soon."
        show={showToast}
        onClose={() => setShowToast(false)}
      />
    </section>
  );
}

export default Contact;