import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Caja() {
  return (
    <div className="caja">
      <img src="C:\Users\beaca\OneDrive\Documentos\BEA 2022\BEA\DESARROLLADOR FULL STACK\PROYECTO REACT\FOTOS\Beatriz Caceres.jpg" alt="Imagen" />
      <h2>Beatriz Caceres</h2>
      <div className="redes-sociales">
        <a href="https://www.linkedin.com/in/bcacereso/">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://www.instagram.com/beacacereso/">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </div>
  );
}

export default Caja;