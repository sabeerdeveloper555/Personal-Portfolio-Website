import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

function ThemeToggle({ darkMode, toggleTheme }) {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className={`p-2.5 rounded-xl transition-all duration-200 ${
        darkMode
          ? "bg-white/5 text-orange-300 hover:bg-red-400/10 hover:text-orange-200"
          : "bg-stone-200 text-stone-700 hover:bg-red-50 hover:text-red-700"
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
