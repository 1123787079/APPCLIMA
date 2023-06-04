
import React from "react";
import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import BeatrizImg from "./Beatriz.jpg";
import YsabelImg from "./Ysabel.jpg";
import NormaryImg from "./Normary.jpg";
import RossysmarImg from "./Rossysmar.jpg";
import FleridaImg from "./Flerida.jpg";
import ErikaImg from "./Erika.jpg";

function Caja() {
  const personas = [
    {
      nombre: "Beatriz Caceres",
      imagen: BeatrizImg,
      linkedin: "https://www.linkedin.com/in/bcacereso/",
      instagram: "https://www.instagram.com/beacacereso/",
    },
    {
      nombre: "Ysabel Quiñones",
      imagen: YsabelImg,
      linkedin: "https://www.linkedin.com/in/ysabel-quinones-a93296173/",
      instagram: "https://www.instagram.com/ysabelquinones/",
    },
    {
      nombre: "Normary Ramirez",
      imagen: NormaryImg,
      linkedin: "https://www.linkedin.com/in/ramireznormary",
      instagram: "https://instagram.com/vikwilmary?igshid=MzNlNGNkZWQ4Mg==",
    },
    {
      nombre: "Rossysmar Martinez",
      imagen: RossysmarImg,
      linkedin: "https://www.linkedin.com/in/rossysmar-martinez",
      instagram: "https://www.instagram.com/rossysmartinez22/",
    },
    {
      nombre: "Flerida Salas",
      imagen: FleridaImg,
      linkedin: "https://www.linkedin.com/in/flerida-salas-570766220/",
      instagram: "https://www.instagram.com/flerida146/",
    },
    {
      nombre: "Erika Gomez",
      imagen: ErikaImg,
      linkedin: "https://www.linkedin.com/home?original_referer=https%3A%2F%2Fwww.linkedin.com%2Ffeed%2F",
      instagram: "https://www.instagram.com/erikatgo/",
    },
  ];

  return (

    <div className="container">

      {personas.map((persona, index) => (

        <div className="caja" key={index}>

          <div className="imagen-container">

            <img className="imagen" src={persona.imagen} alt={persona.nombre} />

          </div>

          <h2>{persona.nombre}</h2>

          <div className="redes-sociales">

            <a href={persona.linkedin} target="_blank" rel="noopener noreferrer">

              <FontAwesomeIcon icon={faLinkedin} />

            </a>

            <a href={persona.instagram} target="_blank" rel="noopener noreferrer">

              <FontAwesomeIcon icon={faInstagram} />

            </a>

          </div>

        </div>

      ))}

    </div>

  );

}




export default Caja;
// hasta aca Bea



















