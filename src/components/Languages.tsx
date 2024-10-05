import certificate from "../../assets/images/efset.webp";

export default function Languages() {
  return (
    <div className="container">
      <section className="languages" id="Languages">
        <h1>Languages</h1>
        <ul className="languages__list">
          <li>
            English (C1-C2)
            <a href="https://www.efset.org/cert/Q5VoPe">
              <img
                className="languages__img"
                src={certificate}
                alt="EF SET Certificate"
              />
            </a>
          </li>
          <li>German (B2)</li>
          <li>Spanish (A2)</li>
          <li>Russian (Native)</li>
        </ul>
      </section>
    </div>
  );
}
