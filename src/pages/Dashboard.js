import React from 'react';
import Navbar from '../Components/Navbar';
import './style.css'
import Chart2 from '../Components/Chart2';
import Chart1 from '../Components/Chart1';
import Chart3 from '../Components/Chart3';
import Tableau from '../Components/Tableau';

const Dashboard = () => {
    return (
        <div>
            <Navbar />

            <div className="main-card">
                <div className="row">
                    <div className="card1">

                        <Chart1 />

                    </div>

                    <div className="card2">
                        <Chart2 />

                    </div>

                    <div className="card3">

                        <Chart3 />
                    </div>

                </div>

                <div className="tableau">
                    <Tableau />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;