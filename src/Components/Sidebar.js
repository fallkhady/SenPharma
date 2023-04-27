import React, { useState } from 'react'
import { SidebarData } from './data/SidebarData'
import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { GrClose } from 'react-icons/gr';
import './sidebar.css';


const Sidebar = () => {

    const [click, setClicked] = useState(false);
    const [showNav, setShowNav] = useState(false);
    const handleClick = () => {
        setClicked(!click);
    }
    return (
        <React.Fragment>

            <div className="menu-icon" onClick={handleClick}>
                {click ?
                    <GrClose /> : <FiMenu />}
            </div>
            <section className="nav">
                <div className={click ? "menu activ" : "menu"}>
                    {
                        SidebarData.map((item, index) => {
                            return (
                                <div key={index} className="link_item">
                                    <NavLink to={item.path}
                                        // className={({ isActive }) =>
                                        //     isActive ? activeLink : normalLink}
                                        style={{ textDecoration: "none" }}

                                    >
                                        <span>{item.icon}</span>
                                        <span>{item.title}</span>
                                    </NavLink>

                                </div>
                            )
                        })
                    }

                </div>
            </section>
        </React.Fragment>
    )
}

export default Sidebar