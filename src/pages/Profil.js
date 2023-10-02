import React, { useState } from "react";
import Navbar from "../Components/navbar/Navbar";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Notiflix from "notiflix";
import api from "../service/api";
import Select from '@mui/material/Select';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import "./style.css";


const Profil = () => {
    const [data, setData] = useState()
    const [telephone, setTelephone] = useState('');
    const [nom, setNom] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [password_confirmation, setPassword_confirmation] = useState('');


    const responData = JSON.parse(localStorage.getItem("userData"))

    const handleSubmit = async (e) => {
        const id = responData.id;
        const body = {
            // username: username || responData.username,
            // nom: nom || responData.nom,
            // email: email || responData.email,
            // telephone: telephone || responData.telephone,
            password: password,
            password_confirmation: password_confirmation,
        }
        if (password_confirmation !== password) {
            setMessage("les mots de passe ne sont pas identiques");
            return;
        }

        try {
            const resp = await api.updatepassword(id, body);
            // console.log(resp.data)
            Notiflix.Loading.standard("Modification en cours...", { svgColor: "#FCA13A" });
            // window.location.reload();


        } catch (error) {
            console.log(error)
        }


    }
    return (
        <div>
            <Navbar />

            <div
                className="divtitle"
                style={{ color: "#0F0F0F", position: "absolute", }}
            >
                <p>Profil</p>
            </div>

            <div className="main-card">
                <Box sx={{}}>
                    <div
                        className="contenu"
                        style={{
                            backgroundColor: "#fff",
                            boxShadow: "5px 5px 5px 5px rgba(0, 0, 0, 0.03)",
                            width: "50%",
                            position: "relative",
                            // bottom: "530px",
                            left: "200px",
                            padding: "10px 100px",
                            height: "60vh"
                        }}
                    >
                        <div className="titre" style={{ marginRight: "70px" }}>
                            <p>Mon compte</p>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div style={{ display: "flex", gridGap: "20px", marginTop: "50px" }}>
                                <div style={{ display: "flex", gridGap: "18px", marginLeft: "-50px" }}>
                                    <p style={{ fontSize: "12px" }}>Username</p>
                                    <TextField
                                        name="username"
                                        value={username || responData.username}
                                        onChange={(e) => {
                                            setUsername(e.target.value)

                                        }}
                                        required
                                        fullWidth
                                        id="username"
                                        autoFocus
                                        size="small"
                                        sx={{ backgroundColor: "#FBFBFB", width: "270px", height: "40px" }}
                                    />
                                </div>
                                <div style={{ display: "flex", gridGap: "20px", marginLeft: "83px" }}>
                                    <div style={{ display: "flex", gridGap: "10px" }}>
                                        <p style={{ fontSize: "12px" }}>Nom</p>
                                        <TextField
                                            name="nom"
                                            value={nom || responData.nom}
                                            onChange={(e) => {
                                                setNom(e.target.value)

                                            }}
                                            required
                                            fullWidth
                                            id="nom"
                                            autoFocus
                                            size="small"
                                            sx={{ backgroundColor: "#FBFBFB", width: "240px", height: "40px" }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div style={{ display: "flex", gridGap: "23px", marginTop: "30px", marginLeft: "-20px" }}>
                                <div style={{ display: "flex", gridGap: "10px", marginLeft: "-15px" }}>
                                    <p style={{ fontSize: "12px" }}>Email</p>
                                    <TextField
                                        name="email"
                                        value={email || responData.email}
                                        onChange={(e) => {
                                            setEmail(e.target.value)

                                        }}
                                        required
                                        fullWidth
                                        autoFocus
                                        size="small"
                                        sx={{ backgroundColor: "#FBFBFB", width: "270px", height: "40px", marginLeft: "20px" }}
                                    />
                                </div>
                                <div style={{ display: "flex", gridGap: "20px", marginLeft: "45px" }}>
                                    <div style={{ display: "flex", gridGap: "10px" }}>
                                        <p style={{ fontSize: "12px" }}>Téléphone</p>
                                        <TextField
                                            name="telephone"
                                            value={telephone || responData.telephone}
                                            onChange={(e) => {
                                                setTelephone(e.target.value)

                                            }}
                                            required
                                            fullWidth
                                            id="telephone"
                                            autoFocus
                                            size="small"
                                            sx={{ backgroundColor: "#FBFBFB", width: "240px", height: "40px" }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    gridGap: "20px",
                                    marginTop: "30px",
                                    marginLeft: "-100px",
                                }}
                            >
                                <div style={{ display: "flex", }}>
                                    <p style={{ fontSize: "12px", width: "45%" }}>Mot de Passe</p>
                                    <TextField
                                        name="password"
                                        type="password"
                                        onChange={(e) => {
                                            setPassword(e.target.value)

                                        }}
                                        required
                                        fullWidth
                                        autoFocus
                                        size="small"
                                        sx={{ backgroundColor: "#FBFBFB", width: "360px" }}
                                    />
                                </div>
                                <div style={{ display: "flex", gridGap: "0px", }}>
                                    <p style={{ fontSize: "12px", width: "45%" }}>Confirmer mdp</p>
                                    <TextField
                                        type="password"
                                        onChange={(e) => {
                                            setPassword_confirmation(e.target.value)


                                        }}
                                        name="password_confirmation"
                                        required
                                        fullWidth
                                        id="password_confirmation"
                                        autoFocus
                                        size="small"
                                        sx={{ backgroundColor: "#FBFBFB", width: "300px" }}
                                    />
                                </div>


                            </div> <br /> <br />
                            <span style={{ marginLeft: "130px", color: "red", fontSize: "20px", fontWeight: "600", }}> {message} </span>

                            <button className="btcontenu" style={{ padding: "15px 30px", position: "relative", top: "40px", background: "#FCA13A", border: "none", color: "#fff" }}>Valider</button>
                        </form>

                    </div>
                </Box>

            </div>
        </div>
    );
};

export default Profil;
