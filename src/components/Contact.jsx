import { useState } from "react";
import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  X,
} from "lucide-react";
import { SOCIAL_LINKS, CONTACT_INFO } from "../utils/constants";
import { GithubIcon, LinkedinIcon } from "../utils/icons";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function Toast({ type, message, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20, x: 20 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      exit={{ opacity: 0, y: -20, x: 20 }}
      transition={{ duration: 0.25 }}
      className={`fixed left-4 right-4 top-4 z-[100] flex max-w-[calc(100vw-2rem)] items-center gap-3 rounded-xl px-4 py-3 shadow-xl md:left-auto md:right-6 md:top-6 ${
        type === "success"
          ? "bg-[var(--color-primary)] text-white"
          : "bg-[var(--color-error)] text-white"
      }`}
    >
      {type === "success" ? (
        <CheckCircle size={20} className="shrink-0" />
      ) : (
        <AlertCircle size={20} className="shrink-0" />
      )}

      <span className="flex-1 text-sm font-medium">{message}</span>

      <button
        type="button"
        onClick={onClose}
        aria-label="Close notification"
        className="shrink-0 opacity-80 transition-opacity hover:opacity-100"
      >
        <X size={17} />
      </button>
    </motion.div>
  );
}

function Contact({ darkMode }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [toast, setToast] = useState({
    show: false,
    type: "",
    message: "",
  });

  const showToast = (type, message) => {
    setToast({
      show: true,
      type,
      message,
    });

    setTimeout(() => {
      setToast({
        show: false,
        type: "",
        message: "",
      });
    }, 4000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    if (!EMAIL_PATTERN.test(formData.email.trim())) {
      showToast("error", "Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      showToast(
        "success",
        "Message sent successfully! I'll get back to you soon.",
      );

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS submission error:", error);

      showToast(
        "error",
        "Unable to send your message. Please try again later.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const getContactIcon = (icon) => {
    const iconMap = {
      mail: Mail,
      phone: Phone,
      "map-pin": MapPin,
    };

    const Icon = iconMap[icon];

    return Icon ? <Icon size={20} /> : null;
  };

  return (
    <section
      id="contact"
      className={`relative py-20 md:py-28 ${
        darkMode ? "section-dark" : "section-light"
      }`}
    >
      <AnimatePresence>
        {toast.show && (
          <Toast
            type={toast.type}
            message={toast.message}
            onClose={() =>
              setToast({
                show: false,
                type: "",
                message: "",
              })
            }
          />
        )}
      </AnimatePresence>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
            07 / GET IN TOUCH
          </p>

          <h2 className="mb-5 text-3xl font-bold text-[var(--color-text-primary)] md:text-4xl">
            Let&apos;s Work Together
          </h2>

          <p className="text-base leading-7 text-[var(--color-text-secondary)]">
            Have a project in mind or want to discuss an opportunity? Send me a
            message and I&apos;ll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
              Contact Information
            </h3>

            <p className="mb-8 max-w-lg leading-7 text-[var(--color-text-secondary)]">
              Feel free to reach out through the contact form or connect with me
              directly using the information below.
            </p>

            <div className="space-y-4">
              {CONTACT_INFO.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex w-full items-center gap-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 transition-all duration-300 hover:border-[var(--color-primary)]"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[var(--color-primary-soft)] text-[var(--color-primary)]">
                    {getContactIcon(item.icon)}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="mb-1 block text-sm font-medium text-[var(--color-text-primary)]">
                      {item.label}
                    </span>
                    <span className="block break-words text-sm text-[var(--color-text-secondary)]">
                      {item.value}
                    </span>
                  </span>
                  <Send
                    size={16}
                    className="shrink-0 text-[var(--color-accent)]"
                  />
                </a>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-secondary)] transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[var(--color-accent)]"
                >
                  {social.name === "github" && <GithubIcon size={18} />}
                  {social.name === "linkedin" && <LinkedinIcon size={18} />}
                  {social.name === "mail" && <Mail size={18} />}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-[0_18px_40px_rgba(220,20,60,0.04)] sm:p-6"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-[var(--color-text-primary)]"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full max-w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-4 py-3 text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-primary)] focus:outline-none"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-[var(--color-text-primary)]"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full max-w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-4 py-3 text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-primary)] focus:outline-none"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-[var(--color-text-primary)]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Tell me about your project..."
                  className="w-full max-w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-4 py-3 text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-primary)] focus:outline-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-8 py-3.5 font-medium text-white transition hover:bg-[var(--color-primary-hover)] disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[var(--color-accent)]"
              >
                {isSubmitting ? (
                  <>
                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
