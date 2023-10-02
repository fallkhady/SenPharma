import React, { useState } from "react";
import image from "./images/image2.png";
import logo from "./images/logo1.png";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Visibility from '@mui/icons-material/Visibility';
import Input from '@mui/material/Input';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useTheme } from '@mui/material/styles';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import "./style.css";
import api from "./service/api";
import Notiflix from "notiflix";
import Swal from 'sweetalert2'
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Dialog } from "@mui/material";

export default function Login() {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [opened, setOpen] = React.useState(false);
  const theme = useTheme();

  const handleOpen = () => {
    setOpen(true);

  };

  const handleClosed = () => {
    setOpen(false);
  };


  const [inputData, setInputData] = useState();
  const [message, setMessage] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  const handleChange = (event) => {
    setInputData({
      ...inputData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await api.signin(inputData);
      Notiflix.Loading.standard("Connexion en cours...", { svgColor: "#FCA13A" });
      if (data) {
        Notiflix.Loading.remove();
        localStorage.setItem("userData", JSON.stringify(data));
        const token = JSON.parse(localStorage.getItem("userData"));
        window.localStorage.setItem("token", token?.accessToken);
        window.localStorage.setItem("loggedId", JSON.stringify({ isloggedId: true }));
        window.location.href = "/dashboard"
      }
      return data;
    } catch (error) {
      setMessage(error?.response?.data?.message);
      // console.log(message);
    }
  };

  const handleForm = async (e) => {
    e.preventDefault();
    const data = {
      email: email
    }
    try {
      const resp = await api.motdepasseoublie(data);
      // console.log(resp)
      handleClosed();
      Swal.fire({
        icon: 'success', title: resp.data.message, timer: 2000
      });


    } catch (error) {
      console.log(error)
    }
  }
  // const reponse = JSON.parse(localStorage.getItem("rep"));



  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid item xs={6} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "50%",
            padding: "10px 120px",
          }}
        >
          <div
            className="logo"
            style={{
              marginRight: "400px",
              position: "relative",
              bottom: "60px",
            }}
          >

            <Link to="/partenaire/partenaire">
              <img src={logo} alt="" />
            </Link>
          </div>

          <Typography component="h1" variant="h5" className="title">
            Connectez-vous à votre compte !
          </Typography>
          <Typography component="h1" variant="h5" style={{ color: "red" }}>
            {message}
          </Typography>
          <form onSubmit={handleSubmit} style={{ marginTop: "80px" }}>
            <FormControl className="formControl" style={{ width: "100%" }}>
              <FormLabel id="email">Email</FormLabel>
              <TextField
                id="standard-basic"
                variant="standard"
                name="username"
                required
                onChange={handleChange}
              />{" "}

            </FormControl>
            <FormControl className="formControl1" style={{ width: "100%", marginTop: "30px" }} >
              <FormLabel id="password">Mot de passe</FormLabel>
              <Input
                name="password"
                onChange={handleChange}
                required
                id="standard-adornment-password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl >

            <Button
              type="submit"
              fullWidth
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: "#FCA13A",
                height: "50px",
                marginTop: "70px",
                color: "#fff",
                '&:hover': {
                  backgroundColor: '#28adc8',
                  color: '#fff',
                },
              }}
            >
              Connexion
            </Button>
          </form >
        </Box >

        <Link to="#" className="mdp" onClick={handleOpen}>
          Mot de passe oublié ?
        </Link>
        <Dialog
          open={opened}
          onClose={handleClosed}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          PaperProps={{
            sx: {
              width: "100%",
              maxWidth: "720px!important",
              height: "40vh"
            }
          }}

        >

          <DialogTitle id="alert-dialog-title" sx={{ fontSize: "14px", textAlign: "center" }}>
            {"Mot de passe oublié"}
          </DialogTitle>
          <form onSubmit={handleForm}>
            <div style={{ display: "flex", marginLeft: "30px", gridGap: "30px", marginTop: "30px" }}>
              <p style={{ fontSize: "12px", }} >Email</p>
              <TextField
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)

                }}
                required
                fullWidth
                autoFocus
                size="small"
                placeholder="Saisissez votre email"
                sx={{ backgroundColor: "#FBFBFB", width: "600px" }}
              />
            </div>

            <DialogActions>
              <button style={{ padding: "15px 30px", position: "relative", left: "-300px", top: "30px", background: "#FCA13A", border: "none", color: "#fff" }}>Envoyer</button>
            </DialogActions>

          </form>
        </Dialog >
      </Grid >


      <Grid
        item
        xs={false}
        sm={8}
        md={6}
        sx={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </Grid >
  );
}
