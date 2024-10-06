import { socials } from "../data";

export default function Socials() {
  return (
    <ul className="socials">
      {socials.map((link) => (
        <li key={link.name}>
          <a href={link.href}>{link.name}</a>
        </li>
      ))}
    </ul>
  );
}
