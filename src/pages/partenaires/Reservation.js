import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { useNavigate, useParams } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";
import Header from "../../Components/header/Header";
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
import api from "../../service/api";
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
  const { id } = useParams()
  const [data, setData] = useState();
  const [prenom, setPrenom] = useState('')
  const [nom, setNom] = useState('')
  const [nom_structure, setNom_structure] = useState('')
  const [email, setEmail] = useState('')
  const [telephone, setTelephone] = useState('')
  const [adresse, setAdresse] = useState('')
  const [region, setRegion] = useState('')
  const [ville, setVille] = useState('')
  const [pays, setPays] = useState('')
  const [logo, setLogo] = useState(null)
  const [serviceId, setServiceId] = useState(id)
  const [montant_restant, setMontant_restant] = useState('')




  const getserviceid = async () => {
    try {
      const response = await api.getserviceid(id)
      if (response) {
        setData(response.data);

      }
    } catch (error) {
      console.log(error)
    }
  };


  useEffect(() => {
    getserviceid();
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('prenom', prenom);
    formData.append('nom', nom);
    formData.append('nom_structure', nom_structure);
    formData.append('email', email);
    formData.append('telephone', telephone);
    formData.append('adresse', adresse);
    formData.append('region', region);
    formData.append('ville', ville);
    formData.append('pays', pays);
    formData.append('logo', logo);
    formData.append('serviceId', serviceId);
    formData.append('montant_restant', montant_restant);

    try {
      const resp = await api.postuserstand(formData);
      localStorage.setItem("response", JSON.stringify(resp.data));

      // console.log(resp.data)
      window.location.href = "/partenaire/FinReservation"

    } catch (error) {
      console.log(error)
    }



  }


  return (
    <div className="containe">
      <Header />

      <div className="main-section">
        <div className="section">
          <div className="main-container1">
            <>
              <div>
                <h1>{data?.nom_service}</h1>
                <p>{data?.prix}</p>
                <table className="table">
                  <tr>
                    <td>{data?.dimension}</td>
                    <td className="icon">
                      <CheckCircle />
                    </td>
                  </tr>
                  {(() => {
                    if (data?.book === null) {
                    } else {
                      return (
                        <tr>
                          <td>{data?.book}</td>
                          <td className="icon">
                            <CheckCircle />
                          </td>
                        </tr>
                      )
                    }
                  })()}

                  {(() => {
                    if (data?.place === null) {
                    } else {
                      return (

                        <tr>
                          <td>{data?.place} </td>
                          <td className="icon">
                            <CheckCircle />
                          </td>
                        </tr>
                      )
                    }
                  })()}


                  {(() => {
                    if (data?.desk === null) {
                    } else {
                      return (

                        <tr>
                          <td>{data?.desk} </td>
                          <td className="icon">
                            <CheckCircle />
                          </td>
                        </tr>
                      )
                    }
                  })()}

                  {(() => {
                    if (data?.support_communication === null) {
                    } else {
                      return (
                        <tr>
                          <td>
                            {data?.support_communication}
                          </td>
                          <td className="icon">
                            <CheckCircle />
                          </td>
                        </tr>
                      )
                    }
                  })()}

                  {(() => {
                    if (data?.Kakemono === "" || data?.Kakemono === null) {
                    } else {
                      return (
                        <tr>
                          <td>
                            {data?.Kakemono}
                          </td>
                          <td className="icon">
                            <CheckCircle />
                          </td>
                        </tr>
                      )
                    }
                  })()}

                  {(() => {
                    if (data?.salle_pleniere === null) {
                    } else {
                      return (
                        <tr>
                          <td>
                            {data?.salle_pleniere}
                          </td>
                          <td className="icon">
                            <CheckCircle />
                          </td>
                        </tr>
                      )
                    }
                  })()}

                  {(() => {
                    if (data?.salle_commission === null) {
                    } else {
                      return (
                        <tr>
                          <td>
                            {data?.salle_commission}
                          </td>
                          <td className="icon">
                            <CheckCircle />
                          </td>
                        </tr>
                      )
                    }
                  })()}

                  {(() => {
                    if (data?.espace_networking === null) {
                    } else {
                      return (
                        <tr>
                          <td>
                            {data?.espace_networking}
                          </td>
                          <td className="icon">
                            <CheckCircle />
                          </td>
                        </tr>
                      )
                    }
                  })()}

                  {(() => {
                    if (data?.publireportage === null) {
                    } else {
                      return (
                        <tr>
                          <td>
                            {data?.publireportage}
                          </td>
                          <td className="icon">
                            <CheckCircle />
                          </td>
                        </tr>
                      )
                    }
                  })()}



                </table>

              </div>

            </>
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
                  <form onSubmit={handleSubmit}
                    style={{ width: "240px", height: "100px" }}>

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
                            Prenoms
                          </p>
                          <TextField
                            onChange={(e) => {
                              setPrenom(e.target.value)
                              setMontant_restant(data.prix)
                            }}
                            autoComplete="prenom"
                            name="prenom"
                            value={prenom}
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
                            value={nom}
                            onChange={(e) => setNom(e.target.value)}
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
                            onChange={(e) => setNom_structure(e.target.value)}
                            value={nom_structure}
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
                            onChange={(e) => setRegion(e.target.value)}
                            value={region}
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
                            onChange={(e) => setPays(e.target.value)}
                            value={pays}
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
                            ville
                          </p>
                          <TextField
                            autoComplete="ville"
                            name="ville"
                            onChange={(e) => setVille(e.target.value)}
                            value={ville}
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
                            required
                            fullWidth
                            id="telephone"
                            onChange={(e) => setTelephone(e.target.value)}
                            value={telephone}
                            name="telephone"
                            autoComplete="phone"
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
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
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
                            onChange={(e) => setAdresse(e.target.value)}
                            value={adresse}
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
                            Logo
                          </p>
                          <input
                            type="file"
                            id="logo"
                            name="logo"
                            onChange={(e) => {
                              console.log(e.target.files)
                              setLogo(e.target.files[0])
                            }
                            }

                          />

                        </Grid>
                      </Grid>



                      <div className="boutonreserve">
                        <button
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
        </div>
      </div>


      {/* {(() => {
        if () {
        } else {
          return (

                         
                        )
        }
      })()} */}


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
