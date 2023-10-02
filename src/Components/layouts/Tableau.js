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
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import DeleteIcon from '@mui/icons-material/Delete';
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
    },

    "& .MuiDataGrid-footerContainer": {
      display: "none",
      border: "none"
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
      field: "id",
      headerName: "ID",
      width: 50,
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
      field: "prenom",
      headerName: "Prénom",
      width: 130,
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
      field: "nom",
      headerName: "Nom",
      width: 90,
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

      field: "kits",
      headerName: "Service",
      width: 130,
      valueGetter: (params) => {
        const serviceValue = params.row.kits;
        const service = params.row.nom_service;
        return serviceValue === 'avec kit' || serviceValue === 'sans kit' ? serviceValue : service;
      },
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
    }
    ,

    {
      field: "nom_structure",
      headerName: "Structure",
      width: 160,
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
      field: "adresse",
      headerName: "Adresse ",
      width: 100,
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
      //width: 90,
      minWidth: 50,
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
      field: "prix_service",
      headerName: "Montant",
      width: 90,
      sortable: false,
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
      field: "montant_restant",
      headerName: "Restant",
      //width: 90,
      minWidth: 50,
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
      field: "statut_paiement",
      headerName: "Paiement",
      sortable: false,
      minWidth: 90,
      flex: 2,
      // valueGetter: (params) => {
      //   const restant = params.row.montant_restant;
      //   const statut = params.row.statut_paiement;
      //   if (restant === 0) {
      //     return restant === 0 ? "Payé" : statut;
      //   } else {
      //     return restant !== 0 ? "Partiel" : statut
      //   }

      // },

      renderHeader: (params) => {
        return <RenderHeaderComponent {...params} />
      },

      renderCell: (cellValues) => {
        return (
          <div>
            <p
              style={{
                padding: "10px 20px",


                color:
                  ((cellValues.value === 'Paiement partiel' && '#FCA13A')) ||
                  ((cellValues.value === 'Payée' && ' #11706A')),

                fontSize:
                  ((cellValues.value === 'Paiement partiel' && '10px')) ||
                  ((cellValues.value === 'EN ATTENTE' && ' 10px')),

                backgroundColor:
                  ((cellValues.value === 'Paiement partiel' && '#fff3e4')) ||
                  ((cellValues.value === 'Payée' && ' #e7f1f0')),

              }}
            >  {cellValues.value}</p>
          </div>
        );
      }

    },

    {
      field: "Action",
      headerName: "Action",
      sortable: false,
      disableColumnMenu: true,
      minWidth: 60,
      flex: 1,
      renderHeader: (params) => {
        return <RenderHeaderComponent {...params} />
      },

      renderCell: (params) => {
        if (params.row.montant_restant === 0) {

        } else {
          return <RenderCellComponent {...params} />
        }
      }

    },

    {
      field: "",
      headerName: "",
      sortable: false,
      disableColumnMenu: true,
      minWidth: 60,
      flex: 1,
      renderHeader: (params) => {
        return <RenderHeaderComponent {...params} />
      },

      renderCell: (params) => {
        return <RenderCellsComponent {...params} />
      }

    },
  ];

  const RenderCellsComponent = (params) => {
    const [ouvert, setOuvert] = useState(false);
    const handleOpen = () => {
      setOuvert(true);

    };


    const close = () => {
      setOuvert(false);
    };

    const fermer = () => {
      setOuvert(false);
    };

    const service = params.row;


    const deleteTransaction = async () => {
      const id = service.id;
      try {
        const resp = await api.deletetransaction(id);
        Notiflix.Loading.standard("Suppression en cours...", { svgColor: "#FCA13A" });
        window.location.reload();

      } catch (error) {
        console.log(error)
      }

    };

    return (
      <div >
        <div style={{ marginTop: "8px", color: "#FCA13A" }} onClick={handleOpen}>
          <DeleteIcon />
        </div>
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
            Voulez-vous vraiement supprimer cette transaction ?

          </p>
          <div style={{ display: "flex", gap: "20px", marginLeft: "270px" }}>
            <button onClick={deleteTransaction} style={{ padding: "15px 20px", backgroundColor: "#b1e0e9", border: "none", color: "#fff" }}>Oui</button>
            <button onClick={fermer} style={{ padding: "15px 20px", background: "linear-gradient(83.26deg, #F5841F 17.33%, #FFC380 83.63%)", border: "none", color: "#fff" }}>Annuler</button>
          </div>
        </Dialog>
      </div>
    )

  };


  const RenderCellComponent = (params) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const [opened, setOpen] = React.useState(false);

    const theme = useTheme();

    const handleClickOpen = () => {
      setOpen(true);

    };



    const handleClosed = () => {
      setOpen(false);
    };




    const [data, setData] = useState()
    const [contact, setContact] = useState('')
    const [type_paiement, setType_paiement] = useState('')
    const [date, setDate] = useState('')
    const [montant, setMontant] = useState('')
    const [numero_transaction, setNumero_transaction] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const service = params.row;
    const montant_restant = params.row.montant_restant;




    const handleSubmit = async (e) => {
      e.preventDefault();
      const inputData = {

        contact: contact || (service.prenom + " " + service.nom),
        type_paiement: type_paiement,
        date: date,
        montant: montant,
        numero_transaction: numero_transaction,
        transactionId: service.id


      }
      // console.log(inputData)

      try {
        const resp = await api.createpaiement(inputData);
        // console.log(resp.data)
        Notiflix.Loading.standard("Paiement en cours...", { svgColor: "#FCA13A" });
        window.location.reload();
        handleClosed();


      } catch (error) {
        console.log(error)
      }


    }





    return (
      <div
        style={{
          fontSize: 12,
          fontWeight: 400,
          display: "flex",
          gridGap: "20px",

        }}
      >


        <div >
          <IconButton
            onClick={handleClick}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            style={{ color: "#b1e0e9", fontWeight: "700" }}

          >
            <MoreHorizIcon />
          </IconButton>
        </div>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              width: "160px",
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',


            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >

          <MenuItem onClick={handleClickOpen} style={{ fontSize: "12px", backgroundColor: "#fff3e4", borderRadius: "10px", color: "#666666", width: "130px", justifyContent: "center", marginLeft: "15px" }}>
            nouveau paiement
          </MenuItem>
          <Dialog
            open={opened}
            onClose={handleClosed}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            PaperProps={{
              sx: {
                width: "100%",
                maxWidth: "720px!important",
                height: "70vh"
              }
            }}

          >
            <DialogTitle id="alert-dialog-title" sx={{ fontSize: "14px", textAlign: "center" }}>
              {"PAIEMENT"}
            </DialogTitle>
            <div className="statut_montant" style={{ marginLeft: "20px", fontSize: "12px", display: "flex" }}>
              <p>Montant restant{""}
                <span style={{ marginLeft: "20px", backgroundColor: "#FBFBFB", padding: "20px 50px", fontSize: "40px" }}>{service.montant_restant}</span>
              </p>

            </div>
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
                        value={date}
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
                          value={contact || (service.prenom + " " + service.nom)}
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
                            value={type_paiement}
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
                          value={numero_transaction}
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
                          value={montant}
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
                <button onClose={handleClosed} style={{ padding: "15px 30px", position: "relative", left: "-300px", top: "30px", background: "#FCA13A", border: "none", color: "#fff" }}>Valider</button>
              </DialogActions>

            </form>
          </Dialog>

        </Menu>



      </div >

    );
  };



  const RenderHeaderComponent = (params: GridColumnHeaderParams) => {
    return (
      <Box display="flex" sx={{ alignItems: 'center' }}>
        <Box>{params.colDef.headerName}</Box>
        <ArrowDropDownIcon color="inherit" />
      </Box>
    )
  };

  const getallreservation = async () => {
    try {
      const reponse = await api.getallreservation()
      // console.log(reponse.data)
      const dataTable = reponse.data;
      setTableData(dataTable.slice(-5))
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    getallreservation();
  }, []);



  return (
    <div style={{ height: 318, width: "100%" }}>
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
