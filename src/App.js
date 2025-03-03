import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Main from "./components/Main";  // Import Main component
import Marvel from "./components/Marvel";
import DC from "./components/DC";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer";
import Anadir from "./components/Anadir";
import Ejemplo from "./components/Ejemplo";
import Detalles from "./components/Detalles";
import Modificar from "./components/Modificar";


function App() {
  return (
    <Router>
      <Header />  
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/villanos/api/marvel" element={<Marvel />} />
        <Route path="/villanos/api/dc" element={<DC />} />
        <Route path="/villanos/api/crear" element={<Anadir />} />
        <Route path="/villanos/api/ejemplo" element={<Ejemplo />} />
        <Route path="/villanos/api/:opcion/:nombre" element={<Detalles />} />
        <Route path="/villanos/api/:opcion/:nombre/modificar" element={<Modificar />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
