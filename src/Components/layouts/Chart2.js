import React from "react";
import "./style.css";
import ProgressBar from "../layouts/ProgressBar";

const testData = [
  { bgcolor: "#f9be60", completed: 80, tittle: "Basic" },
  { bgcolor: "#79bcf4", completed: 70, tittle: "Argent" },
  { bgcolor: "#f59494", completed: 75, tittle: "or     " },
  { bgcolor: "#91bdba", completed: 50, tittle: "Platinum" },
  { bgcolor: "#aae6fc", completed: 25, tittle: "Baneex" },
];

const Chart2 = () => {
  return (
    <div>
      <p style={{ textAlign: "justify", fontWeight: 500 }}>Réservation</p>
      <div className="Bar">
        {testData.map((item, idx) => (
          <ProgressBar
            key={idx}
            bgcolor={item.bgcolor}
            completed={item.completed}
            tittle={item.tittle}
          />
        ))}
      </div>
    </div>
  );
};

export default Chart2;
