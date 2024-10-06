import { Socials } from "./";
import { icons, links } from "../data";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__info">
            <div className="header__info-inner">
              <div className="header__name">
                <h1>Andrei Zakharov</h1>
                <a href="https://www.codewars.com/users/andreizpcw">
                  <img
                    src="https://www.codewars.com/users/andreizpcw/badges/micro?theme=light"
                    alt="codewars badge"
                  />
                </a>
              </div>
              <h3 className="header__title">Front-End Developer</h3>
              <ul className="header__icons">
                {icons.map((icon) => (
                  <li key={icon.name}>
                    <a href={icon.href}>
                      <img src={icon.src} alt={icon.name} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="header__socials">
              <Socials />
            </div>
          </div>
          <nav className="header__links">
            <ul>
              {links.map((link) => (
                <li key={link}>
                  <a href={`#${link}`}>{link}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
