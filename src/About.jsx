import React from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";

const About = () => {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate("/dashboard");
  };

  return (
    <div className="contact-page">
      <h1 className="postcard-share">PostcardShare</h1>
      <button onClick={handleReturn} className="return-button">
        Regresar
      </button>
      <main className="main-content">
        <section className="contact-form">
          <h1>Sobre nosotros</h1>
          <h2>Conoce un poco más acerca de nosotros</h2>
          <p>
            Bienvenido/a a PostcardShare. Somos una red social donde puedes
            compartir tus reseñas de los sitios turísticos más increíbles de
            Colombia.
          </p>
          <p>
            Fundada en 2024 por cuatro programadores apasionados del turismo,
            nuestra misión es que a través de las reseñas, todos los amantes de
            los viajes puedan descubrir los distintos lugares que este hermoso
            país tiene para ofrecer. Además, buscamos conectar a viajeros de
            todas partes de Colombia y del mundo.
          </p>
          <p>
            Ofrecemos una plataforma donde los usuarios pueden:
            <ul>
              <li>Publicar y leer reseñas de sitios turísticos.</li>
              <li>Conectarse con otros viajeros.</li>
              <li>Descubrir destinos únicos y experiencias locales.</li>
            </ul>
          </p>
          <p>
            Nos encantaría que te unas a nuestra comunidad. Contáctanos en{" "}
            <a href="https://www.PostcardShare.com">www.PostcardShare.com</a> o
            síguenos en nuestras redes sociales.
          </p>
        </section>
        <aside className="about-image">
          <img
            src={`${process.env.PUBLIC_URL}/mainAbout.png`}
            alt="main about"
          />
        </aside>
      </main>
      <footer className="footer">
        <div className="footer-left">
          <h2>PostcardShare</h2>
          <div className="social-icons">
            <img
              src={`${process.env.PUBLIC_URL}/Facebook.png`}
              alt="Social 1"
            />
            <img
              src={`${process.env.PUBLIC_URL}/Linkedin.png`}
              alt="Social 2"
            />
            <img src={`${process.env.PUBLIC_URL}/Youtube.png`} alt="Social 3" />
            <img
              src={`${process.env.PUBLIC_URL}/Instagram.png`}
              alt="Social 4"
            />
          </div>
          <p>© 2024 PostcardShare. Todos los derechos reservados.</p>
        </div>
        <div className="footer-right">
          <img
            src={`${process.env.PUBLIC_URL}/LogoPostcardShare.png`}
            alt="Logo"
          />
        </div>
      </footer>
    </div>
  );
};

export default About;
