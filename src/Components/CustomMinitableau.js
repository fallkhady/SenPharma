import * as React from "react";
import { DataGrid, GridValueGetterParams } from "@mui/x-data-grid";
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
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
        headerName: "Nom & prénom",
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
        field: "Username",
        headerName: "Username",
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
        field: "Mdp",
        headerName: "Mdp",
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
                        fontWeight: 400,
                        display: "flex"
                    }}
                >
                    <div className="">
                        {cellValues.value}

                    </div>
                    <div className="action" style={{ marginLeft: "500px", display: "flex", gridGap: "20px" }}>
                        <button>Editer</button>
                        <button>Supprimer</button>
                    </div>

                </div>
            );
        }
    },

]


const RenderHeaderComponent = (params: GridColumnHeaderParams) => {
    return (
        <Box display="flex" sx={{ alignItems: 'center' }}>
            <Box>{params.colDef.headerName}</Box>
            <ArrowDropDownIcon color="inherit" />
        </Box>
    )
};

const rows = [
    { id: 'Jacob Garcia', Username: 'Jgarcia', Mdp: 'GarciaJ1234', tel: '77 xxx xx xx' },
    { id: 'Murray Simon', Username: 'MurrayS', Mdp: 'Murry5062', tel: '77 xxx xx xx' },
    { id: 'Jun Simha', Username: 'Junsim15', Mdp: 'jundinm95', tel: '77 xxx xx xx' },

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
