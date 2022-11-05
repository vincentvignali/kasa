import { FC } from "react";

interface AboutProps {}

const About: FC<AboutProps> = () => {
  return (
    <>
      <div
        className="image-banner"
        style={{
          backgroundImage: "url(src/assets/about-banner.png)",
        }}
      >
        <h2>Chez vous, partout ailleurs</h2>
        <div className="overlay"></div>
      </div>
      <div className="about-accordeon">
        <details className="details">
          <summary className="summary">
            <p>Fiabilité</p>
            <div>{""}</div>
          </summary>
          <div className="content">
            {" "}
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </div>
        </details>
        <details className="details">
          <summary className="summary">
            <p>Respect</p>
            <div>{""}</div>
          </summary>
          <div className="content">
            {" "}
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </div>
        </details>
        <details className="details">
          <summary className="summary">
            <p>Service</p>
            <div>{""}</div>
          </summary>
          <div className="content">
            {" "}
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </div>
        </details>
        <details className="details">
          <summary className="summary">
            <p>Responsabilité</p>
            <div>{""}</div>
          </summary>
          <div className="content">
            {" "}
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </div>
        </details>
      </div>
    </>
  );
};

export default About;
