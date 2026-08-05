import {
  Navbar,
  Footer,
  ScrollProgress,
} from "./components";
import Home from "./pages/Home";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div className={darkMode ? "" : "light-mode"}>
      <ScrollProgress />
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <Home darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;