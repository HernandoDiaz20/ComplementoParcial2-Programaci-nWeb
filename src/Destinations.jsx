import React from "react";
import { useNavigate } from "react-router-dom";
import "./Destinations.css";

const Destinations = () => {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate("/dashboard");
  };

  return (
    <div>
      <h1 className="postcard-share">PostcardShare</h1>
      <button onClick={handleReturn} className="return-button">
        Regresar
      </button>
      <main className="main-content">
        <div className="destination">
          <img src="imagen1.jpg" alt="Destino 1" />
          <div className="destination-info">
            <h2>CABO DE LA VELA</h2>
            <p>
              El Cabo de la Vela se encuentran en el departamento de La Guajira.
            </p>
          </div>
        </div>
        <div className="destination">
          <img src="imagen2.jpg" alt="Destino 2" />
          <div className="destination-info">
            <h2>SANTA MARTA</h2>
            <p>
              Santa Marta es uno de los más populares destinos turísticos de
              Colombia.
            </p>
          </div>
        </div>
        <div className="destination">
          <img src="imagen3.jpg" alt="Destino 3" />
          <div className="destination-info">
            <h2>BAHÍA MÁLAGA</h2>
            <p>
              Es uno de los lugares más ricos en flora y fauna del Pacífico
              colombiano.
            </p>
          </div>
        </div>
        <div className="destination">
          <img src="imagen4.jpg" alt="Destino 4" />
          <div className="destination-info">
            <h2>CARTAGENA DE INDIAS</h2>
            <p>
              Su centro histórico es considerado uno de los más lindos del
              mundo.
            </p>
          </div>
        </div>
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
          <img src="LogoPostcardShare.png" alt="Logo" />
        </div>
      </footer>
    </div>
  );
};

export default Destinations;
