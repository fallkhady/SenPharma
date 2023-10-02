import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Box from '@mui/material/Box';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { Theme, useTheme } from '@mui/material/styles';
import Notiflix from "notiflix";
import api from "../../service/api";






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
            field: "nom",
            headerName: "Nom ",
            width: 160,
            renderHeader: (params) => {
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
            field: "username",
            headerName: "Username",
            width: 130,
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
            field: "email",
            headerName: "Email ",
            width: 200,
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
            field: "telephone",
            headerName: "Tel",
            width: 150,
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
            field: "statut",
            headerName: "Statut",
            width: 100,
            valueGetter: (params) => {
                const statut = params.row.statut;
                if (statut === "activated") {
                    return statut === "activated" ? "Activé" : statut;
                }
                else {
                    return statut === "deactivated" ? "Désactivé" : statut;
                };

            },

            renderHeader: (params) => {
                return <RenderHeaderComponent {...params} />
            },
            renderCell: (cellValues) => {
                return (
                    <div
                        style={{

                            fontSize: 12,
                            fontWeight: 400,
                            color:
                                ((cellValues.value === 'Activé' && 'green')) ||
                                ((cellValues.value === 'Désactivé' && ' red')),
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
            width: 500,
            flex: 1,
            renderHeader: (params) => {
                return <RenderHeaderComponent {...params} />
            },
            renderCell: (params) => {
                return <RenderCellComponent {...params} />
            }
        },




    ];



    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: "300px",
            },
        },
    };

    const names = [
        "Dashboard",
        "Transaction",
        "Database",
        "Paramètre",

    ];

    function getStyles(name: string, privileges: string[], theme: Theme) {
        return {
            fontWeight:
                privileges.indexOf(name) === -1
                    ? theme.typography.fontWeightRegular
                    : theme.typography.fontWeightMedium,
        };
    }


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
        const [data, setData] = useState()
        const [telephone, setTelephone] = useState('');
        const [nom, setNom] = useState('');
        const [statut, setStatut] = useState('');
        const service = params.row;
        const [password, setPassword] = useState('');
        const [message, setMessage] = useState('');
        const [password_confirmation, setPassword_confirmation] = useState('');



        const handleSubmit = async (e) => {
            e.preventDefault();
            const id = service.id;
            const inputData = {

                telephone: telephone || service.telephone,
                nom: nom || service.nom,
                status: statut || service.statut,
            }
            console.log(inputData)

            try {
                const resp = await api.updateuser(id, inputData);
                console.log(resp.data)
                Notiflix.Loading.standard("Modification en cours...", { svgColor: "#FCA13A" });
                window.location.reload();


            } catch (error) {
                console.log(error)
            }


        }

        const handleSubmitmdp = async (e) => {
            e.preventDefault();
            const id = service.id;
            const inputData = {
                password: password,
                password_confirmation: password_confirmation,
            }

            if (password_confirmation !== password) {
                setMessage("les mots de passe ne sont pas identiques");
                return;
            }

            try {
                const resp = await api.updatepassword(id, inputData);
                // console.log(resp.data)
                Notiflix.Loading.standard("Modification en cours...", { svgColor: "#FCA13A" });
                window.location.reload();


            } catch (error) {
                console.log(error)
            }
        };






        return (

            <div
                style={{
                    fontSize: 12,
                    fontWeight: 400,
                    display: "flex",
                    gridGap: "20px",

                }}
            >
                <button
                    onClick={handleClickOpen}
                    style={{ padding: "10px 30px", background: "#b1e0e9", border: "none", color: "#fff" }}
                >Editer</button>
                <Dialog
                    open={opened}
                    onClose={handleClosed}
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
                    <DialogTitle id="alert-dialog-title" sx={{ fontSize: "14px", textAlign: "center" }}>
                        {"Modifier l'utilisateur"}
                    </DialogTitle>
                    <form onSubmit={handleSubmit}>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                <div style={{ display: "flex", gridGap: "20px", marginTop: "50px" }}>
                                    <div style={{ display: "flex", gridGap: "10px" }}>
                                        <p style={{ fontSize: "12px" }}>Téléphone</p>
                                        <TextField
                                            name="telephone"
                                            onChange={(e) => {
                                                setTelephone(e.target.value)

                                            }}
                                            value={telephone || (service.telephone)}
                                            required
                                            fullWidth
                                            id="telephone"
                                            autoFocus
                                            size="small"
                                            sx={{ backgroundColor: "#FBFBFB" }}
                                        />
                                    </div>
                                    <div style={{ display: "flex", gridGap: "20px", marginLeft: "83px" }}>
                                        <div style={{ display: "flex", gridGap: "10px" }}>
                                            <p style={{ fontSize: "12px" }}>Nom</p>
                                            <TextField
                                                name="nom"
                                                onChange={(e) => {
                                                    setNom(e.target.value)

                                                }}
                                                value={nom || (service.nom)}
                                                required
                                                fullWidth
                                                id="nom"
                                                autoFocus
                                                size="small"
                                                sx={{ backgroundColor: "#FBFBFB" }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div style={{ display: "flex", gridGap: "0px", marginTop: "20px" }}>
                                    <p style={{ fontSize: "12px" }}>Statut</p>
                                    <select
                                        name="statut"
                                        value={statut || (service.statut)}
                                        onChange={(e) => {
                                            setStatut(e.target.value)

                                        }}
                                        id="statut"
                                        style={{ width: "590px", height: "40px", textAlign: "center", marginLeft: "30px", borderColor: "rgba(0, 0, 0, 0.23)", backgroundColor: "#FBFBFB", borderRadius: "5px" }}>
                                        <option value="activated">activated</option>
                                        <option value="deactivated">deactivated</option>

                                    </select>

                                </div>
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions  >
                            <button style={{ padding: "15px 30px", position: "relative", left: "-300px", top: "30px", background: "#FCA13A", border: "none", color: "#fff" }}>Valider</button>
                        </DialogActions>

                    </form>
                </Dialog>


                <button
                    onClick={handleClickopened}
                    style={{ padding: "10px 30px", background: "linear-gradient(83.26deg, #F5841F 17.33%, #FFC380 83.63%)", border: "none", color: "#fff" }}
                >Modifier le mot de passe</button>

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
                    <DialogTitle id="alert-dialog-title" sx={{ fontSize: "14px", textAlign: "center" }}>
                        {"Modifier le mot de passe"}
                    </DialogTitle>
                    <form onSubmit={handleSubmitmdp}>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                <div style={{ display: "flex", gridGap: "20px", marginTop: "50px" }}>
                                    <div style={{ display: "flex", gridGap: "10px" }}>
                                        <p style={{ fontSize: "12px", width: "39%" }}>Mot de passe</p>
                                        <TextField
                                            name="password"
                                            onChange={(e) => {
                                                setPassword(e.target.value)

                                            }}
                                            value={password}
                                            required
                                            type="password"
                                            fullWidth
                                            autoFocus
                                            size="small"
                                            sx={{ backgroundColor: "#FBFBFB", height: "38px" }}
                                        />
                                    </div>
                                    <div style={{ display: "flex", gridGap: "10px" }}>
                                        <p style={{ fontSize: "12px", width: "39%" }}>Confirmer le mot de passe</p>
                                        <TextField
                                            name="password_confirmation"
                                            onChange={(e) => {
                                                setPassword_confirmation(e.target.value)

                                            }}
                                            value={password_confirmation}
                                            required
                                            type="password"
                                            fullWidth
                                            autoFocus
                                            size="small"
                                            sx={{ backgroundColor: "#FBFBFB", height: "38px" }}
                                        />

                                    </div>


                                </div>

                                <span style={{ marginLeft: "150px", color: "red", fontSize: "20px", fontWeight: "600" }}> {message} </span>


                            </DialogContentText>
                        </DialogContent>
                        <DialogActions  >
                            <button style={{ padding: "15px 30px", position: "relative", left: "-300px", top: "30px", background: "#FCA13A", border: "none", color: "#fff" }}>Valider</button>
                        </DialogActions>

                    </form>
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

    const readalluser = async () => {
        try {
            const reponse = await api.readalluser()
            console.log(reponse.data)
            setTableData(reponse.data)
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        readalluser();
    }, []);



    return (
        <div style={{ height: 600, width: "80%" }}>
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
