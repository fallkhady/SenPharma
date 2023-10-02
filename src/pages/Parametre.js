import React, { useEffect, useState } from "react";
import Navbar from "../Components/navbar/Navbar";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Notiflix from "notiflix";
import api from "../service/api";
import Select from '@mui/material/Select';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import TableauUser from "../Components/layouts/TableauUser"
import "./style.css"







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



const Parametre = () => {




  const [username, setUsername] = useState('');
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPassword_confirmation] = useState('');
  const [role, setRole] = useState('');
  const [message, setMessage] = useState('');
  const [privileges, setPrivileges] = useState([]);



  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      username: username,
      nom: nom,
      email: email,
      telephone: telephone,
      password: password,
      password_confirmation: password_confirmation,
      role: role,
      privileges: privileges


    }

    if (password_confirmation !== password) {
      setMessage("les mots de passe ne sont pas  identiques");
      return;
    }
    console.log(data)

    try {
      const resp = await api.createuser(data);
      console.log(resp.data)
      Notiflix.Loading.standard("Inscription en cours...", { svgColor: "#FCA13A" });
      window.location.reload();


    } catch (error) {
      console.log(error)
    }


  }

  const theme = useTheme();

  const handleChange = (e) => {
    const {
      target: { value },
    } = e;
    setPrivileges(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };


  return (
    <div>
      <Navbar />
      <div
        className="divtitle"
        style={{ color: "#0F0F0F", position: "absolute" }}
      >
        <p>Paramètre</p>
      </div>
      <Box sx={{}}>
        <div
          className="contenu"
          style={{
            backgroundColor: "#fff",
            boxShadow: "5px 5px 5px 5px rgba(0, 0, 0, 0.03)",
            width: "50%",
            position: "relative",
            bottom: "530px",
            left: "370px",
            padding: "10px 100px",
            height: "60vh"
          }}
        >
          <div className="titre" style={{ marginRight: "70px" }}>
            <p>Ajouter un autre compte</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div style={{ display: "flex", gridGap: "20px", marginTop: "50px" }}>
              <div style={{ display: "flex", gridGap: "18px", marginLeft: "-30px" }}>
                <p style={{ fontSize: "12px" }}>Username</p>
                <TextField
                  name="username"
                  onChange={(e) => {
                    setUsername(e.target.value)

                  }}
                  required
                  fullWidth
                  id="username"
                  autoFocus
                  size="small"
                  sx={{ backgroundColor: "#FBFBFB", width: "240px", height: "40px" }}
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
                    required
                    fullWidth
                    id="nom"
                    autoFocus
                    size="small"
                    sx={{ backgroundColor: "#FBFBFB", width: "240px", height: "40px" }}
                  />
                </div>
              </div>
            </div>
            <div style={{ display: "flex", gridGap: "23px", marginTop: "30px" }}>
              <div style={{ display: "flex", gridGap: "10px", marginLeft: "-10px" }}>
                <p style={{ fontSize: "12px" }}>Email</p>
                <TextField
                  name="email"
                  onChange={(e) => {
                    setEmail(e.target.value)

                  }}
                  required
                  fullWidth
                  autoFocus
                  size="small"
                  sx={{ backgroundColor: "#FBFBFB", width: "240px", height: "40px", marginLeft: "20px" }}
                />
              </div>
              <div style={{ display: "flex", gridGap: "20px", marginLeft: "45px" }}>
                <div style={{ display: "flex", gridGap: "10px" }}>
                  <p style={{ fontSize: "12px" }}>Téléphone</p>
                  <TextField
                    name="telephone"
                    onChange={(e) => {
                      setTelephone(e.target.value)

                    }}
                    required
                    fullWidth
                    id="telephone"
                    autoFocus
                    size="small"
                    sx={{ backgroundColor: "#FBFBFB", width: "240px", height: "40px" }}
                  />
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                gridGap: "20px",
                marginTop: "30px",
                marginLeft: "-85px",
              }}
            >
              <div style={{ display: "flex", }}>
                <p style={{ fontSize: "12px", width: "45%" }}>Mot de Passe</p>
                <TextField
                  name="password"
                  type="password"
                  onChange={(e) => {
                    setPassword(e.target.value)

                  }}
                  required
                  fullWidth
                  autoFocus
                  size="small"
                  sx={{ backgroundColor: "#FBFBFB", width: "300px" }}
                />
              </div>
              <div style={{ display: "flex", gridGap: "0px", marginLeft: "-5px" }}>
                <p style={{ fontSize: "12px", width: "39%" }}>Confirmer mdp</p>
                <TextField
                  type="password"
                  onChange={(e) => {
                    setPassword_confirmation(e.target.value)


                  }}
                  name="password_confirmation"
                  required
                  fullWidth
                  id="password_confirmation"
                  autoFocus
                  size="small"
                  sx={{ backgroundColor: "#FBFBFB", width: "270px" }}
                />
              </div>
              <span> {message} </span>
            </div>

            <div style={{ display: "flex", gridGap: "20px", }}>
              <div style={{ display: "flex", gridGap: "20px", marginLeft: "-23px", marginTop: "20px" }}>
                <p style={{ fontSize: "12px" }}>privileges</p>
                <Select
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  multiple
                  value={privileges}
                  onChange={handleChange}
                  input={<OutlinedInput label="Name" />}
                  MenuProps={MenuProps}
                  sx={{ width: "240px", height: "40px", backgroundColor: "#FBFBFB" }}
                >
                  {names.map((name) => (
                    <MenuItem
                      key={name}
                      value={name}
                      style={getStyles(name, privileges, theme)}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </Select>

              </div>
              <div style={{ display: "flex", gridGap: "5px", marginTop: "20px", marginLeft: "70px" }}>
                <p style={{ fontSize: "12px", }}>Rôle</p>
                <select
                  name="role"
                  value={role}
                  onChange={(e) => {
                    setRole(e.target.value)
                    console.log(role)

                  }}
                  id="role"
                  style={{ width: "230px", height: "40px", textAlign: "center", marginLeft: "20px", borderColor: "rgba(0, 0, 0, 0.23)", backgroundColor: "#FBFBFB", borderRadius: "5px" }}>
                  <option value="user">admin</option>

                </select>
              </div>
            </div>

            <button className="btcontenu" style={{ padding: "15px 30px", position: "relative", top: "40px", background: "#FCA13A", border: "none", color: "#fff" }}>Valider</button>
          </form>

        </div>
      </Box>

      <div
        className=""
        style={{
          display: "flex",
          position: "relative",
          bottom: "480px",
          left: "300px",
          gridGap: "800px",
        }}
      >
        <p style={{ fontSize: "20px", color: "#000000", fontWeight: 700 }}>
          Liste des utilisateurs
        </p>
      </div>

      <div
        style={{
          position: "relative",
          bottom: "450px",
          left: "300px",
        }}
      >
        <TableauUser />

      </div>
    </div>
  );
};

export default Parametre;
