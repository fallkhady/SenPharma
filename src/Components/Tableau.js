import * as React from "react";
import { DataGrid, GridValueGetterParams } from "@mui/x-data-grid";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { IconButton } from "@mui/material";
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

const handleCellClick = (param, event) => {
  console.log(param);
  console.log(event);
  if (param.colIndex === 2) {
    event.stopPropagation();
  }
};

const handleRowClick = (param, event) => {
  console.log("Row:");
  console.log(param);
  console.log(event);
};

const columns = [
  {
    field: "id",
    headerName: "Nom complet",
    width: 130,
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
    field: "Structure",
    headerName: "Structure",
    width: 160,
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
    field: "Address",
    headerName: "Adresse mail",
    width: 190,
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
    field: "tel",
    headerName: "Tel",
    //width: 90,
    minWidth: 150,
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
    field: "Montant",
    headerName: "Montant",
    width: 130,
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
    field: "Restant",
    headerName: "Restant",
    //width: 90,
    minWidth: 60,
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
    field: "Payement",
    headerName: "Payement",
    sortable: false,
    minWidth: 50,
    flex: 2,
    renderHeader: (params: GridColumnHeaderParams) => {
      return <RenderHeaderComponent {...params} />
    },
    renderCell: (params) => {
      return <RenderCellComponent {...params} />
    }

  }
];


const RenderCellComponent = (cellValues: GridColumnHeaderParams) => {
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

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
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
      <p
        style={{
          padding: "10px 20px",


          color:
            ((cellValues.value === 'Partiel' && '#FCA13A')) ||
            ((cellValues.value === 'Payé' && ' #11706A')),

          backgroundColor:
            ((cellValues.value === 'Partiel' && '#fff3e4')) ||
            ((cellValues.value === 'Payé' && ' #e7f1f0')),

        }}
      >  {cellValues.value}</p>
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
        <MenuItem onClick={handleClickOpen} style={{ fontSize: "12px", backgroundColor: "#fff3e4", borderRadius: "10px", color: "#666666", width: "130px", justifyContent: "center", marginLeft: "15px" }}>
          Deuxième tranche
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
            }
          }}

        >
          <DialogTitle id="alert-dialog-title" sx={{ fontSize: "14px", textAlign: "center" }}>
            {"SUPER ADMIN"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <Box sx={{ marginTop: "20px" }}>
                <div style={{ display: "flex", gridGap: "20px" }}>
                  <div style={{ display: "flex", gridGap: "10px" }}>
                    <p style={{ fontSize: "12px", width: "39%" }}>Nom & Prenom</p>
                    <TextField
                      autoComplete="given-name"
                      name="firstName"
                      required
                      fullWidth
                      id="firstName"
                      autoFocus
                      size="small"
                      sx={{ backgroundColor: "#FBFBFB" }}
                    />
                  </div>
                  <div style={{ display: "flex", gridGap: "20px" }}>
                    <p style={{ fontSize: "12px" }}>Type de payement</p>
                    <FormControl fullWidth style={{ width: "180px" }}>
                      <Select
                        value={age}
                        onChange={handleChange}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label', }}
                        size="small"
                        sx={{ backgroundColor: "#FBFBFB" }}

                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Wave</MenuItem>
                        <MenuItem value={20}>Orange money</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
                <div style={{ display: "flex", gridGap: "20px", marginTop: "30px", marginLeft: "15px" }}>
                  <div style={{ display: "flex", gridGap: "38px" }}>
                    <p style={{ fontSize: "12px" }}>Numéro</p>
                    <TextField
                      autoComplete="given-name"
                      name="firstName"
                      required
                      fullWidth
                      id="firstName"
                      autoFocus
                      size="small"
                      sx={{ backgroundColor: "#FBFBFB" }}
                    />
                  </div>
                  <div style={{ display: "flex", marginLeft: "30px" }}>
                    <p style={{ fontSize: "12px", width: "50%" }} >Montant</p>
                    <TextField
                      autoComplete="given-name"
                      name="firstName"
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
          <DialogActions>
            <Button onClick={handleClosed} style={{ fontSize: "12px", marginRight: "310px", background: "#fff3e4", borderRadius: "2px", color: " #FCA13A", textTransform: "none" }}>Valider</Button>

          </DialogActions>
        </Dialog>

        <MenuItem onClick={handleClose} style={{ fontSize: "12px", backgroundColor: "#e7f1f0", borderRadius: "10px", color: "#666666", width: "130px", justifyContent: "center", marginLeft: "15px", marginTop: "10px" }}>
          Rembourser
        </MenuItem>
      </Menu>
    </div>

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

const rows = [
  { id: 'Rafael Sinatra', Structure: 'Senpharma', Address: 'rafaelsinatra@email.com', tel: '(+221) 78 185 60 89', Montant: '250.000', Restant: '100.000', Payement: "Partiel" },
  { id: 'Murray Simon', Structure: 'FA Keita', Address: 'simon.m@email.com', tel: '(+33) 812 3456 2506', Montant: '250.000', Restant: '100.000', Payement: "Payé" },
  { id: 'Jun Simha', Structure: 'Pharmacia Castor', Address: 'junsimha9@email.com', tel: '(+221) 78 185 60 89', Montant: '250.000', Restant: '100.000', Payement: "Payé" },
  { id: 'Tyson Sam', Structure: 'Gigon', Address: 'sentenz.1@email.com', tel: '(+221) 78 185 60 89', Montant: '250.000', Restant: '100.000', Payement: "Payé" },
  { id: 'Chloe Sue', Structure: 'Pharmacie Leclerc', Address: 'sue.chloe@email.com', tel: '(+221) 78 185 60 89', Montant: '250.000', Restant: '100.000', Payement: "Payé" },


];


export default function DataGridDemo() {
  return (
    <div style={{ height: 318, width: "100%" }}>
      <DataGrid
        //toolBar={<Toolbar sx={{ backgroundColor: "blue" }} />}

        sx={datagridSx}
        rows={rows}
        columns={columns}
        pageSize={4}
        checkboxSelection
        onCellClick={handleCellClick}
        onRowClick={handleRowClick}
      />

    </div>
  );
}
