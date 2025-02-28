import React from "react";
import fondo from "./assets/fondo.mp4";


const Main = () => {
  return (
    <div className="main">
      <video src={fondo} autoPlay loop muted />
      <div className="content">
        <h1> WikiVillanos </h1>
        <p> conoce a nuestros villlanos</p>
      </div>
    </div>
  );
}

export default Main; 