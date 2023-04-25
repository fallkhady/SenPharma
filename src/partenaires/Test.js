// import React from "react";
// import {
//     Stepper,
//     Step,
//     Button,
//     Typography,
//     CircularProgress
// } from "@mui/material";
// import { Formik, Form } from "formik";


// import useStyles from "./styles";

// const steps = ["Shipping address", "Payment details", "Review your order"];
// const { formId, formField } = checkoutFormModel;

// // function _renderStepContent(step) {
// //     switch (step) {
// //         case 0:
// //             return <AddressForm formField={formField} />;
// //         case 1:
// //             return <PaymentForm formField={formField} />;
// //         case 2:
// //             return <ReviewOrder />;
// //         default:
// //             return <div>Not Found</div>;
// //     }
// // }

// export default function Test() {
//     const classNamees = useStyles();
//     const [activeStep, setActiveStep] = useState(0);
//     const currentValidationSchema = validationSchema[activeStep];
//     const isLastStep = activeStep === steps.length - 1;

//     function _sleep(ms) {
//         return new Promise((resolve) => setTimeout(resolve, ms));
//     }

//     async function _submitForm(values, actions) {
//         await _sleep(1000);
//         alert(JSON.stringify(values, null, 2));
//         actions.setSubmitting(false);

//         setActiveStep(activeStep + 1);
//     }

//     function _handleSubmit(values, actions) {
//         if (isLastStep) {
//             _submitForm(values, actions);
//         } else {
//             setActiveStep(activeStep + 1);
//             actions.setTouched({});
//             actions.setSubmitting(false);
//         }
//     }

//     function _handleBack() {
//         setActiveStep(activeStep - 1);
//     }

//     return (
//         <React.Fragment>
//             <Typography component="h1" variant="h4" align="center">
//                 Checkout
//       </Typography>
//             <Stepper
//                 activeStep={activeStep}
//                 classNameName={classNamees.stepper}
//                 orientation="vertical"
//             >
//                 {steps.map((label) => (
//                     <Step key={label}>
//                         <StepLabel>{label}</StepLabel>
//                     </Step>
//                 ))}
//             </Stepper>
//             <React.Fragment>
//                 {activeStep === steps.length ? (
//                     <CheckoutSuccess />
//                 ) : (
//                         <Formik
//                             initialValues={formInitialValues}
//                             validationSchema={currentValidationSchema}
//                             onSubmit={_handleSubmit}
//                         >
//                             {({ isSubmitting }) => (
//                                 <Form id={formId}>
//                                     {_renderStepContent(activeStep)}

//                                     <div classNameName={classNamees.buttons}>
//                                         {activeStep !== 0 && (
//                                             <Button onClick={_handleBack} classNameName={classNamees.button}>
//                                                 Back
//                                             </Button>
//                                         )}
//                                         <div classNameName={classNamees.wrapper}>
//                                             <Button
//                                                 disabled={isSubmitting}
//                                                 type="submit"
//                                                 variant="contained"
//                                                 color="primary"
//                                                 classNameName={classNamees.button}
//                                             >
//                                                 {isLastStep ? "Place order" : "Next"}
//                                             </Button>
//                                             {isSubmitting && (
//                                                 <CircularProgress
//                                                     size={24}
//                                                     classNameName={classNamees.buttonProgress}
//                                                 />
//                                             )}
//                                         </div>
//                                     </div>
//                                 </Form>
//                             )}
//                         </Formik>
//                     )}
//             </React.Fragment>
//         </React.Fragment>
//     );
// }

// import React from 'react';
// import { CheckCircle } from '@mui/icons-material';
// import './slide.css'

// const Test = () => {

//     const [selectedIndex, setSelectedIndex] = React.useState(0);

//     const checkNext = () => {
//         const labels = document.querySelectorAll('#testimonials label ');
//         const nextIndex = selectedIndex === (labels.length - 1) ? 0 : selectedIndex + 1;
//         setSelectedIndex(nextIndex);
//     }


//     const check = index => setSelectedIndex(index);
//     return (
//         <div className="containe">

//             <div className="button">
//                 <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-5 flex-shrink-0">
//                     <button onClick={checkNext}>{'<'}</button>
//                 </div>
//             </div>
//             <div className="slider">
//                 <input type="radio" name="testimonial" id="t-1" checked={selectedIndex === 0} />
//                 <input type="radio" name="testimonial" id="t-2" checked={selectedIndex === 1} />
//                 <input type="radio" name="testimonial" id="t-3" checked checked={selectedIndex === 2} />
//                 <input type="radio" name="testimonial" id="t-4" checked={selectedIndex === 3} />
//                 <input type="radio" name="testimonial" id="t-5" checked={selectedIndex === 4} />
//                 <div className="testimonials">
//                     <label className="item" for="t-1">
//                         {/* <h1>1</h1> */}
//                         <h1>Baneex</h1>
//                         <p>100.000 <span>cfa</span> </p>
//                         <table className="table1">
//                             <tr>
//                                 <td>All Limited link</td>
//                                 <td className="icon"><CheckCircle /></td>
//                             </tr>
//                             <tr>
//                                 <td>Upload unlimeted </td>
//                                 <td className="icon"><CheckCircle /></td>
//                             </tr>
//                             <tr>
//                                 <td>Get Membership</td>
//                                 <td className="icon"><CheckCircle /></td>
//                             </tr>
//                             <tr>
//                                 <td>Free Sharing & Acces</td>
//                                 <td className="icon"><CheckCircle /></td>
//                             </tr>

//                         </table>
//                         <button
//                             type="submit"
//                             name="slider"
//                             fullWidth
//                             className="btn"


//                         >
//                             Réserver
//             </button>
//                     </label>
//                     <label className="item" for="t-2">
//                         {/* <h1>2</h1> */}
//                         <h1>OR</h1>
//                         <p>100.000 <span>cfa</span> </p>
//                         <table className="table">
//                             <tr>
//                                 <td>stand 18 m²</td>
//                                 <td className="icon"><CheckCircle /></td>
//                             </tr>
//                             <tr>
//                                 <td>1 page d'insertion dans le book</td>
//                                 <td className="icon"><CheckCircle /></td>
//                             </tr>
//                             <tr>
//                                 <td>2 salons de 3 places</td>
//                                 <td className="icon"><CheckCircle /></td>
//                             </tr>
//                             <tr>
//                                 <td>2 desks brandés</td>
//                                 <td className="icon"><CheckCircle /></td>
//                             </tr>
//                             <tr>
//                                 <td>Visibilité sur les supports de <br /> communication</td>
//                                 <td className="icon"><CheckCircle /></td>
//                             </tr>
//                             <tr>
//                                 <td>2 Kakemonos dans la salle de <br /> plénière</td>
//                                 <td className="icon"><CheckCircle /></td>
//                             </tr>
//                         </table>
//                         <button
//                             type="submit"
//                             name="slider"
//                             fullWidth
//                             className="btn"

//                         >
//                             Réserver
//             </button>
//                     </label>
//                     <label className="item" for="t-3">
//                         {/* <h1>3</h1> */}

//                     </label>
//                     <label className="item" for="t-4">
//                         <h1>4</h1>
//                     </label>
//                     <label className="item" for="t-5">
//                         <h1>Platinum</h1>
//                         <p>250.000 <span>cfa</span> </p>
//                         <table className="table">
//                             <tr>
//                                 <td>stand 18 m²</td>
//                                 <td className="icon"><CheckCircle /></td>
//                             </tr>
//                             <tr>
//                                 <td>1 page d'insertion dans le book</td>
//                                 <td className="icon"><CheckCircle /></td>
//                             </tr>
//                             <tr>
//                                 <td>2 salons de 3 places</td>
//                                 <td className="icon"><CheckCircle /></td>
//                             </tr>
//                             <tr>
//                                 <td>2 desks brandés</td>
//                                 <td className="icon"><CheckCircle /></td>
//                             </tr>
//                             <tr>
//                                 <td>Visibilité sur les supports de <br />  communication</td>
//                                 <td className="icon"><CheckCircle /></td>
//                             </tr>
//                             <tr>
//                                 <td>2 Kakemonos dans la salle de <br /> plénière</td>
//                                 <td className="icon"><CheckCircle /></td>
//                             </tr>
//                         </table>
//                         <button
//                             type="submit"
//                             name="slider"
//                             fullWidth
//                             className="btn"
//                             checked={selectedIndex === 0}
//                             onClick={() => check(0)}

//                         >
//                             Réserver
//             </button>
//                     </label>
//                 </div>
//                 <br />
//                 <div className="dots">
//                     <label for="t-1"></label>
//                     <label for="t-2"></label>
//                     <label for="t-3"></label>
//                     <label for="t-4"></label>
//                     <label for="t-5"></label>
//                 </div>
//             </div>


//             <div className="button1">
//                 <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-5 flex-shrink-0">
//                     <button onClick={checkNext}>{'>'}</button>
//                 </div>
//             </div>

//         </div>
//     );
// };

// export default Test;