import React, { useEffect, useState } from 'react'
import {
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    TextField,
    Button,
    Divider,
    Icon,
    Select,
    MenuItem,
    useStepContext,
} from '@mui/material'
import Autocomplete from '@mui/material/Autocomplete';
import DeleteIcon from '@mui/icons-material/Delete';
import Header from '../../Components/header/Header'
import { Formik, Form, FieldArray } from 'formik'
import api from '../../service/api';

const Detente = () => {
    const [donnees, setDonnees] = useState([]); // State pour stocker les données du tableau
    const [total, setTotal] = useState(0);
    const [data, setData] = useState();
    const [restant, setRestant] = useState(0)


    const getpacks = async () => {
        try {
            const response = await api.getpacks()
            setDonnees(response.data)
            // console.log(response.data)

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
    const calculTotal = (items) => {
        let total = 0;
        items.donnees.forEach((item) => {
            total += calculmontant(item);
            // setTot(total);


        });
        setTotal(total.toFixed(2))
        return total.toFixed(2);
    };



    const handleSubmit = async (values) => {
        console.log(values)
        values.total = total;
        values.restant = total
        try {
            const response = await api.createdetente(values)
            setData(response.data)

        } catch (error) {
            console.log(error)
        }



    }


    return (
        <div className="containe">
            <Header />

            <div style={{ background: "#fff", position: "relative", top: "130px", }}>
                <Formik
                    initialValues={{
                        nom: '',
                        telephone: '',
                        email: '',
                        total: 0,
                        donnees: [
                            {
                                nom_pack: '',
                                quantite: '',
                                prix: '',
                            }
                        ],

                    }}
                    onSubmit={handleSubmit}
                    render={({ values, handleChange, setFieldValue, handleSubmit }) => {
                        // console.log(values);
                        return (
                            <Form onSubmit={handleSubmit}>
                                <p style={{ position: "relative", top: "30px", fontSize: "20px" }}>Réservation Détente</p>
                                <Divider sx={{
                                    marginTop: "50px"
                                }} />

                                <div style={{ position: "relative", top: "100px", left: "410px" }}>
                                    <div style={{ display: "flex", gridGap: "20px", marginLeft: "30px" }}>
                                        <p style={{ fontSize: "12px" }}>Nom</p>
                                        <TextField
                                            name="nom"
                                            value={values.nom}
                                            onChange={handleChange}

                                            required
                                            fullWidth
                                            autoFocus
                                            size="small"
                                            sx={{ width: "520px" }}
                                        />
                                    </div>

                                    <div style={{ display: "flex", gridGap: "20px", marginTop: "30px", }}>
                                        <div style={{ display: "flex", gridGap: "20px" }}>
                                            <p style={{ fontSize: "12px" }}>Téléphone</p>
                                            <TextField
                                                name='telephone'
                                                value={values.telephone}
                                                onChange={handleChange}
                                                required
                                                fullWidth
                                                autoFocus
                                                size="small"
                                                sx={{}}
                                            />
                                        </div>
                                        <div style={{ display: "flex", gridGap: "20px" }}>
                                            <p style={{ fontSize: "12px" }} >Email</p>
                                            <TextField
                                                name="email"
                                                value={values.email}
                                                onChange={handleChange}
                                                required
                                                fullWidth
                                                autoFocus
                                                size="small"
                                                sx={{}}
                                            />
                                        </div>


                                    </div>
                                </div>
                                <Divider sx={{ marginTop: "150px" }} />
                                <FieldArray
                                    name="donnees"
                                    render={arrayHelpers => (

                                        <div style={{ width: "100%" }}>
                                            <Table >
                                                <TableHead sx={{}} >
                                                    <TableRow sx={{}} >
                                                        <TableCell sx={{ fontSize: "18px", color: "#000", }}>Packs</TableCell>
                                                        <TableCell sx={{ fontSize: "18px", color: "#000", }} >Quantité </TableCell>
                                                        <TableCell sx={{ fontSize: "18px", color: "#000", }} >Prix</TableCell>
                                                        <TableCell sx={{ fontSize: "18px", color: "#000", width: "200px" }}>Montant</TableCell>
                                                        <TableCell ></TableCell>


                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>

                                                    {values?.donnees?.map((item, ind) => (
                                                        <TableRow key={ind}>

                                                            <TableCell>
                                                                <Autocomplete
                                                                    className="w-full"
                                                                    size="small"
                                                                    options={donnees}
                                                                    getOptionLabel={(option) => option.pack}
                                                                    renderInput={(params) => (
                                                                        <TextField
                                                                            {...params}
                                                                            variant="outlined"
                                                                            fullWidth


                                                                            sx={{
                                                                                width: "400px"
                                                                            }}
                                                                        />
                                                                    )}
                                                                    onChange={(event, newValue) => {
                                                                        handleChange({
                                                                            target: {
                                                                                name: `donnees[${ind}]`,
                                                                                value: newValue,
                                                                            },
                                                                        })

                                                                    }}

                                                                />
                                                            </TableCell>
                                                            <TableCell>
                                                                <TextField
                                                                    name={`donnees[${ind}].quantite`}
                                                                    size="small"
                                                                    variant="outlined"
                                                                    type="number"
                                                                    fullWidth
                                                                    value={item?.quantite || ''}
                                                                    onChange={handleChange}
                                                                    sx={{ width: "350px" }}
                                                                    inputProps={{
                                                                        min: 1,
                                                                        max: 100,
                                                                        step: 1,
                                                                    }}
                                                                />
                                                            </TableCell>
                                                            <TableCell

                                                                className="p-0"
                                                                align="left"
                                                            >
                                                                <TextField
                                                                    name={`donnees[${ind}].prix`}
                                                                    size="small"
                                                                    variant="outlined"
                                                                    type="number"
                                                                    fullWidth
                                                                    value={item?.prix || ''}
                                                                    onChange={handleChange}
                                                                    inputProps={{
                                                                        min: 1,
                                                                        step: 1,
                                                                    }}
                                                                    sx={{ width: "350px" }}
                                                                />
                                                            </TableCell>
                                                            <TableCell >
                                                                {calculmontant(item).toFixed(2)}
                                                            </TableCell>



                                                            <DeleteIcon onClick={() => arrayHelpers.remove(ind)} sx={{ marginTop: "20px", color: "#FCA13A" }} />
                                                        </TableRow>

                                                    ))}
                                                </TableBody>
                                            </Table>
                                            <div style={{ marginTop: "70px", }}>
                                                <a href
                                                    style={{

                                                        padding: "15px 20px", background: "#FCA13A", border: "none", color: "#fff", position: "relative", right: "500px"
                                                    }}
                                                    size="small"
                                                    onClick={() => arrayHelpers.push({})}
                                                >
                                                    + Ajouter une réservation
                                                </a>
                                            </div>

                                            <div >
                                                <TableCell sx={{ display: "flex", gridGap: "100px", }}>
                                                    <p style={{ marginLeft: "1000px", marginTop: "-100px", fontSize: "20px", fontWeight: "700", }}>Total: </p>
                                                    <h5 className="m-0" style={{ marginTop: "-100px", fontSize: "20px", fontWeight: "700" }}>
                                                        {calculTotal(values)}
                                                    </h5>
                                                </TableCell>
                                            </div>
                                        </div>
                                    )}
                                />

                                <div style={{ marginTop: "20px" }}>
                                    <button
                                        style={{
                                            marginTop: "70px",
                                            padding: "10px 20px", background: "#FCA13A", border: "none", color: "#fff"
                                        }}
                                        type="submit"
                                    >
                                        Envoyer
                                    </button>

                                </div> <br />

                            </Form >
                        )
                    }}
                />
            </div>
        </div>

    )
}

export default Detente

