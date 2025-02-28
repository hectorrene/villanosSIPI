import React from "react";
import malvado from "../assets/malvado.mp4";  
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="main">
      <video src={malvado} autoPlay loop muted />
      <div className="content">
        <h1> El rincón del villano </h1>
        <Link to = "/api/villanos/"> conocenos, pilluelo </Link>
      </div>
    </div>
  );
};

export default Main;
