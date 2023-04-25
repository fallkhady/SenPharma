import React, { useState } from 'react';
import { Link } from "react-router-dom";
import DashboardOutlinedIcon from '@mui/icons-material/Dashboard';
import FilterNoneOutlinedIcon from '@mui/icons-material/FilterNoneOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import SettingsIcon from '@mui/icons-material/Settings';
import './sidebar.css';
import { FiMenu } from "react-icons/fi";
import { GrClose } from 'react-icons/gr';

const Sidebar = () => {

    // const [click, setClicked] = useState(false);
    // const [showNav, setShowNav] = useState(false);
    // const handleClick = () => {
    //     setClicked(!click);
    // }


    const [stateOnglets, setStateOnglets] = useState(1);

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => {
        setClick(false);
        setStateOnglets(1);

    };

    return (
        <div>
            <div className="nav">
                <nav>

                    <div className="menu-icon" onClick={handleClick}>
                        {click ? (
                            <GrClose />) : (<FiMenu />
                            )}
                    </div>
                    <ul className={click ? "menu activ" : "menu"}>
                        <Link className={stateOnglets === 1 ? "link_item isactive" : "link_item"} onClick={closeMobileMenu} to="/dashboard"> <DashboardOutlinedIcon sx={{ position: "relative", top: "5px" }} />   Dashboard </Link>
                        <Link className={stateOnglets === 2 ? "link_item isactive" : "link_item"} onClick={closeMobileMenu} to="/transaction"><FilterNoneOutlinedIcon sx={{ position: "relative", top: "5px" }} /> Transaction </Link>
                        <Link className={stateOnglets === 3 ? "link_item isactive" : "link_item"} onClick={closeMobileMenu} to="/database"><Person2OutlinedIcon sx={{ position: "relative", top: "5px" }} /> Database </Link>
                        <Link className={stateOnglets === 4 ? "link_item isactive" : "link_item"} onClick={closeMobileMenu} to="/parametre"><SettingsIcon sx={{ position: "relative", top: "5px" }} /> Paramètre </Link>

                    </ul>
                </nav>
            </div>
        </div >
    );
};

export default Sidebar;