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
import { Update } from "@mui/icons-material";




// const rows = [
//   { id: 'Rafael Sinatra', Structure: 'Senpharma', Address: 'rafaelsinatra@email.com', tel: '(+221) 78 185 60 89', Montant: '250.000', Restant: '100.000', Payement: "Partiel" },
//   { id: 'Murray Simon', Structure: 'FA Keita', Address: 'simon.m@email.com', tel: '(+33) 812 3456 2506', Montant: '250.000', Restant: '100.000', Payement: "Payé" },
//   { id: 'Jun Simha', Structure: 'Pharmacia Castor', Address: 'junsimha9@email.com', tel: '(+221) 78 185 60 89', Montant: '250.000', Restant: '100.000', Payement: "Payé" },
//   { id: 'Tyson Sam', Structure: 'Gigon', Address: 'sentenz.1@email.com', tel: '(+221) 78 185 60 89', Montant: '250.000', Restant: '100.000', Payement: "Payé" },
//   { id: 'Chloe Sue', Structure: 'Pharmacie Leclerc', Address: 'sue.chloe@email.com', tel: '(+221) 78 185 60 89', Montant: '250.000', Restant: '100.000', Payement: "Payé" },


// ];


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
      field: "nom_structure",
      headerName: "Structure",
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
      field: "email",
      headerName: "Adresse Email ",
      width: 180,
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
      field: "telephone",
      headerName: "Tel",
      //width: 90,
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
      field: "pays",
      headerName: "Pays",
      sortable: false,
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
      field: "adresse",
      headerName: "Adresse",
      //width: 90,
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
      field: "region",
      headerName: "Région",
      sortable: false,
      minWidth: 90,
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
      field: "ville",
      headerName: "Ville",
      sortable: false,
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
      field: "logo",
      headerName: "Logo",
      sortable: false,
      minWidth: 235,
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



    // const Update = async (e) => {
    //   e.preventDefault();
    //   const id = service.id

    //   const inputData = {

    //     contact: contact,
    //     type_paiement: type_paiement,
    //     date: date,
    //     montant: montant,
    //     numero_transaction: numero_transaction,


    //   }
    //   try {
    //     const response = await api.updatepaiementid(id, inputData)
    //     if (response) {
    //       setData(response.data);
    //       // console.log(response.data)

    //     }
    //   } catch (error) {
    //     console.log(error)
    //   }

    // }







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
      console.log(inputData)

      try {
        const resp = await api.createpaiement(inputData);
        console.log(resp.data)


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

        <IconButton
          onClick={handleClick}
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          style={{ color: "#1B2126" }}

        >
          <MoreHorizIcon />
        </IconButton>

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
          <MenuItem onClick={
            handleClickOpen} style={{ fontSize: "12px", backgroundColor: "#fff3e4", borderRadius: "10px", color: "#666666", width: "130px", justifyContent: "center", marginLeft: "15px" }}>
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
                <span style={{ marginLeft: "20px", backgroundColor: "#FBFBFB", padding: "15px 50px" }}>{service.montant_restant}</span>
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
                            setMontant(e.target.value)
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
                <button onClick={Update} style={{ padding: "15px 30px", position: "relative", left: "-300px", top: "30px", background: "#FCA13A", border: "none", color: "#fff" }}>Valider</button>
              </DialogActions>

            </form>
          </Dialog>


          <MenuItem onClick={handleClose} style={{ fontSize: "12px", backgroundColor: "#e7f1f0", borderRadius: "10px", color: "#666666", width: "130px", justifyContent: "center", marginLeft: "15px", marginTop: "10px" }}>
            Rembourser
          </MenuItem>
        </Menu>
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

  const getallstructure = async () => {
    try {
      const reponse = await api.getstructure()
      console.log(reponse.data)
      setTableData(reponse.data)
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    getallstructure();
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
