import React from "react";
import { useNavigate } from "react-router-dom";
import "./Preview.css";

const Preview = () => {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate("/dashboard");
  };

  return (
    <div className="preview-page">
      <h1 className="postcard-share">PostcardShare</h1>
      <button onClick={handleReturn} className="return-button">
        Regresar
      </button>
      <main className="main-content">
        <div className="preview-image">
          <img
            src={`${process.env.PUBLIC_URL}/mainPreview.png`}
            alt="Preview"
          />
        </div>
      </main>
    </div>
  );
};

export default Preview;
