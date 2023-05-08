import React from 'react';
import ReactDOM from "react-dom/client";
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link, NavLink } from 'react-router-dom';
import { StationStatus } from './pages/StationStatus';
import { LandingAndDeparture } from './pages/LandingAndDeparture';
import { Home } from './pages/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>AirPort App</div>
        <div>
        <NavLink to="/Home">Home</NavLink>
        <NavLink to="/StationStatus">Status</NavLink>
        <NavLink to="/LandingAndDeparture">Schedule</NavLink>
        </div>
      </header>
      <main>
      <div>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/StationStatus" element={<StationStatus />} />
          <Route path="/LandingAndDeparture" element={<LandingAndDeparture />} />
        </Routes>
        </div>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
