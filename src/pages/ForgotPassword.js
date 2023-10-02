import React, { useState } from "react";
import image from "../images/image2.png";
import logo from "../images/logo1.png";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Link, useParams } from "react-router-dom";
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
import api from "../service/api";
import Notiflix from "notiflix";



export default function Login() {



    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [password_confirmation, setPassword_confirmation] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const resetToken = useParams();

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };




    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            password: password,
            password_confirmation: password_confirmation,
            resetToken: resetToken.token
        }

        if (password_confirmation !== password) {
            setMessage("les mots de passe ne sont pas identiques");
            return;
        }

        const resp = await api.resetpassword(data);
        // console.log(resp)
        Notiflix.Loading.standard("Modification en cours...", { svgColor: "#FCA13A" });
        window.location.href = "/";


    }






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
                        Nouveau mot de passe
                    </Typography>
                    <Typography component="h1" variant="h5" style={{ color: "red" }}>
                        {message}
                    </Typography>
                    <Box
                        component="form"
                        noValidate
                        onSubmit={handleSubmit}
                        sx={{ marginTop: "80px" }}
                    >

                        <FormControl className="formControl1" style={{ width: "100%", marginTop: "30px" }} >
                            <FormLabel id="password">Nouveau mot de passe</FormLabel>
                            <Input
                                name="password"
                                onChange={(e) => {
                                    setPassword(e.target.value)

                                }}
                                value={password}
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

                        <FormControl className="formControl1" style={{ width: "100%", marginTop: "30px" }} >
                            <FormLabel id="password">Confirmer le nouveau mot de passe</FormLabel>
                            <Input
                                name="password_confirmation"
                                onChange={(e) => {
                                    setPassword_confirmation(e.target.value)

                                }}
                                value={password_confirmation}
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
                                marginTop: "50px",
                                height: "50px",
                                color: "#fff",
                                '&:hover': {
                                    backgroundColor: '#28adc8',
                                    color: '#fff',
                                },
                            }}
                        >
                            Sauvegarder
                        </Button>
                    </Box >
                </Box >
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
