import Socials from "./Socials";
import icons from "../data/icons";
import links from "../data/links";

export default function Header() {
  const iconsList = icons.map((icon) => (
    <li key={icon.name}>
      <a href={icon.href}>
        <img src={icon.src} alt={icon.name} />
      </a>
    </li>
  ));

  const linksList = links.map((link) => (
    <li key={link}>
      <a href={`#${link}`}>{link}</a>
    </li>
  ));

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
              <h3 className="header__title">Junior Front-End Developer</h3>
              <ul className="header__icons">{iconsList}</ul>
            </div>
            <div className="header__socials">
              <Socials />
            </div>
          </div>
          <nav className="header__links">
            <ul>{linksList}</ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
