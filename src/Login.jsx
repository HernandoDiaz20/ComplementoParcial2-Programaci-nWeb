import React, { useState } from "react";
import { useAuth } from "./AuthProvider";
import "./Login.css";

const Login = () => {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  const [mensaje, setMensaje] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const auth = useAuth();

  const handleSubmitEvent = (e) => {
    e.preventDefault();
    if (input.username !== "" && input.password !== "") {
      try {
        auth.loginAction(input);
      } catch (error) {
        setMensaje(error.message);
      }
      return;
    }
    alert("El usuario y la contraseña son obligatorios");
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <div style={{ color: "red" }}>{mensaje}</div>
      <form onSubmit={handleSubmitEvent}>
        <div className="form-group">
          <label htmlFor="username">Usuario:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Ingrese su usuario (administrador)"
            onChange={handleInput}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            placeholder="Ingrese su contraseña (12345678)"
            onChange={handleInput}
          />
          <i
            className={`fas ${
              showPassword ? "fa-eye" : "fa-eye-slash"
            } toggle-password`}
            onClick={togglePasswordVisibility}
          ></i>
        </div>
        <button type="submit" className="login-button">
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default Login;
