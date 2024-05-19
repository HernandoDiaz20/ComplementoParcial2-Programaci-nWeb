import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import "./Dashboard.css";

const Dashboard = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logOut();
    navigate("/login");
  };

  return (
    <div className="dashboard">
      <nav className="navbar">
        <div className="navbar-brand">
          <h1>PostcardShare</h1>
        </div>
        <ul className="navbar-nav">
          <li>
            <Link to="/preview">Muestra de la app</Link>
          </li>
          <li>
            <Link to="/destinations">Destinos</Link>
          </li>
          <li>
            <Link to="/about">Acerca de</Link>
          </li>
          <li>
            <Link to="/contact">Contacto</Link>
          </li>
        </ul>
        <button onClick={handleLogout} className="logout-button">
          Cerrar sesión
        </button>
      </nav>
      <div className="content">
        <h2>Descubre Colombia</h2>
        <p>
          Bienvenido/a a PostcardShare. Explora nuestras reseñas, destinos
          turísticos, información sobre Colombia y más.
        </p>
        <img
          className="dashboard-image"
          src={`${process.env.PUBLIC_URL}/mainDashboard.png`}
          alt="Discover Colombia"
        />
      </div>
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

export default Dashboard;
