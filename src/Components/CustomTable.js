import * as React from "react";
import { DataGrid, GridValueGetterParams } from "@mui/x-data-grid";
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { IconButton } from "@mui/material";
import image from "../images/image1.png"


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
        field: "Logo",
        headerName: "Logo",
        type: "image",
        width: 90,
        flex: 1,
        renderHeader: (params: GridColumnHeaderParams) => {
            return <RenderHeaderComponent {...params} />
        },
        renderCell: (cellValues) => {
            return (

                <Avatar src={cellValues.value} />


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
                onClick={handleClose}
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
                <MenuItem onClick={handleClose} style={{ fontSize: "12px", backgroundColor: "#fff3e4", borderRadius: "10px", color: "#666666", width: "130px", justifyContent: "center", marginLeft: "15px" }}>
                    Deuxième tranche
        </MenuItem>
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
    { id: 'Rafael Sinatra', Structure: 'Senpharma', Address: 'rafaelsinatra@email.com', tel: '(+221) 78 185 60 89', Montant: '250.000', Restant: '100.000', Logo: `https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png`, Payement: "Partiel" },
    { id: 'Murray Simon', Structure: 'FA Keita', Address: 'simon.m@email.com', tel: '(+33) 812 3456 2506', Montant: '250.000', Restant: '100.000', Payement: "Payé" },
    { id: 'Jun Simha', Structure: 'Pharmacia Castor', Address: 'junsimha9@email.com', tel: '(+221) 78 185 60 89', Montant: '250.000', Restant: '100.000', Payement: "Payé" },
    { id: 'Tyson Sam', Structure: 'Gigon', Address: 'sentenz.1@email.com', tel: '(+221) 78 185 60 89', Montant: '250.000', Restant: '100.000', Payement: "Payé" },
    { id: 'Chloe Sue', Structure: 'Pharmacie Leclerc', Address: 'sue.chloe@email.com', tel: '(+221) 78 185 60 89', Montant: '250.000', Restant: '100.000', Payement: "Payé" },
    { id: 'Samuel Romero', Structure: 'Senpharma', Address: 'romerooo.samuel@email.com', tel: '(+221) 78 185 60 89', Montant: '250.000', Restant: '100.000', Payement: "Payé" },
    { id: 'Chloe Sue', Structure: 'Pharmacie Leclerc', Address: 'sue.chloe@email.com', tel: '(+221) 78 185 60 89', Montant: '250.000', Restant: '100.000', Payement: "Payé" },


];


export default function DataGridDemo() {
    return (
        <div style={{ height: 420, width: "100%" }}>
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
