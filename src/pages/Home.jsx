import { Hero, About, Skills, Projects, Education, Contact } from "../components";

function Home({ darkMode }) {
  return (
    <>
      <Hero darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Education darkMode={darkMode} />
      <Contact darkMode={darkMode} />
    </>
  );
}

export default Home;