import React from "react";
import AboutMePage from './Apps/Portifolio/Pages/aboutMe.jsx';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navigate replace to="/home" />} />
      <Route path='/home' element={<AboutMePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;