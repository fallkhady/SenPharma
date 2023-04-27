import React from 'react';
import CustomTable from '../Components/CustomTable'
import Navbar from '../Components/Navbar';

const Transaction = () => {
    return (
        <div>
            <Navbar />

            <div className="divtitle" style={{ color: "#0F0F0F", position: "absolute" }}>
                <p>Transaction</p>
            </div>

            <div className="main-card">
                <CustomTable />

            </div>


        </div>
    );
};

export default Transaction;