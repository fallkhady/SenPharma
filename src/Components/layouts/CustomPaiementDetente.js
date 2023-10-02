import React, { useEffect, useState } from "react";
import { DataGrid, GridValueGetterParams } from "@mui/x-data-grid";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { IconButton, Table } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useParams } from "react-router-dom";
import api from "../../service/api";
import Notiflix from "notiflix";




export default function DataGridDemo() {
    const [tableData, setTableData] = useState([])

    const datagridSx = {
        border: "none",

        "& .MuiDataGrid-main": { border: "none" },
        '& div[data-rowIndex][role="row"]:nth-of-type(5n-4)': {
            fontSize: 12,

        },

        "& .MuiDataGrid-columnHeaders": {
            color: "#B5BFC9",
            backgroundColor: "none"
        },

        "& .MuiDataGrid-footerContainer": {
            display: "none",
            border: "none"
        },
        "&.MuiDataGrid-columnHeader--moving": {
            backgroundColor: "none"
        }

    };

    // const handleCellClick = (param, event) => {
    //   console.log(param.row);

    //   if (param.colIndex === 2) {
    //     event.stopPropagation();
    //   }
    // };

    const handleRowClick = (param, event) => {
        console.log(param);
    };

    const columns = [

        {
            field: "contact",
            headerName: "Nom",
            width: 150,
            renderHeader: (params: GridColumnHeaderParams) => {
                return <RenderHeaderComponent {...params} />
            },
            renderCell: (cellValues) => {
                return (
                    <div
                        style={{
                            color: "#000",
                            fontSize: 12,
                            fontWeight: 600
                        }}
                    >
                        {cellValues.value}
                    </div>
                );
            }
        },

        {
            field: "montant",
            headerName: "Montant",
            //width: 90,
            minWidth: 90,
            flex: 1,
            renderHeader: (params: GridColumnHeaderParams) => {
                return <RenderHeaderComponent {...params} />
            },
            renderCell: (cellValues) => {
                return (
                    <div
                        style={{
                            color: "#68727B",
                            fontSize: 12,
                            fontWeight: 400
                        }}
                    >
                        {cellValues.value}
                    </div>
                );
            }
        },


        {
            field: "type_paiement",
            headerName: "Type de paiement ",
            width: 130,
            renderHeader: (params: GridColumnHeaderParams) => {
                return <RenderHeaderComponent {...params} />
            },

            renderCell: (cellValues) => {
                return (
                    <div
                        style={{
                            color: "#68727B",
                            fontSize: 12,
                            fontWeight: 400
                        }}
                    >
                        {cellValues.value}
                    </div>
                );
            }

        },

        {
            field: "date",
            headerName: "Date",
            sortable: false,
            minWidth: 100,
            flex: 1,
            renderHeader: (params: GridColumnHeaderParams) => {
                return <RenderHeaderComponent {...params} />
            },
            renderCell: (cellValues) => {
                return (
                    <div
                        style={{
                            color: "#68727B",
                            fontSize: 12,
                            fontWeight: 400
                        }}
                    >
                        {cellValues.value}
                    </div>
                );
            }
        },

        {
            field: "numero_transaction",
            headerName: "Numero transaction",
            sortable: false,
            width: 150,
            flex: 1,
            renderHeader: (params) => {
                return <RenderHeaderComponent {...params} />
            },

            renderCell: (cellValues) => {
                return (
                    <div
                        style={{
                            color: "#68727B",
                            fontSize: 12,
                            fontWeight: 400
                        }}
                    >
                        {cellValues.value}
                    </div>
                );
            }

        },

        {
            field: "detenteId",
            headerName: "Id  détente",
            width: 100,
            renderHeader: (params: GridColumnHeaderParams) => {
                return <RenderHeaderComponent {...params} />
            },
            renderCell: (cellValues) => {
                return (
                    <div
                        style={{
                            color: "#000",
                            fontSize: 12,
                            fontWeight: 600
                        }}
                    >
                        {cellValues.value}
                    </div>
                );
            }
        },

        {
            field: "Action",
            headerName: "Action",
            sortable: false,
            disableColumnMenu: true,
            minWidth: 220,
            flex: 1,
            renderHeader: (params) => {
                return <RenderHeaderComponent {...params} />
            },

            renderCell: (params) => {
                return <RenderCellComponent {...params} />
            }

        },


    ];



    const RenderCellComponent = (params) => {

        const [anchorEl, setAnchorEl] = React.useState(null);
        const open = Boolean(anchorEl);
        const handleClick = (event) => {
            setAnchorEl(event.currentTarget);
        };
        const handleClose = () => {
            setAnchorEl(null);
        };

        const [opened, setOpen] = useState(false);
        const [ouvert, setOuvert] = useState(false);
        const theme = useTheme();

        const handleClickOpen = () => {
            setOpen(true);

        };


        const handleClickopened = () => {
            setOuvert(true);

        };

        const handleClosed = () => {
            setOpen(false);
        };

        const close = () => {
            setOuvert(false);
        };

        const fermer = () => {
            setOuvert(false);
        };
        const [contact, setContact] = useState('')
        const [type_paiement, setType_paiement] = useState('')
        const [date, setDate] = useState('')
        const [montant, setMontant] = useState('')
        const [numero_transaction, setNumero_transaction] = useState('')
        const service = params.row;
        const montant_restant = params.row.montant_restant;

        const deletepaiementDetente = async () => {
            const id = service.id;
            try {
                const resp = await api.deletepaiementDetente(id);
                Notiflix.Loading.standard("Suppression en cours...", { svgColor: "#FCA13A" });
                window.location.reload();

            } catch (error) {
                console.log(error)
            }

        };


        // const handleSubmit = async (e) => {
        //     e.preventDefault();
        //     const id = service.id;
        //     const inputData = {
        //         contact: contact || (service.contact),
        //         type_paiement: type_paiement || service.type_paiement,
        //         date: date || service.date,
        //         montant: montant || service.montant,
        //         numero_transaction: numero_transaction || service.numero_transaction,
        //     }
        //     console.log(inputData)

        //     try {
        //         const resp = await api.updatepaiment(id, inputData);
        //         console.log(resp.data)
        //         Notiflix.Loading.standard("Modification en cours...", { svgColor: "#FCA13A" });
        //         window.location.reload();


        //     } catch (error) {
        //         console.log(error)
        //     }


        // }

        return (

            <div
                style={{
                    fontSize: 12,
                    fontWeight: 400,
                    display: "flex",
                    gridGap: "20px",

                }}
            >
                {/* <button
                    onClick={handleClickOpen}
                    style={{ padding: "10px 30px", background: "#b1e0e9", border: "none", color: "#fff" }}
                >Modifier</button>
                <Dialog
                    open={opened}
                    onClose={handleClosed}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    PaperProps={{
                        sx: {
                            width: "100%",
                            maxWidth: "720px!important",
                            height: "60vh"
                        }
                    }}

                >
                    <DialogTitle id="alert-dialog-title" sx={{ fontSize: "14px", textAlign: "center" }}>
                        {"Modifier le paiement"}
                    </DialogTitle>
                    <form onSubmit={handleSubmit}>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                <Box sx={{ marginTop: "20px" }}>
                                    <div style={{ display: "flex", marginRight: "35px", marginBottom: "30px" }}>
                                        <p style={{ fontSize: "12px", width: "19%" }} >Date</p>
                                        <TextField

                                            onChange={(e) => {
                                                setDate(e.target.value)

                                            }}
                                            value={date || service.date}
                                            type="date"
                                            name="date"
                                            required
                                            fullWidth
                                            autoFocus
                                            size="small"
                                            sx={{ backgroundColor: "#FBFBFB" }}
                                        />
                                    </div>
                                    <div style={{ display: "flex", gridGap: "20px" }}>
                                        <div style={{ display: "flex", gridGap: "10px" }}>
                                            <p style={{ fontSize: "12px", width: "39%" }}>Nom & Prenom</p>
                                            <TextField
                                                value={contact || (service.contact)}
                                                name="contact"
                                                onChange={(e) => {
                                                    setContact(e.target.value)
                                                }}
                                                required
                                                fullWidth
                                                id="contact"
                                                autoFocus
                                                size="small"
                                                sx={{ backgroundColor: "#FBFBFB" }}
                                            />
                                        </div>
                                        <div style={{ display: "flex", gridGap: "20px" }}>
                                            <p style={{ fontSize: "12px" }}>Type de payement</p>
                                            <FormControl fullWidth style={{ width: "180px" }}>
                                                <Select
                                                    onChange={(e) => {
                                                        setType_paiement(e.target.value)
                                                    }}
                                                    name="type_paiement"
                                                    value={type_paiement || service.type_paiement}
                                                    inputProps={{ 'aria-label': 'Without label', }}
                                                    size="small"
                                                    sx={{ backgroundColor: "#FBFBFB" }}

                                                >
                                                    <MenuItem value="wave">Wave
                                                    </MenuItem>
                                                    <MenuItem value="FreeMoney" >FreeMoney</MenuItem>
                                                    <MenuItem value="Orange money" >Orange money</MenuItem>
                                                    <MenuItem value="Chèque" >Chèque</MenuItem>
                                                    <MenuItem value="virement banquaire" >virement banquaire</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </div>
                                    </div>
                                    <div style={{ display: "flex", gridGap: "20px", marginTop: "30px", marginLeft: "15px" }}>
                                        <div style={{ display: "flex", gridGap: "38px" }}>
                                            <p style={{ fontSize: "12px" }}>Numéro</p>
                                            <TextField
                                                onChange={(e) => {
                                                    setNumero_transaction(e.target.value)
                                                }}
                                                name="numero_transaction"
                                                value={numero_transaction || service.numero_transaction}
                                                required
                                                fullWidth
                                                id="numero_transaction"
                                                autoFocus
                                                size="small"
                                                sx={{ backgroundColor: "#FBFBFB" }}
                                            />
                                        </div>
                                        <div style={{ display: "flex", marginLeft: "30px" }}>
                                            <p style={{ fontSize: "12px", width: "50%" }} >Montant</p>
                                            <TextField
                                                name="montant"
                                                onChange={(e) => {
                                                    if ((e.target.value) <= montant_restant) {
                                                        setMontant(e.target.value)

                                                    } else {
                                                        return "le montant doit inferieur à montant restant"
                                                    }

                                                }}
                                                value={montant || service.montant}
                                                required
                                                fullWidth
                                                id="firstName"
                                                autoFocus
                                                size="small"
                                                sx={{ backgroundColor: "#FBFBFB" }}
                                            />
                                        </div>


                                    </div>


                                </Box>
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions  >
                            <button style={{ padding: "15px 30px", position: "relative", left: "-300px", top: "30px", background: "#FCA13A", border: "none", color: "#fff" }}>Valider</button>
                        </DialogActions>

                    </form>
                </Dialog>
 */}

                <button
                    onClick={handleClickopened}
                    style={{ padding: "10px 30px", background: "linear-gradient(83.26deg, #F5841F 17.33%, #FFC380 83.63%)", border: "none", color: "#fff" }}
                >Supprimer</button>

                <Dialog
                    open={ouvert}
                    onClose={close}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    PaperProps={{
                        sx: {
                            width: "100%",
                            maxWidth: "720px!important",
                            height: "50vh"
                        }
                    }}

                >
                    <p style={{ textAlign: "center", padding: "30px", fontSize: "35px" }}>
                        Voulez-vous vraiement supprimer ce paiement ?

                    </p>
                    <div style={{ display: "flex", gap: "20px", marginLeft: "270px" }}>
                        <button onClick={deletepaiementDetente} style={{ padding: "15px 20px", backgroundColor: "#b1e0e9", border: "none", color: "#fff" }}>Oui</button>
                        <button onClick={fermer} style={{ padding: "15px 20px", background: "linear-gradient(83.26deg, #F5841F 17.33%, #FFC380 83.63%)", border: "none", color: "#fff" }}>Annuler</button>
                    </div>
                </Dialog>


            </div >


        );
    };


    const RenderHeaderComponent = (params) => {
        return (
            <Box display="flex" sx={{ alignItems: 'center' }}>
                <Box>{params.colDef.headerName}</Box>
                <ArrowDropDownIcon color="inherit" />
            </Box>
        )
    };

    const readallpaiementDetente = async () => {
        try {
            const reponse = await api.readallpaiementDetente()
            // console.log(reponse.data)
            setTableData(reponse.data)
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        readallpaiementDetente();
    }, []);



    return (
        <div style={{ height: 600, width: "100%" }}>
            <DataGrid
                //toolBar={<Toolbar sx={{ backgroundColor: "blue" }} />}

                sx={datagridSx}
                rows={tableData}
                columns={columns}
                pageSize={4}
                checkboxSelection
                // onCellClick={handleCellClick}
                onRowClick={handleRowClick}

            />

        </div>
    );
}
