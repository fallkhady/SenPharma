import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


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
        field: "Pays",
        headerName: "Pays",
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

        renderCell: (cellValues) => {
            return (

                <Button style={{ backgroundColor: "#fff3e4", color: "#FCA13A", fontSize: "12px", textTransform: "none" }}>{cellValues.value}</Button>



            );
        }


    }
];





const RenderHeaderComponent = (params: GridColumnHeaderParams) => {
    return (
        <Box display="flex" sx={{ alignItems: 'center' }}>
            <Box>{params.colDef.headerName}</Box>
            <ArrowDropDownIcon color="inherit" />
        </Box>
    )
};

const rows = [
    {
        id: 'Rafael Sinatra', Structure: 'Senpharma', Address: 'rafaelsinatra@email.com', tel: '(+221) 78 185 60 89', Pays: 'Sénégal', Logo: `https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png`, Payement: "Contacter"
    },
    {
        id: 'Murray Simon', Structure: 'FA Keita', Address: 'simon.m@email.com', tel: '(+33) 812 3456 2506', Pays: 'France', Payement: "Contacter"
    },
    {
        id: 'Jun Simha', Structure: 'Pharmacia Castor', Address: 'junsimha9@email.com', tel: '(+221) 78 185 60 89', Pays: 'Sénégal', Payement: "Contacter"
    },
    {
        id: 'Tyson Sam', Structure: 'Gigon', Address: 'sentenz.1@email.com', tel: '(+221) 78 185 60 89', Pays: 'Sénégal', Payement: "Contacter"
    },
    {
        id: 'Chloe Sue', Structure: 'Pharmacie Leclerc', Address: 'sue.chloe@email.com', tel: '(+221) 78 185 60 89', Pays: 'Sénégal', Payement: "Contacter"
    },
    {
        id: 'Samuel Romero', Structure: 'Senpharma', Address: 'romerooo.samuel@email.com', tel: '(+221) 78 185 60 89', Pays: 'Sénégal', Payement: "Contacter"
    },
    { id: 'Chloe Sue', Structure: 'Pharmacie Leclerc', Address: 'sue.chloe@email.com', tel: '(+221) 78 185 60 89', Pays: 'Sénégal', Payement: "Contacter" },


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
