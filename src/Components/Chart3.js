import React from 'react';
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import './style.css';




const Chart3 = () => {
    const percentage = 66;

    return (
        <div style={{ width: "60%", marginTop: "50px", marginLeft: "50px", }}>
            <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                strokeWidth={15}
                styles={buildStyles({
                    textColor: "#ffff",
                    pathColor: "#FFE27C",
                    trailColor: "#f9942e",
                    pathShadow: `0px 9px 14px rgba(54, 183, 255, 0.23)`
                })}


            />


        </div>
    );
};

export default Chart3;