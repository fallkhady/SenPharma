// import React, { useState, useEffect } from 'react';
// import {
//     Table,
//     TableHead,
//     TableContainer,
//     TableRow,
//     TableCell,
//     TableBody,
//     TextField,
//     Button,
//     IconButton,
//     Icon,
//     Select,
//     MenuItem,
// } from '@mui/material';
// import Autocomplete from '@mui/material/Autocomplete';
// import Header from '../../Components/header/Header';
// import DeleteIcon from '@mui/icons-material/Delete';
// import { Formik, Form, Field, FieldArray } from 'formik'
// import api from '../../service/api';




// function CustumDetente({ values, handleChange, setFieldValue }) {
//     const [pack, setpack] = useState([]); // State pour stocker les données du tableau

//     const getpacks = async () => {
//         try {
//             const response = await api.getpacks()
//             setpack(response.data)
//             console.log(response.data)

//         } catch (error) {
//             console.log(error)
//         }
//     }


//     useEffect(() => {
//         getpacks();
//     }, []);

//     const calculmontant = (item) => {
//         if (!item?.montant) return item?.prix * item?.quantite || 0
//     }

//     // const calculTotal = (itemList = []) => {
//     //     let subTotal = 0
//     //     itemList.forEach((item) => {
//     //         subTotal += calculmontant(item)
//     //     })

//     //     return subTotal
//     // }



//     return (
//         <div>
//             <FieldArray name="pack">
//                 {arrayHelpers => (
//                     <div>
//                         <Table>
//                             <TableHead sx={{}}>
//                                 <TableRow sx={{ position: "relative", left: "0px" }} >
//                                     <TableCell sx={{ width: "200px", fontSize: "18px", color: "#000", }}>Packs</TableCell>
//                                     <TableCell sx={{ width: "200px", fontSize: "18px", color: "#000", }} >Quantité </TableCell>
//                                     <TableCell sx={{ fontSize: "18px", color: "#000", }} >Prix</TableCell>
//                                     <TableCell sx={{ fontSize: "18px", color: "#000", }}>Montant</TableCell>
//                                     <TableCell ></TableCell>


//                                 </TableRow>
//                             </TableHead>
//                             <TableBody>

//                                 {values.pack?.map((item, ind) => (
//                                     <TableRow key={ind}>

//                                         <TableCell>
//                                             <Autocomplete
//                                                 className="w-full"
//                                                 size="small"
//                                                 options={pack}
//                                                 getOptionLabel={(option) => option.pack}
//                                                 renderInput={(params) => (
//                                                     <TextField
//                                                         {...params}
//                                                         variant="outlined"
//                                                         fullWidth


//                                                         sx={{
//                                                             width: "300px"
//                                                         }}
//                                                     />
//                                                 )}
//                                                 onChange={(event, newValue) => {
//                                                     handleChange({
//                                                         target: {
//                                                             name: `pack[${ind}]`,
//                                                             value: newValue,
//                                                         },
//                                                     })
//                                                 }}

//                                             />
//                                         </TableCell>
//                                         <TableCell>
//                                             <TextField
//                                                 name={`pack[${ind}].quantite`}
//                                                 size="small"
//                                                 variant="outlined"
//                                                 type="number"
//                                                 fullWidth
//                                                 defaultValue={item?.quantite || ''}
//                                                 onChange={handleChange}
//                                                 sx={{ width: "200px" }}
//                                             />
//                                         </TableCell>
//                                         <TableCell

//                                             className="p-0"
//                                             align="left"
//                                         >
//                                             <TextField
//                                                 name={`pack[${ind}].prix`}
//                                                 size="small"
//                                                 variant="outlined"
//                                                 type="number"
//                                                 fullWidth
//                                                 value={item?.prix || ''}
//                                                 onChange={handleChange}
//                                             />
//                                         </TableCell>
//                                         <TableCell>
//                                             {calculmontant(item).toFixed(2)}
//                                         </TableCell>



//                                         <DeleteIcon onClick={() => arrayHelpers.remove(ind)} sx={{ marginTop: "20px", color: "#FCA13A" }} />
//                                     </TableRow>

//                                 ))}


//                             </TableBody>

//                         </Table>

//                         <button
//                             type="button"
//                             style={{ marginTop: "20px", padding: "15px 20px", background: "#FCA13A", border: "none", color: "#fff", position: "relative", left: "100px" }}
//                         >
//                             Ajouter une réservation
//                         </button>

//                     </div>



//                 )}
//             </FieldArray>

//         </div>
//     );
// }

// export default CustumDetente;



import React, { useState, useEffect } from 'react'
import {
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    TextField,
    Button,
    IconButton,
    Icon,
    Select,
    MenuItem,
} from '@mui/material'
import Autocomplete from '@mui/material/Autocomplete';
import DeleteIcon from '@mui/icons-material/Delete';
import { Formik, Form, Field, FieldArray } from 'formik'
import api from '../../service/api';

const CustumDelete = ({ values, handleChange, setFieldValue, items }) => {
    const [pack, setpack] = useState([]); // State pour stocker les données du tableau

    const getpacks = async () => {
        try {
            const response = await api.getpacks()
            setpack(response.data)
            console.log(response.data)

        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        getpacks();
    }, []);

    const calculmontant = (item) => {
        if (!item?.montant) return item?.prix * item?.quantite || 0
    }

    return (
        <FieldArray name="items">
            {arrayHelpers => (
                <div>
                    <Table>
                        <TableHead sx={{}}>
                            <TableRow sx={{ position: "relative", left: "0px" }} >
                                <TableCell sx={{ width: "200px", fontSize: "18px", color: "#000", }}>Packs</TableCell>
                                <TableCell sx={{ width: "200px", fontSize: "18px", color: "#000", }} >Quantité </TableCell>
                                <TableCell sx={{ fontSize: "18px", color: "#000", }} >Prix</TableCell>
                                <TableCell sx={{ fontSize: "18px", color: "#000", }}>Montant</TableCell>
                                <TableCell ></TableCell>


                            </TableRow>
                        </TableHead>
                        <TableBody>

                            {values?.items?.map((item, ind) => (
                                <TableRow key={ind}>

                                    <TableCell>
                                        <Autocomplete
                                            className="w-full"
                                            size="small"
                                            options={pack}
                                            getOptionLabel={(option) => option.pack}
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    variant="outlined"
                                                    fullWidth


                                                    sx={{
                                                        width: "300px"
                                                    }}
                                                />
                                            )}
                                            onChange={(event, newValue) => {
                                                handleChange({
                                                    target: {
                                                        name: `items[${ind}]`,
                                                        value: newValue,
                                                    },
                                                })
                                            }}

                                        />
                                    </TableCell>
                                    <TableCell>
                                        <TextField
                                            name={`items[${ind}].quantite`}
                                            size="small"
                                            variant="outlined"
                                            type="number"
                                            fullWidth
                                            defaultValue={item?.quantite || ''}
                                            onChange={handleChange}
                                            sx={{ width: "200px" }}
                                        />
                                    </TableCell>
                                    <TableCell

                                        className="p-0"
                                        align="left"
                                    >
                                        <TextField
                                            name={`items[${ind}].prix`}
                                            size="small"
                                            variant="outlined"
                                            type="number"
                                            fullWidth
                                            value={item?.prix || ''}
                                            onChange={handleChange}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        {calculmontant(item).toFixed(2)}
                                    </TableCell>



                                    <DeleteIcon onClick={() => arrayHelpers.remove(ind)} sx={{ marginTop: "20px", color: "#FCA13A" }} />
                                </TableRow>

                            ))}
                        </TableBody>
                    </Table>
                    <Button
                        sx={{
                            marginTop: "20px",
                            padding: "15px 20px", background: "#FCA13A", border: "none", color: "#fff", position: "relative", left: "100px"
                        }}
                        size="small"
                        onClick={() => arrayHelpers.push({})}
                    >
                        + Ajouter une réservation
                    </Button>
                </div>
            )}
        </FieldArray>
    )
}

export default CustumDelete

