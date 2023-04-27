import React from 'react';
import Navbar from '../Components/Navbar';
import CustomTableDatabase from "../Components/CustomTableDatabase"

const Database = () => {
    return (
        <div>
            <Navbar />
            <div className="divtitle" style={{ color: "#0F0F0F", position: "absolute" }}>
                <p>Database</p>
            </div>

            <div className="main-card">
                <CustomTableDatabase />

            </div>
        </div>
    );
};

export default Database;