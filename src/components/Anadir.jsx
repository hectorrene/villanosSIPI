import React, { useState } from "react";
import "./Formato.css";

const Anadir = () => {
  const [nombre, setName] = useState("");
  const [nemesis, setNemesis] = useState("");
  const [fecha_creacion, setFecha] = useState("");
  const [poderes, setPoderes] = useState("");
  const [apariencia, setApariencia] = useState("");
  const [identidad_secreta, setIdentidad] = useState("");
  const [origen, setOrigen] = useState("");
  const [universe, setUniverse] = useState("marvel"); 

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh

    // Determine API endpoint based on selected universe
    const endpoint = universe === "marvel" 
      ? "http://localhost:3001/api/villanos/marvel" 
      : "http://localhost:3001/api/villanos/dc";
    const newVillain = { nombre, nemesis, fecha_creacion, poderes, apariencia, identidad_secreta, origen };

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newVillain),
      });

      const data = await response.json().catch(() => null); // Evita errores si no hay JSON en la respuesta
      console.log("Respuesta del servidor:", response.status, data); // Agregar esto para ver qué devuelve el servidor

      if (response.ok) {
        alert("Villain created successfully!");
        setName(""); 
        setNemesis("");
        setFecha("");
        setPoderes("");
        setApariencia("");
        setIdentidad("");
      } else {
        alert("Failed to create villain.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while creating the villain.");
    }
  };

  return (
    <div className="fondo" style={{height: "110%"}}>
        <header>
        </header>

        <div className="form">
        <h2><center> Registrar un nuevo villano </center></h2>
        <form onSubmit={handleSubmit}>
        
        {/* nombre del villano */}
        <div className="mb-3">
            <label className="form-label"> Nombre del villano </label>
                <input
                placeholder="Nombre"
                type="text"
                className="form-control"
                value={nombre}
                onChange={(e) => setName(e.target.value)}
                required
                />
        </div>

        {/* nemesis */}
        <div className="mb-3">
            <label className="form-label"> Nemesis del villano </label>
                <input
                placeholder="Nemesis"
                type="text"
                className="form-control"
                value={nemesis}
                onChange={(e) => setNemesis(e.target.value)}
                required
                />
        </div>

        {/* año de creación */}
        <div className="mb-3">
            <label className="form-label"> Año de creación </label>
                <input
                placeholder="YYYY"
                type="text"
                className="form-control"
                value={fecha_creacion}
                onChange={(e) => setFecha(e.target.value)}
                pattern="^\d{4}$"
                maxLength="4"
                required
                />
        </div>

        {/* poderes */}
        <div className="mb-3">
            <label className="form-label"> Poderes </label>
            <textarea
                placeholder="Poderes"
                className="form-control"
                value={poderes}
                onChange={(e) => setPoderes(e.target.value)}
                required
            ></textarea>
        </div>

        {/* apariencia */}
        <div className="mb-3">
            <label className="form-label"> apariencia del villano </label>
                <input
                placeholder="Apariencia"
                type="text"
                className="form-control"
                value={apariencia}
                onChange={(e) => setApariencia(e.target.value)}
                required
                />
        </div>

        {/* identidad secreta */}
        <div className="mb-3">
            <label className="form-label"> Identidad secreta </label>
                <input
                placeholder="Identidad secreta"
                type="text"
                className="form-control"
                value={identidad_secreta}
                onChange={(e) => setIdentidad(e.target.value)}
                required
                />
        </div>

        {/* Origen */}
        <div className="mb-3">
            <label className="form-label"> Origen </label>
            <textarea
                placeholder="Origen"
                className="form-control"
                value={origen}
                onChange={(e) => setOrigen(e.target.value)}
                required
            ></textarea>
        </div>

        {/* Universe Selection */}
        <div className="mb-3">
            <label className="form-label">Universe</label>
                <select className="form-select" value={universe} onChange={(e) => setUniverse(e.target.value)}>
                    <option value="marvel">Marvel</option>
                    <option value="dc">DC</option>
                </select>
        </div>

        {/* Submit Button */}
        <center><button type="submit" className="btn btn-danger"> Crear villano </button></center>
        </form>
    </div>
    </div>
  );
};

export default Anadir;
