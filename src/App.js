import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Resume from './Resume';

const Nav = () => (
  <nav className="nav">
    <NavLink to="/" end>
      Brief
    </NavLink>
    <NavLink to="/detailed">Detailed</NavLink>
    <button type="button" onClick={() => window.print()}>
      Print / Save as PDF
    </button>
  </nav>
);

export default function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/detailed" element={<Resume detailed />} />
        <Route path="/*" element={<Resume />} />
      </Routes>
    </Router>
  );
}
