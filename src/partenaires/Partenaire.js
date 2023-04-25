import React from 'react';
import Header from '../Components/Header'
import './style.css';


const Partenaire = () => {
    return (
        <div className="containe">
            <Header />

            <div className="main">
                <div className="main-container">
                    <h1>Devenez partenaire</h1>
                    <p>Au salon international du médicament des dispositifs médicaux <br /> et de la parapharmacie se tiendra les 19, 20 et 21 juillet 2023 au <br /> CICAD.
</p>
                </div>

                <div className="divBouton">
                    <a href="/partenaire/reserve" className="btn1">Réserver Stand</a>
                    <a href="/partenaire/participant" className="btn2">Devenir participant</a>

                </div>
            </div>

        </div>
    );
};

export default Partenaire;