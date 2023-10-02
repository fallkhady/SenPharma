import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from "@mui/material/TextField";
import { MuiTelInput } from "mui-tel-input";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Header from "../../Components/header/Header";
import api from "../../service/api";
import "./style.css";

export default function Participant() {
  const [inputData, setInputData] = useState();
  const [montant_restant, setMontant_restant] = useState(0);
  const [montant, setMontant] = useState(0);
  const [kits, setKits] = useState('');



  const handleInput = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputData.kits === 'avec kit') {
      inputData.prix_kits = 20000;
      inputData.montant_restant = 20000;

    } else {
      inputData.prix_kits = 0;
      inputData.montant_restant = 0;
      inputData.statut_paiement = "Payée";
    }
    console.log(inputData)
    try {
      const resp = await api.postuserstand(inputData);
      console.log(resp.data)
      localStorage.setItem("response", JSON.stringify(resp.data))
      window.location.href = "/partenaire/FinReservation"

    } catch (error) {
      console.log(error)
    }


  };

  return (
    <div className="containe">
      <Header />
      <div className="form" style={{ paddingTop: "90px" }}>
        <Container
          component="main"
          sx={{
            width: 440,
            backgroundColor: "#fff",
            padding: "10px 40px",
            borderRadius: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              component="h1"
              variant="h5"
              sx={{ color: "#2E2E2E", fontSize: "40px", fontWeight: "600" }}
            >
              Participant{" "}

            </Typography>

            <p
              style={{
                color: "#2E2E2E",
                fontSize: "20px",
                fontWeight: 600,
                position: "relative",
                bottom: "20px",
              }}
            >
              Formulaire
            </p>

            <form onSubmit={handleSubmit}
              style={{ width: "240px", height: "110vh" }}>

              <div className="item">
                <Grid
                  container
                  spacing={1}
                  sx={{ marginTop: "-30px" }}
                >
                  <Grid item xs={12} sm={6}>
                    <p
                      style={{
                        textAlign: "justify",
                        textTransform: "uppercase",
                        color: "#000000",
                        fontSize: "12px",
                        opacity: 0.5,
                      }}
                    >
                      Prenoms
                    </p>
                    <TextField
                      onChange={handleInput}
                      autoComplete="prenom"
                      name="prenom"
                      required
                      fullWidth
                      id="prenom"
                      autoFocus
                      sx={{
                        marginBottom: "-10px",
                        background: "#F9FAFF",
                        border: "0.53437 1px solid #D5DCFF",
                        "& .MuiInputBase-root": {
                          height: 30,
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <p
                      style={{
                        textAlign: "justify",
                        textTransform: "uppercase",
                        color: "#000000",
                        fontSize: "12px",
                        opacity: 0.5,
                      }}
                    >
                      nom
                    </p>
                    <TextField
                      required
                      fullWidth
                      onChange={handleInput}
                      id="nom"
                      name="nom"
                      autoComplete="nom"
                      sx={{
                        background: "#F9FAFF",
                        marginBottom: "-10px",
                        border: "0.53437 1px solid #D5DCFF",
                        "& .MuiInputBase-root": {
                          height: 30,
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <p
                      style={{
                        textAlign: "justify",
                        textTransform: "uppercase",
                        color: "#000000",
                        fontSize: "12px",
                        opacity: 0.5,
                      }}
                    >
                      Structure
                    </p>
                    <TextField
                      required
                      fullWidth
                      onChange={handleInput}
                      id="nom_structure"
                      name="nom_structure"
                      autoComplete="nom"
                      sx={{
                        background: "#F9FAFF",
                        border: "0.53437 1px solid #D5DCFF",
                        marginBottom: "-10px",

                        "& .MuiInputBase-root": {
                          height: 30,
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <p
                      style={{
                        textAlign: "justify",
                        textTransform: "uppercase",
                        color: "#000000",
                        opacity: 0.5,
                        fontSize: "12px",
                      }}
                    >
                      Région
                    </p>
                    <TextField
                      autoComplete="region"
                      name="region"
                      onChange={handleInput}
                      required
                      fullWidth
                      id="region"
                      autoFocus
                      sx={{
                        marginBottom: "-10px",
                        background: "#F9FAFF",
                        border: "0.53437 1px solid #D5DCFF",
                        "& .MuiInputBase-root": {
                          height: 30,
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <p
                      style={{
                        textAlign: "justify",
                        textTransform: "uppercase",
                        color: "#000000",
                        opacity: 0.5,
                        fontSize: "12px",
                      }}
                    >
                      Pays
                    </p>
                    <TextField
                      required
                      fullWidth
                      id="pays"
                      onChange={handleInput}
                      name="pays"
                      autoComplete="pays"
                      sx={{
                        marginBottom: "-10px",
                        background: "#F9FAFF",
                        border: "0.53437 1px solid #D5DCFF",
                        "& .MuiInputBase-root": {
                          height: 30,
                        },
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} >
                    <p
                      style={{
                        textAlign: "justify",
                        textTransform: "uppercase",
                        color: "#000000",
                        opacity: 0.5,
                        fontSize: "12px",
                      }}
                    >
                      ville
                    </p>
                    <TextField
                      autoComplete="ville"
                      name="ville"
                      onChange={handleInput}
                      required
                      fullWidth
                      id="ville"
                      autoFocus
                      sx={{
                        marginBottom: "-10px",
                        background: "#F9FAFF",
                        border: "0.53437 1px solid #D5DCFF",
                        "& .MuiInputBase-root": {
                          height: 30,
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} >
                    <p
                      style={{
                        textAlign: "justify",
                        textTransform: "uppercase",
                        color: "#000000",
                        opacity: 0.5,
                        fontSize: "12px",
                      }}
                    >
                      Téléphone
                    </p>
                    <TextField
                      defaultCountry="SN"
                      onChange={handleInput}
                      id="telephone"
                      name="telephone"
                      required
                      sx={{
                        marginBottom: "-10px",
                        background: "#F9FAFF",
                        border: "0.53437 1px solid #D5DCFF",
                        "& .MuiInputBase-root": {
                          height: 30,
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <p
                      style={{
                        textAlign: "justify",
                        textTransform: "uppercase",
                        color: "#000000",
                        opacity: 0.5,
                        fontSize: "12px",
                      }}
                    >
                      Email
                    </p>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      name="email"
                      onChange={handleInput}
                      autoComplete="email"
                      sx={{
                        marginBottom: "-10px",
                        background: "#F9FAFF",
                        border: "0.53437 1px solid #D5DCFF",
                        "& .MuiInputBase-root": {
                          height: 30,
                        },
                      }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <p
                      style={{
                        textAlign: "justify",
                        textTransform: "uppercase",
                        color: "#000000",
                        opacity: 0.5,
                        fontSize: "12px",
                      }}
                    >
                      Adresse
                    </p>
                    <TextField
                      required
                      fullWidth
                      onChange={handleInput}
                      id="adresse"
                      name="adresse"
                      autoComplete="address"
                      sx={{
                        marginBottom: "-10px",
                        background: "#F9FAFF",
                        border: "0.53437 1px solid #D5DCFF",
                        "& .MuiInputBase-root": {
                          height: 30,
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ marginTop: "20px" }}>
                    <RadioGroup
                      aria-labelledby="demo-error-radios"
                      name="kits"
                      onChange={handleInput}

                    >
                      <FormControlLabel value="avec kit" control={<Radio />} label="Avec kit 20.000 (sac, Bloc-notes, Book, Stylo)" />
                      <FormControlLabel value="sans kit" control={<Radio />} label="sans kit" />
                    </RadioGroup>


                  </Grid>


                </Grid>



                <div >
                  <button style={{ padding: "15px 20px", marginTop: "50px", background: "#FCA13A", border: "none", color: "#fff" }}
                    type="submit"

                  >
                    Réserver
                  </button>
                </div>



              </div>


            </form>
          </Box>
        </Container>
      </div>
    </div>
  );
}
