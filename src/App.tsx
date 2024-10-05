import Header from "./components/Header";
import Projects from "./components/Projects";
import About from "./components/About";
import Employment from "./components/Employment";
import Education from "./components/Education";
import Languages from "./components/Languages";
import Socials from "./components/Socials";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Projects />
      <About />
      <Employment />
      <Education />
      <Languages />
      <div className="container">
        <Socials />
      </div>
    </div>
  );
}
