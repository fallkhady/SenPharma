import React from "react";
import Navbar from "../Components/navbar/Navbar";
import CustomPaiementDetente from "../Components/layouts/CustomPaiementDetente";
import "./style.css";


const PaiementDetenteList = () => {
    return (
        <div>
            <Navbar />

            <div
                className="divtitle"
                style={{ color: "#0F0F0F", position: "absolute" }}
            >
                <p>Paiement Pharma détente</p>
            </div>

            <div className="main-card">

                <CustomPaiementDetente />
            </div>
        </div>
    );
};

export default PaiementDetenteList;
