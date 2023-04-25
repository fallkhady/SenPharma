import React from 'react';
import CustomMinitableau from '../Components/CustomMinitableau';
import Navbar from '../Components/Navbar';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



const Parametre = () => {

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <div>
            <Navbar />
            <Box sx={{}}>
                <div className="contenu" style={{ backgroundColor: "#fff", boxShadow: "0px 3.59338px 3.59338px rgba(0, 0, 0, 0.03)", width: "50%", position: "relative", bottom: "490px", left: "370px", padding: "10px 100px" }}>
                    <div className="titre" style={{ marginRight: "70px" }}>
                        <p >Super Admin</p>
                    </div>
                    <div style={{ display: "flex", gridGap: "20px", marginTop: "25px" }}>
                        <div style={{ display: "flex", gridGap: "10px" }}>
                            <p style={{ fontSize: "12px", width: "39%" }}>Nom & Prenom</p>
                            <TextField
                                autoComplete="given-name"
                                name="firstName"
                                required
                                fullWidth
                                id="firstName"
                                autoFocus
                                size="small"
                                sx={{ backgroundColor: "#FBFBFB" }}
                            />
                        </div>
                        <div style={{ display: "flex", gridGap: "20px" }}>
                            <p style={{ fontSize: "12px" }}>Type de payement</p>
                            <FormControl fullWidth style={{ width: "180px" }}>
                                <Select
                                    value={age}
                                    onChange={handleChange}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label', }}
                                    size="small"
                                    sx={{ backgroundColor: "#FBFBFB" }}

                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Wave</MenuItem>
                                    <MenuItem value={20}>Orange money</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                    <div style={{ display: "flex", gridGap: "20px", marginTop: "30px", marginLeft: "15px" }}>
                        <div style={{ display: "flex", gridGap: "38px" }}>
                            <p style={{ fontSize: "12px" }}>Numéro</p>
                            <TextField
                                autoComplete="given-name"
                                name="firstName"
                                required
                                fullWidth
                                id="firstName"
                                autoFocus
                                size="small"
                                sx={{ backgroundColor: "#FBFBFB" }}
                            />
                        </div>
                        <div style={{ display: "flex", marginLeft: "30px" }}>
                            <p style={{ fontSize: "12px", width: "50%" }} >Montant</p>
                            <TextField
                                autoComplete="given-name"
                                name="firstName"
                                required
                                fullWidth
                                id="firstName"
                                autoFocus
                                size="small"
                                sx={{ backgroundColor: "#FBFBFB" }}
                            />
                        </div>
                    </div>

                    <Button style={{ fontSize: "12px", marginRight: "680px", marginTop: "30px", background: "#fff3e4", borderRadius: "2px", color: " #FCA13A", textTransform: "none", }}>Valider</Button>
                </div>
            </Box>

            <div className="" style={{ display: "flex", position: "relative", bottom: "480px", left: "300px", gridGap: "800px" }}>
                <p style={{ fontSize: "20px", color: "#000000", fontWeight: 700 }}>Managers</p>
                <p style={{ backgroundColor: "#FCA13A", padding: "10px 20px", borderRadius: "15px", fontSize: "12px", color: "#fff", cursor: "pointer" }}>Ajouter</p>
            </div>

            <div style={{ width: "74%", position: "relative", bottom: "500px", left: "300px" }}>
                <CustomMinitableau />
            </div>

        </div>
    );
};

export default Parametre;