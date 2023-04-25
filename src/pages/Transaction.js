import React from 'react';
import CustomTable from '../Components/CustomTable'
import Navbar from '../Components/Navbar';

const Transaction = () => {
    return (
        <div>
            <Navbar />

            <div className="main-card">
                <CustomTable />

            </div>


        </div>
    );
};

export default Transaction;