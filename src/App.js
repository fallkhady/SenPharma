import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Login";
import FinReservation from "./pages/partenaires/FinReservation";
import Partenaire from "./pages/partenaires/Partenaire";
import Detente from "./pages/partenaires/Detente";
import Participant from "./pages/partenaires/Participant";
import Reservation from "./pages/partenaires/Reservation";
import Reserve from "./pages/partenaires/Reserve";
import Dashboard from "./pages/Dashboard";
import Transaction from "./pages/Transaction";
import Database from "./pages/Database";
import Profil from "./pages/Profil";
import Parametre from "./pages/Parametre";
import ForgotPassword from "./pages/ForgotPassword";
import Sponsor from "./pages/partenaires/Sponsor";
import PrivateRoute from "./Untils/PrivateRoute";
import Slide from "./Components/Slider/Slide"
import ReservationSponsor from "./pages/partenaires/ReservationSponsor";
import Paiement from "./pages/Paiement";
import PharmaDetenteList from "./pages/PharmaDetenteList";
import PharmaDetente from "./pages/partenaires/PharmaDetente";
import PaiementDetenteList from "./pages/PaiementDetenteList";

function App() {






  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forgotpassword/:token" element={
            <ForgotPassword />

          } />
          <Route path="/dashboard" element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>

          } />
          <Route path="/transaction" element={
            <PrivateRoute>
              <Transaction />
            </PrivateRoute>

          } />

          <Route path="/paiement" element={
            <PrivateRoute>
              <Paiement />
            </PrivateRoute>

          } />

          <Route path="/paiementdetenteList" element={
            <PrivateRoute>
              <PaiementDetenteList />
            </PrivateRoute>

          } />

          <Route path="/detenteList" element={
            <PrivateRoute>
              <PharmaDetenteList />
            </PrivateRoute>

          } />

          <Route path="/parametre" element={
            <PrivateRoute>
              <Parametre />
            </PrivateRoute>

          } />

          <Route path="/database" element={
            <PrivateRoute>
              <Database />
            </PrivateRoute>

          } />

          <Route path="/profil" element={
            <PrivateRoute>
              <Profil />
            </PrivateRoute>

          } />

          <Route path="/slider" element={<Slide />} />
          <Route path="/partenaire/partenaire" element={<Partenaire />} />
          <Route path="/partenaire/pharmadetente" element={<PharmaDetente />} />
          <Route path="/partenaire/detente" element={<Detente />} />
          <Route path="/partenaire/participant" element={<Participant />} />
          <Route path="/partenaire/reserve" element={<Reserve />} />
          <Route path="/partenaire/reservation/:id" element={<Reservation />} />
          <Route path="/partenaire/reservesponsor/:id" element={<ReservationSponsor />} />
          <Route path="/partenaire/FinReservation" element={<FinReservation />} />
          <Route path="/partenaire/Sponsor" element={<Sponsor />} />
        </Routes>

      </BrowserRouter>
    </div >
  );
}

export default App;
