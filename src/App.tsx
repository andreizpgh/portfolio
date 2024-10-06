import {
  Header,
  Projects,
  About,
  Employment,
  Education,
  Languages,
  Socials,
} from "./components";

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
