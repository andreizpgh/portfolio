import socials from "../data/socials";

export default function Socials() {
  const socialsList = socials.map((link) => (
    <li key={link.name}>
      <a href={link.href}>{link.name}</a>
    </li>
  ));

  return <ul className="socials">{socialsList}</ul>;
}
