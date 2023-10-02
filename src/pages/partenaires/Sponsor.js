import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import Header from "../../Components/header/Header";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepConnector, {
    stepConnectorClasses,
} from "@mui/material/StepConnector";
import "./style.css";
import api from "../../service/api"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../Components/Slider/slide.css"



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

const steps = ["Choix", "Formulaire", "Sponsor", "Merci"];


const Sponsor = () => {

    const [data, setData] = useState([]);
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const getservice = async () => {
        try {

            const { data } = await api.getservice()
            if (data) {
                localStorage.setItem("service", JSON.stringify(data));
                const service = JSON.parse(localStorage.getItem("service"))
                const serviceSponsor = Object.values(service).filter(user => user.type_service === "SPONSOR");
                // console.log(serviceStand)
                setData(serviceSponsor)

            }

        } catch (error) {
            console.log(error)
        }



    };






    useEffect(() => {
        getservice();
    }, []);

    const checkNext = () => {
        const labels = document.querySelectorAll("#slider label ");
        const nextIndex =
            selectedIndex === labels.length - 1 ? 0 : selectedIndex + 1;
        setSelectedIndex(nextIndex);
    };

    const check = (index) => setSelectedIndex(index);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 1,


        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="containe">
            <Header />

            <div className="slide">

                <div className="slider"
                    style={{
                        width: "900px",
                        display: true ? "block" : "none"
                    }}
                >

                    <Slider {...settings}>
                        {data.map((item, i) =>
                            <>
                                <div className="s1">
                                    <h1>{item?.nom_service}</h1>
                                    <p>{item?.prix}</p>
                                    <table className="table">
                                        {(() => {
                                            if (item?.dimension === null) {
                                            } else {
                                                return (
                                                    <tr>
                                                        <td>{item?.dimension}</td>
                                                        <td className="icon">
                                                            <CheckCircle />
                                                        </td>
                                                    </tr>
                                                )
                                            }
                                        })()}

                                        {(() => {
                                            if (item?.book === null) {
                                            } else {
                                                return (
                                                    <tr>
                                                        <td>{item?.book}</td>
                                                        <td className="icon">
                                                            <CheckCircle />
                                                        </td>
                                                    </tr>
                                                )
                                            }
                                        })()}

                                        {(() => {
                                            if (item?.place === null) {
                                            } else {
                                                return (

                                                    <tr>
                                                        <td>{item?.place} </td>
                                                        <td className="icon">
                                                            <CheckCircle />
                                                        </td>
                                                    </tr>
                                                )
                                            }
                                        })()}


                                        {(() => {
                                            if (item?.desk === null) {
                                            } else {
                                                return (

                                                    <tr>
                                                        <td>{item?.desk} </td>
                                                        <td className="icon">
                                                            <CheckCircle />
                                                        </td>
                                                    </tr>
                                                )
                                            }
                                        })()}

                                        {(() => {
                                            if (item?.support_communication === null) {
                                            } else {
                                                return (
                                                    <tr>
                                                        <td>
                                                            {item?.support_communication}
                                                        </td>
                                                        <td className="icon">
                                                            <CheckCircle />
                                                        </td>
                                                    </tr>
                                                )
                                            }
                                        })()}

                                        {(() => {
                                            if (item?.Kakemono === "" || item?.Kakemono === null) {
                                            } else {
                                                return (
                                                    <tr>
                                                        <td>
                                                            {item?.Kakemono}
                                                        </td>
                                                        <td className="icon">
                                                            <CheckCircle />
                                                        </td>
                                                    </tr>
                                                )
                                            }
                                        })()}

                                        {(() => {
                                            if (item?.salle_pleniere === null) {
                                            } else {
                                                return (
                                                    <tr>
                                                        <td>
                                                            {item?.salle_pleniere}
                                                        </td>
                                                        <td className="icon">
                                                            <CheckCircle />
                                                        </td>
                                                    </tr>
                                                )
                                            }
                                        })()}

                                        {(() => {
                                            if (item?.salle_commission === null) {
                                            } else {
                                                return (
                                                    <tr>
                                                        <td>
                                                            {item?.salle_commission}
                                                        </td>
                                                        <td className="icon">
                                                            <CheckCircle />
                                                        </td>
                                                    </tr>
                                                )
                                            }
                                        })()}

                                        {(() => {
                                            if (item?.espace_networking === null) {
                                            } else {
                                                return (
                                                    <tr>
                                                        <td>
                                                            {item?.espace_networking}
                                                        </td>
                                                        <td className="icon">
                                                            <CheckCircle />
                                                        </td>
                                                    </tr>
                                                )
                                            }
                                        })()}

                                        {(() => {
                                            if (item?.publireportage === null) {
                                            } else {
                                                return (
                                                    <tr>
                                                        <td>
                                                            {item?.publireportage}
                                                        </td>
                                                        <td className="icon">
                                                            <CheckCircle />
                                                        </td>
                                                    </tr>
                                                )
                                            }
                                        })()}



                                    </table>

                                    <Link
                                        type="submit"
                                        name="slider"
                                        fullWidth
                                        className="btn"
                                        to={`/partenaire/reservesponsor/${item.id}`}
                                    >

                                        Réserver
                                    </Link>


                                </div>

                            </>
                        )}

                    </Slider>

                </div>
            </div>

            <div className="step">
                <Stepper
                    alternativeLabel
                    activeStep={1}
                    connector={<ColorlibConnector />}
                    sx={{
                        width: "30%",
                        margin: "0 auto",
                        marginTop: "35px",
                        backgroundColor: "#fff",
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

        </div >
    );
};

export default Sponsor;
