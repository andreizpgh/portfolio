import { projects } from "../data";

export default function Projects() {
  return (
    <div className="container">
      <section className="projects" id="Projects">
        <h1 className="projects__title">Projects</h1>
        <ul className="projects__list">
          {projects.map((project) => (
            <li className="projects__item">
              <img loading="lazy" src={project.preview} alt={project.name} />
              <div className="projects__item-inner">
                <div className="projects__item-info">
                  <h4>{project.name}</h4>
                  <p>{project.desc}</p>
                  <p>
                    <b>Built with: </b>
                    {project.tech}
                  </p>
                </div>
              </div>
              <div className="projects__item-links">
                <a href={project.source}>Source</a>
                <a href={project.website}>Website</a>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
