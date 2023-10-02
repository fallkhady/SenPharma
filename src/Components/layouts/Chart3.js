import React, { useEffect, useState } from "react";
import "./style.css";
import ProgressBar from "../layouts/ProgressBar";
import api from "../../service/api";


// const testData = [
//   { bgcolor: "#f9be60", completed: 80, tittle: "Basic" },
//   { bgcolor: "#79bcf4", completed: 70, tittle: "Argent" },
//   { bgcolor: "#f59494", completed: 75, tittle: "or     " },
//   { bgcolor: "#91bdba", completed: 50, tittle: "Platinum" },
//   { bgcolor: "#aae6fc", completed: 25, tittle: "Baneex" },
// ];


const Chart3 = () => {

    const [data, setData] = useState()
    const couleurs = [
        "#808000",
        "#7FFFD4",
        "#DA70D6",
        "#32CD32",
        "#FF6347",
        "#9932CC",
        "#007FFF",
        "#FFBF00",
        "#D2691E",
        "#C8A2C8",
        "#FF00FF",
        "#FF0000",
        "#00FF00",
        "#0000FF",
        "#FFFF00",
        "#FFC0CB",
        "#800080",
        "#FFA500",
        "#FFFFFF",
        "#000000",
        "#808080",
        "#A52A2A",
        "#40E0D0",
        "#E6E6FA",
        "#4B0082",
        "#00FFFF",
        "#FFD700",
        "#C0C0C0",
        "#800000",
        "#F0E68C",

    ];

    const getstatkit = async () => {
        try {
            const reponse = await api.getstatkit()
            console.log(reponse.data)
            setData(reponse.data)
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        getstatkit();
    }, []);



    return (
        <div>
            <p style={{ textAlign: "justify", fontWeight: 500 }}>Réservation des Participants</p>
            <div className="Bar">
                {data?.map((item, idx) => (
                    <ProgressBar
                        key={idx}
                        bgcolor={couleurs[idx % couleurs.length]}
                        completed={item?.nombre_de_transactions}
                        tittle={item?.kits}
                    />
                ))}
            </div>
        </div>
    );
};

export default Chart3;
