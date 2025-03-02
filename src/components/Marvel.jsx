import React from "react";
import "./Formato.css";
import VillanoPeak from "./VillanoPeak";

const Marvel = () => {
  return (
    <div className="fondo">
      <header>
      </header>
      
      <div className="contenido">
        <h1>Marvel</h1>
        <p>Bienvenido a la sección de Marvel</p>
      </div>
      <VillanoPeak opcion="marvel"/>
    </div>
  );
};

export default Marvel;
