import React from 'react';
import Navbar from '../Components/navbar/Navbar';
import CustumTableDetente from '../Components/layouts/CustumTableDetente'

const PharmaDetenteList = () => {
    return (
        <div>
            <Navbar />

            <div
                className="divtitle"
                style={{ color: "#0F0F0F", position: "absolute" }}
            >
                <p>Pharma Détente</p>
            </div>

            {/* <div className="">
          <ButtonPaiement />
        </div> */}

            <div style={{ width: '80%', position: "relative", left: "300px", top: "-450px" }}>
                <CustumTableDetente />
            </div>
        </div>
    );
};

export default PharmaDetenteList;