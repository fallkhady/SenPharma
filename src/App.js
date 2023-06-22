import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Login";
import FinReservation from "./pages/partenaires/FinReservation";
import Partenaire from "./pages/partenaires/Partenaire";
import Participant from "./pages/partenaires/Participant";
import Reservation from "./pages/partenaires/Reservation";
import Reserve from "./pages/partenaires/Reserve";
import Dashboard from "./pages/Dashboard";
import Tableau from "./Components/Tableau";
import Transaction from "./pages/Transaction";
import Database from "./pages/Database";
import Parametre from "./pages/Parametre";
import Sidebar from "./Components/sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Partenaire />} />
          <Route path="/partenaire/participant" element={<Participant />} />
          <Route path="/partenaire/reserve" element={<Reserve />} />
          <Route path="/partenaire/reservation" element={<Reservation />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sidebar" element={<Sidebar />} />

          <Route path="/tableau" element={<Tableau />} />
          <Route
            path="/partenaire/FinReservation"
            element={<FinReservation />}
          />

          <Route path="/transaction" element={<Transaction />} />
          <Route path="/database" element={<Database />} />
          <Route path="/parametre" element={<Parametre />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
