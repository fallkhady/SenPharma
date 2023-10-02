import React from "react";
import { Link } from "react-router-dom";
import Header from "../../Components/header/Header";
import "./style.css";

const Partenaire = () => {
  return (
    <div className="containe">
      <Header />

      <div className="main">
        <div className="main-container">
          <h1>Devenez partenaire</h1>
          <p>
            Au salon international du médicament des dispositifs médicaux et de la parapharmacie. <br />{" "}
            Le comité d’organisation de SENPHARMA vous informe du report du salon initialement prévu les <br />{" "} 19 ,20 et le 21 juillet 2023, aux 22 ,23 et 24 Mai 2024 au {" "}
            <br /> CICAD.
          </p>
        </div>

        <div className="divBouton">
          <Link
            to="/partenaire/reserve"
            className="btn1"
            style={{ textTransform: "uppercase" }}
          >
            Réservez Stand
          </Link>
          <Link
            to="/partenaire/sponsor"
            className="btn2"
            style={{ textTransform: "uppercase" }}
          >
            Offres Sponsoring
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Partenaire;
