
import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import logo from '../images/logo1.png';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Sidebar from './Sidebar';
import SidebarData from './data/SidebarData';
import '../Components/Navbar.css';
import { FiChevronDown } from "react-icons/fi";
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Box from '@mui/material/Box';





const Navbar = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <div>
            <div className="navbar">
                <div className="navlogo">
                    <Link to="/" className="navbar-logo" >
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <nav>

                    {/* Responsive Menu Button */}

                    <ul className="nav-menu">

                        <Link to="/" className="nav-item item1" >
                        </Link>
                        <Link className="nav-item" >
                            <form id="searchbox " method="get " action="/search " autocomplete="off ">
                                <input name="q " type="text " size="15" placeholder="Rechercher un client" />
                                <SearchIcon sx={{ position: "relative", right: "30px", color: "#1362FC" }} className='icone' />
                            </form>
                        </Link>

                        <div className="nav-left">
                            <Link to="/" className="nav-item" >
                                <div className="notification">
                                    <NotificationsNoneIcon sx={{ color: "#1362FC" }} />
                                    <span className="notif"></span>

                                </div>
                            </Link>

                            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                                <Tooltip title="Account settings">
                                    <IconButton
                                        onClick={handleClick}
                                        size="small"
                                        sx={{ ml: 2 }}
                                        aria-controls={open ? 'account-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                    >
                                        <Avatar sx={{ width: 32, height: 32 }}></Avatar>
                                    </IconButton>
                                </Tooltip>
                            </Box>
                            <Menu
                                anchorEl={anchorEl}
                                id="account-menu"
                                open={open}
                                onClose={handleClose}
                                onClick={handleClose}
                                PaperProps={{
                                    elevation: 0,
                                    sx: {
                                        overflow: 'visible',
                                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                        mt: 1.5,
                                        '& .MuiAvatar-root': {
                                            width: 32,
                                            height: 32,
                                            ml: -0.5,
                                            mr: 1,
                                        },
                                        '&:before': {
                                            content: '""',
                                            display: 'block',
                                            position: 'absolute',
                                            top: 0,
                                            right: 14,
                                            width: 10,
                                            height: 10,
                                            bgcolor: 'background.paper',
                                            transform: 'translateY(-50%) rotate(45deg)',
                                            zIndex: 0,
                                        },
                                    },
                                }}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >
                                <MenuItem onClick={handleClose}>
                                    <Avatar /> Profile
        </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <Avatar /> My account
        </MenuItem>
                                <Divider />
                                <MenuItem onClick={handleClose}>
                                    <ListItemIcon>
                                        <PersonAdd fontSize="small" />
                                    </ListItemIcon>
          Add another account
        </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <ListItemIcon>
                                        <Settings fontSize="small" />
                                    </ListItemIcon>
          Settings
        </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <ListItemIcon>
                                        <Logout fontSize="small" />
                                    </ListItemIcon>
          Logout
        </MenuItem>
                            </Menu>

                            <Typography sx={{ minWidth: 100, fontSize: "10px", fontSize: "12px" }}>Abdou Ndiaye <br /> <span style={{ color: "#2E2E2E", fontSize: "8px" }}>superadmin</span> </Typography>
                            <Link to="#" style={{ marginTop: "8px", position: "relative", right: "15px" }} >  <FiChevronDown /> </Link>


                        </div>

                    </ul>
                </nav>
            </div>

            <Sidebar />

        </div >
    );
};

export default Navbar;