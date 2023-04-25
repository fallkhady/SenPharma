import React from 'react';
import { CheckCircle } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Header from '../Components/Header';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
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
            theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#E6EDFE',
        borderRadius: 1,
    },
}));

const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : 'none',
    zIndex: 1,
    width: 15,
    border: "1px solid #E6EDFE",
    height: 15,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    ...(ownerState.active && {
        border: "1px solid #FCA13A",
    }),
    ...(ownerState.completed && {
        border: "1px solid #FCA13A",
        backgroundColor: "#FCA13A",
    }),
}));

function ColorlibStepIcon(props: StepIconProps) {
    const { active, completed, className } = props;

    const icons: { [index: string]: React.ReactElement } = {
        1: "",
        2: "",
        3: "",
        4: "",
    };

    return (
        <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
            {icons[String(props.icon)]}
        </ColorlibStepIconRoot>
    );
}

const steps = ['Choix', 'Formulaire', 'Reservation', 'Merci'];
const Reserve = () => {

    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const checkNext = () => {
        const labels = document.querySelectorAll('#slider label ');
        const nextIndex = selectedIndex === (labels.length - 1) ? 0 : selectedIndex + 1;
        setSelectedIndex(nextIndex);
    }

    const check = index => setSelectedIndex(index);
    return (

        <div className="containe">
            <Header />
            <div className="button">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-5 flex-shrink-0">
                    <a onClick={checkNext}>{'<'}</a>
                </div>
            </div>
            <div className="md:w-2/4 md:mb-0 mb-6 flex flex-col text-center items-center">
                <section
                    id="slider"

                >
                    <input
                        type="radio"
                        name="slider"
                        id="s1"
                        checked={selectedIndex === 0}
                        onClick={() => check(0)}
                    />
                    <input
                        type="radio"
                        name="slider"
                        id="s2"
                        checked={selectedIndex === 1}
                        onClick={() => check(1)}
                    />
                    <input
                        type="radio"
                        name="slider"
                        id="s3"
                        checked={selectedIndex === 2}
                        onClick={() => check(2)}
                    />

                    <label htmlFor="s1" id="slide1"  >
                        <h1>Baneex</h1>
                        <p>100.000 <span>cfa</span> </p>
                        <table className="table1">
                            <tr>
                                <td>All Limited Link</td>
                                <td className="icon"><CheckCircle /></td>
                            </tr>
                            <tr>
                                <td>Upload unlimeted </td>
                                <td className="icon"><CheckCircle /></td>
                            </tr>
                            <tr>
                                <td>Get Membership</td>
                                <td className="icon"><CheckCircle /></td>
                            </tr>
                            <tr>
                                <td>Free Sharing & Acces</td>
                                <td className="icon"><CheckCircle /></td>
                            </tr>

                        </table>
                        <a
                            type="submit"
                            name="slider"
                            fullWidth
                            className="btn"
                            href='/partenaire/reservation'

                        >
                            Réserver
            </a>
                    </label>
                    <label htmlFor="s2" id="slide2" >

                        <h1>Platinum</h1>
                        <p>250.000 <span>cfa</span> </p>
                        <table className="table">
                            <tr>
                                <td>stand 18 m²</td>
                                <td className="icon"><CheckCircle /></td>
                            </tr>
                            <tr>
                                <td>1 page d'insertion dans le book</td>
                                <td className="icon"><CheckCircle /></td>
                            </tr>
                            <tr>
                                <td>2 salons de 3 places</td>
                                <td className="icon"><CheckCircle /></td>
                            </tr>
                            <tr>
                                <td>2 desks brandés</td>
                                <td className="icon"><CheckCircle /></td>
                            </tr>
                            <tr>
                                <td>Visibilité sur les supports de <br />  communication</td>
                                <td className="icon"><CheckCircle /></td>
                            </tr>
                            <tr>
                                <td>2 Kakemonos dans la salle de <br /> plénière</td>
                                <td className="icon"><CheckCircle /></td>
                            </tr>
                        </table>
                        <a
                            type="submit"
                            name="slider"
                            fullWidth
                            className="btn"
                            href='/partenaire/reservation'



                        >
                            Réserver
            </a>
                    </label>
                    <label htmlFor="s3" id="slide3" >
                        <h1>OR</h1>
                        <p>100.000 <span>cfa</span> </p>
                        <table className="table">
                            <tr>
                                <td>stand 18 m²</td>
                                <td className="icon"><CheckCircle /></td>
                            </tr>
                            <tr>
                                <td>1 page d'insertion dans le book</td>
                                <td className="icon"><CheckCircle /></td>
                            </tr>
                            <tr>
                                <td>2 salons de 3 places</td>
                                <td className="icon"><CheckCircle /></td>
                            </tr>
                            <tr>
                                <td>2 desks brandés</td>
                                <td className="icon"><CheckCircle /></td>
                            </tr>
                            <tr>
                                <td>Visibilité sur les supports de <br /> communication</td>
                                <td className="icon"><CheckCircle /></td>
                            </tr>
                            <tr>
                                <td>2 Kakemonos dans la salle de <br /> plénière</td>
                                <td className="icon"><CheckCircle /></td>
                            </tr>
                        </table>
                        <a
                            type="submit"
                            name="slider"
                            fullWidth
                            className="btn"
                            href='/partenaire/reservation'



                        >
                            Réserver
            </a>
                    </label>



                </section>
            </div>
            <div className="button1">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-5 flex-shrink-0">
                    <a onClick={checkNext}>{'>'}</a>
                </div>
            </div>
            <div className="step">
                <Stepper alternativeLabel activeStep={1} connector={<ColorlibConnector />} sx={{
                    width: "300px", marginLeft: "510px", marginTop: "140px", backgroundColor: "#fff", borderRadius: "10px", padding: "8px 10px", "& .css-1hv8oq8-MuiStepLabel-label.Mui-completed": { color: "#FCA13A" }, "& .Mui-active": {
                        color: "#68727B"
                    },
                    "& .Mui-disabled": {
                        color: "#68727B"
                    }
                }}>
                    {
                        steps.map((label) => (
                            <Step key={label}>
                                <StepLabel StepIconComponent={ColorlibStepIcon} >{label}</StepLabel>
                            </Step>
                        ))
                    }
                </Stepper>
            </div>
        </div>





    );
};

export default Reserve;