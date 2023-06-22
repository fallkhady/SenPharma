import React from "react";
import { styled } from "@mui/material/styles";
import Header from "../../Components/header/Header";
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

const FinReservation = () => {
  return (
    <div className="containe">
      <Header />

      <div className="main-card">
        <div className="card">
          <p>Merci</p>
          <span>Senpharma.sn</span>
        </div>
      </div>

      <div className="steppe">
        <Stepper
          alternativeLabel
          activeStep={3}
          connector={<ColorlibConnector />}
          sx={{
            width: "300px",
            marginLeft: "560px",
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

export default FinReservation;
