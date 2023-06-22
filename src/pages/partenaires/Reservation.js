import React from "react";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";
import Header from "../../Components/header/Header";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import "./style.css";

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 8,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: "#FCA13A",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: "#FCA13A",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 2,
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#E6EDFE",
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "none",
  zIndex: 1,
  width: 15,
  border: "1px solid #E6EDFE",
  height: 15,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    border: "1px solid #FCA13A",
  }),
  ...(ownerState.completed && {
    border: "1px solid #FCA13A",
    backgroundColor: "#FCA13A",
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: "",
    2: "",
    3: "",
    4: "",
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

const steps = ["Choix", "Formulaire", "Reservation", "Merci"];

const Reservation = () => {
  const navigate = useNavigate();

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

      <div className="main-section">
        <div className="section">
          <div className="main-container1">
            <h1>Platinum</h1>
            <p>
              250.000 <span>cfa</span>{" "}
            </p>
            <table className="table">
              <tr>
                <td>stand 18 m²</td>
                <td className="icon">
                  <CheckCircle />
                </td>
              </tr>
              <tr>
                <td>1 page d'insertion dans le book</td>
                <td className="icon">
                  <CheckCircle />
                </td>
              </tr>
              <tr>
                <td>2 salons de 3 places</td>
                <td className="icon">
                  <CheckCircle />
                </td>
              </tr>
              <tr>
                <td>2 desks brandés</td>
                <td className="icon">
                  <CheckCircle />
                </td>
              </tr>
              <tr>
                <td>
                  Visibilité sur les supports de <br /> communication
                </td>
                <td className="icon">
                  <CheckCircle />
                </td>
              </tr>
              <tr>
                <td>
                  2 Kakemonos dans la salle de <br /> plénière
                </td>
                <td className="icon">
                  <CheckCircle />
                </td>
              </tr>
            </table>
          </div>

          <span class="vertical-line"></span>

          <div className="main-conatiner2">
            <div className="form" style={{}}>
              <Container
                component="main"
                sx={{ width: 340, padding: "30px 40px" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
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
                    sx={{ width: "240px", height: "100px" }}
                  >
                    <div className="item">
                      <Grid
                        container
                        spacing={1}
                        sx={{ marginTop: "-30px", textTransform: "uppercase" }}
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
                            id="lastName"
                            name="lastName"
                            autoComplete="family-name"
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
                            Nom structure
                          </p>
                          <TextField
                            required
                            fullWidth
                            id="structure"
                            name="email"
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
                            Téléphone
                          </p>
                          <TextField
                            autoComplete="phone"
                            name="phone"
                            required
                            fullWidth
                            id="phone"
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
                      </Grid>
                    </div>
                  </Box>
                </Box>
              </Container>
            </div>
          </div>
        </div>
      </div>
      <div className="bton">
        <Button
          type="button"
          onClick={() => navigate("/partenaire/FinReservation")}
          fullWidth
          sx={{
            mt: 3,
            mb: 2,
            width: "8%",
            backgroundColor: "#FCA13A",
            color: "#fff",
            fontSize: "14px",
            textTransform: "none",
            marginTop: "-90px",
            marginLeft: "70px",
          }}
        >
          Réserver
        </Button>
      </div>

      <div className="stepper">
        <Stepper
          alternativeLabel
          activeStep={2}
          connector={<ColorlibConnector />}
          sx={{
            width: "30%",
            margin: "0 auto",
            backgroundColor: "#fff",
            color: "#FCA13A",
            borderRadius: "10px",
            padding: "8px 10px",
            "& .css-1hv8oq8-MuiStepLabel-label.Mui-completed": {
              color: "#FCA13A",
            },
            "& .Mui-active": {
              color: "#68727B",
            },
            "& .Mui-disabled": {
              color: "#68727B",
            },
          }}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>
    </div>
  );
};

export default Reservation;
