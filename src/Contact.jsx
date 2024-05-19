import React from "react";
import { useNavigate } from "react-router-dom";
import "./Contact.css";

const Contact = () => {
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
          <h1>Contáctenos</h1>
          <h2>Ingrese sus datos y envíelos para estar en contacto</h2>
          <form>
            <div className="form-group">
              <label htmlFor="first-name">Nombres</label>
              <input type="text" id="first-name" name="first-name" />
            </div>
            <div className="form-group">
              <label htmlFor="last-name">Apellidos</label>
              <input type="text" id="last-name" name="last-name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Correo Electrónico</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea id="message" name="message"></textarea>
            </div>
            <button type="submit" className="send-button">
              Enviar
            </button>
          </form>
        </section>
        <aside className="contact-image">
          <img
            src={`${process.env.PUBLIC_URL}/mainContact.png`}
            alt="Contact Us"
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

export default Contact;
