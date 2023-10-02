import DashboardOutlinedIcon from "@mui/icons-material/Dashboard";
import FilterNoneOutlinedIcon from "@mui/icons-material/FilterNoneOutlined";
import AdUnitsIcon from '@mui/icons-material/AdUnits';
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import SettingsIcon from "@mui/icons-material/Settings";
import AlbumIcon from '@mui/icons-material/Album';

export const sidebarLinks = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <DashboardOutlinedIcon sx={{ position: "relative", top: "5px" }} />,
  },
  {
    title: "Transaction",
    path: "/transaction",
    icon: <FilterNoneOutlinedIcon sx={{ position: "relative", top: "5px" }} />,
  },

  {
    title: "Paiement transaction",
    path: "/Paiement",
    icon: <AdUnitsIcon sx={{ position: "relative", top: "5px" }} />,
  },

  {
    title: "Pharma Détente",
    path: "/detenteList",
    icon: <AlbumIcon sx={{ position: "relative", top: "5px" }} />,
  },

  {
    title: "Paiement Pharma détente",
    path: "/paiementdetenteList",
    icon: <AdUnitsIcon sx={{ position: "relative", top: "5px" }} />,
  },

  {
    title: "Database",
    path: "/database",
    icon: <Person2OutlinedIcon sx={{ position: "relative", top: "5px" }} />,
  },
  {
    title: "Paramètre",
    path: "/parametre",
    icon: <SettingsIcon sx={{ position: "relative", top: "5px" }} />,
  },
];
