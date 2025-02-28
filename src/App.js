import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Main from "./components/Main";  // Import Main component
import Villanos from "./components/Villanos";
import Marvel from "./components/Marvel";
import DC from "./components/DC";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <Header />  
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/villanos/api" element={<Villanos />} />
        <Route path="/villanos/api/marvel" element={<Marvel />} />
        <Route path="/villanos/api/dc" element={<DC />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
