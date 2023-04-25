import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Login';
import FinReservation from './partenaires/FinReservation';
import Partenaire from './partenaires/Partenaire';
import Participant from './partenaires/Participant';
import Reservation from './partenaires/Reservation';
import Reserve from './partenaires/Reserve';
import Dashboard from './pages/Dashboard';
import Tableau from './Components/Tableau';
import CustomMinitableau from './Components/CustomMinitableau';
import Transaction from './pages/Transaction';
import Database from './pages/Database';
import Parametre from './pages/Parametre';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Partenaire />} />
          <Route path="/tableau" element={<Tableau />} />
          <Route path="/partenaire/participant" element={<Participant />} />
          <Route path="/partenaire/reserve" element={<Reserve />} />
          <Route path="/partenaire/reservation" element={<Reservation />} />
          <Route path="/partenaire/finreservation" element={<FinReservation />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/database" element={<Database />} />
          <Route path="/parametre" element={<Parametre />} />
          <Route path="/minitableau" element={<CustomMinitableau />} />



        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
