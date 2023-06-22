import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Header from "../../Components/header/Header";
import "./style.css";

export default function Participant() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <div className="containe">
      <Header />
      <div className="form" style={{ paddingTop: "90px" }}>
        <Container
          component="main"
          sx={{
            width: 340,
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
              <span
                style={{
                  fontSize: "20px",
                  position: "relative",
                  bottom: "20px",
                }}
              >
                indépendant
              </span>
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

            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ width: "240px" }}
            >
              <div className="item">
                <Grid
                  container
                  spacing={1}
                  sx={{ marginTop: "-20px", textTransform: "uppercase" }}
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
                      Prenom
                    </p>
                    <TextField
                      autoComplete="given-name"
                      name="firstName"
                      required
                      fullWidth
                      id="firstName"
                      autoFocus
                      inputProps={{
                        style: {
                          height: "2px",
                          background: "#F9FAFF",
                          border: "0.53437 1px solid #D5DCFF",
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
                      id="lastName"
                      name="lastName"
                      autoComplete="family-name"
                      inputProps={{
                        style: {
                          height: "2px",
                          background: "#F9FAFF",
                          border: "0.53437 1px solid #D5DCFF",
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
                      Nom structure
                    </p>
                    <TextField
                      required
                      fullWidth
                      id="structure"
                      name="email"
                      autoComplete="nom"
                      inputProps={{
                        style: {
                          height: "2px",
                          background: "#F9FAFF",
                          border: "0.53437 1px solid #D5DCFF",
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
                      Téléphone
                    </p>
                    <TextField
                      autoComplete="phone"
                      name="phone"
                      required
                      fullWidth
                      id="phone"
                      autoFocus
                      inputProps={{
                        style: {
                          height: "2px",
                          background: "#F9FAFF",
                          border: "0.53437 1px solid #D5DCFF",
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
                      name="pays"
                      autoComplete="pays"
                      inputProps={{
                        style: {
                          height: "2px",
                          background: "#F9FAFF",
                          border: "0.53437 1px solid #D5DCFF",
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
                      autoComplete="email"
                      inputProps={{
                        style: {
                          height: "2px",
                          background: "#F9FAFF",
                          border: "0.53437 1px solid #D5DCFF",
                        },
                      }}
                    />
                  </Grid>
                </Grid>
              </div>
              <Button
                type="submit"
                fullWidth
                sx={{
                  mt: 3,
                  mb: 2,
                  width: "35%",
                  backgroundColor: "#FCA13A",
                  color: "#fff",
                  fontSize: "14px",
                  textTransform: "none",
                }}
              >
                Réserver
              </Button>
            </Box>
          </Box>
        </Container>
      </div>
    </div>
  );
}
