import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

function ThemeToggle({ darkMode, toggleTheme }) {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className={`p-2.5 rounded-xl transition-all duration-200 ${
        darkMode
          ? "bg-white/5 text-yellow-400 hover:bg-white/10 hover:text-yellow-300"
          : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
      }`}
      aria-label="Toggle theme"
    >
      <motion.div
        key={darkMode ? "dark" : "light"}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {darkMode ? <Sun size={18} /> : <Moon size={18} />}
      </motion.div>
    </motion.button>
  );
}

export default ThemeToggle;