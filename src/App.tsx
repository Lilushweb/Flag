import React from "react";
import "./App.css";
import { HomePageTable } from "./components/HomePageTable";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CountryDetail } from "./components/CountryDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePageTable />} />
        <Route path="/name/:name" element={<CountryDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
