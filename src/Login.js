import * as React from 'react';
import image from './images/image2.png';
import logo from './images/logo1.png';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import './style.css'


export default function Login() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <Grid container component="main" sx={{ height: '100vh' }}>


            <Grid item xs={6} component={Paper} elevation={6} square>
                <Box
                    sx={{
                        my: 8,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: "center",
                        width: "50%",
                        padding: "10px 120px"
                    }}
                >
                    <div className="logo" style={{ marginRight: "400px", position: "relative", bottom: "60px" }}>
                        <img src={logo} alt="" />
                    </div>

                    <Typography component="h1" variant="h5" className="title">
                        Login to your account !
            </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ marginTop: "80px" }}>
                        <FormControl className="formControl" style={{ width: "100%" }}>
                            <FormLabel id="email">Email</FormLabel>
                            <TextField id="standard-basic" variant="standard" /> <i className="icon1"> <AlternateEmailIcon /></i>
                        </FormControl>
                        <FormControl className="formControl1" style={{ width: "100%", }}>
                            <FormLabel id="password">Mot de passe</FormLabel>
                            <TextField id="standard-basic" variant="standard" type="password" /><i className="icon2"> <VisibilityOffIcon /></i>
                            <a href="" className="mdp">Mot de passe oublié ?</a>


                        </FormControl>

                        <Button
                            type="submit"
                            fullWidth
                            onclick="window.location.href = 'http://localhost:3000/dashboard'"
                            sx={{ mt: 3, mb: 2, backgroundColor: "#FCA13A", height: "50px", color: "#fff" }}
                        >
                            Connexion
              </Button>

                    </Box>
                </Box>
            </Grid>

            <Grid
                item
                xs={false}
                sm={8}
                md={6}
                sx={{
                    backgroundImage: `url(${image})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: (t) =>
                        t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
        </Grid>
    );
}