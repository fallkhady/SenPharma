import React from 'react';
import Navbar from '../Components/Navbar';
import CustomTableDatabase from "../Components/CustomTableDatabase"

const Database = () => {
    return (
        <div>
            <Navbar />

            <div className="main-card">
                <CustomTableDatabase />

            </div>
        </div>
    );
};

export default Database;