import React from "react";
import Navbar from "../Components/navbar/Navbar";
import CustomTablePaiement from "../Components/layouts/CustomTablePaiement";
import "./style.css";


const Paiement = () => {
    return (
        <div>
            <Navbar />

            <div
                className="divtitle"
                style={{ color: "#0F0F0F", position: "absolute" }}
            >
                <p>Paiement</p>
            </div>

            <div className="main-card">

                <CustomTablePaiement />
            </div>
        </div>
    );
};

export default Paiement;
