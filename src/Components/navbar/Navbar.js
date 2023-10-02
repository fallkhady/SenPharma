import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../images/logo1.png";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Sidebar from "../sidebar/Sidebar";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Logout from "@mui/icons-material/Logout";
import Box from "@mui/material/Box";
import api from "../../service/api";
import Swal from "sweetalert2";


const Navbar = () => {
  const [userId, setUserId] = useState();
  const [notification, setNotification] = useState();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = () => {
    window.location.href = '/parametre'

  };

  const handleClickChange = () => {
    window.location.href = '/profil'

  };





  const responData = JSON.parse(localStorage.getItem("userData"))


  const signout = async () => {
    const val = JSON.parse(localStorage.getItem("userData"))
    const user = {
      userId: val.id
    }
    console.log(user)
    setUserId(val.id)
    try {
      const data = await api.signout(user)

      if (data) {
        localStorage.clear();
        window.location.href = "/"
      }
    } catch (error) {
      console.log(error)
    }

  };


  const getnotif = async () => {
    try {

      const response = await api.getnotification()
      setNotification(response.data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getnotif();
  }, []);


  const handleOpen = () => {
    window.location.href = "./transaction"
  }


  return (
    <div>
      <div className="navbar">
        <div className="navlogo">
          <Link to="/" className="navbar-logo">
            <img src={logo} alt="" />
          </Link>
        </div>
        <nav>
          {/* Responsive Menu Button */}

          <ul className="nav-menu">

            <div className="nav-left">
              <Link to="" className="nav-item">
                <div className="notification" onClick={handleOpen}>
                  <NotificationsNoneIcon sx={{ color: "#1362FC", fontSize: "35px" }} />
                  <span className="notif">
                    {notification?.count}
                  </span>

                </div>
              </Link>

              <Typography
                sx={{ fontSize: "12px", marginTop: "20px" }}
              > {responData?.username} </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Tooltip>
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                  >
                    <Avatar sx={{ width: 50, height: 50 }}></Avatar>
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
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >

                <MenuItem onClick={handleClickChange}>
                  <Avatar /> Mon compte
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleChange}>
                  <ListItemIcon>
                    <PersonAdd fontSize="small" />
                  </ListItemIcon>
                  Ajouter un autre compte
                </MenuItem>
                <MenuItem onClick={signout}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Se deconecter
                </MenuItem>
              </Menu>



            </div>
          </ul>
        </nav>
      </div>

      <Sidebar />
    </div>
  );
};

export default Navbar;
