import {
  Navbar,
  Hero,
  About,
  Skills,
  Projects,
  Contact,
  Footer,
  ScrollProgress,
} from "./components";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div className={darkMode ? "" : "light-mode"}>
      <ScrollProgress />
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <Hero darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;