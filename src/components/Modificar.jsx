import React, { useState } from "react";
import "./Formato.css";
import { useParams, useNavigate } from 'react-router-dom'; 

const Modificar = () => {
    const { opcion, nombre } = useParams();
    const url = 'http://localhost:3001';
    const navigate = useNavigate();

    // Estado inicial vacío para que el usuario ingrese todos los datos
    const [formData, setFormData] = useState({
        Nombre: "",
        Nemesis: "",
        fecha_creacion: "",
        Poderes: "",
        Apariencia: "",
        identidad_secreta: "",
        Origen: "",
    });

    // Manejar cambios en los inputs
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Enviar datos al backend y sobrescribir los anteriores
    const guardar = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${url}/api/villanos/${opcion}/${nombre}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Error al modificar los datos del villano");
            }

            alert("Datos modificados exitosamente");
            navigate(`/villanos/api/${opcion}`, { replace: true });
        } catch (error) {
            console.error("Error:", error);
            alert("Hubo un problema al modificar el villano");
        }
    };

    return (
        <div className="fondo" style={{ height: "110%" }}>
            <header></header>
            <div className="form">
                <h2><center>Modificar los datos de un villano</center></h2>
                <form onSubmit={guardar}>
                    
                    {/* Nombre del villano */}
                    <div className="mb-3">
                        <label className="form-label">Nombre del villano</label>
                        <input
                            name="Nombre"
                            placeholder="Nombre"
                            type="text"
                            className="form-control"
                            value={formData.Nombre}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Némesis */}
                    <div className="mb-3">
                        <label className="form-label">Némesis del villano</label>
                        <input
                            name="Nemesis"
                            placeholder="Némesis"
                            type="text"
                            className="form-control"
                            value={formData.Nemesis}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Año de creación */}
                    <div className="mb-3">
                        <label className="form-label">Año de creación</label>
                        <input
                            name="fecha_creacion"
                            placeholder="YYYY"
                            type="text"
                            className="form-control"
                            value={formData.fecha_creacion}
                            onChange={handleChange}
                            pattern="^\d{4}$"
                            maxLength="4"
                            required
                        />
                    </div>

                    {/* Poderes */}
                    <div className="mb-3">
                        <label className="form-label">Poderes</label>
                        <textarea
                            name="Poderes"
                            placeholder="Poderes"
                            className="form-control"
                            value={formData.Poderes}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>

                    {/* Apariencia */}
                    <div className="mb-3">
                        <label className="form-label">Apariencia del villano</label>
                        <input
                            name="Apariencia"
                            placeholder="Apariencia"
                            type="text"
                            className="form-control"
                            value={formData.Apariencia}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Identidad secreta */}
                    <div className="mb-3">
                        <label className="form-label">Identidad secreta</label>
                        <input
                            name="identidad_secreta"
                            placeholder="Identidad secreta"
                            type="text"
                            className="form-control"
                            value={formData.identidad_secreta}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Origen */}
                    <div className="mb-3">
                        <label className="form-label">Origen</label>
                        <textarea
                            name="Origen"
                            placeholder="Origen"
                            className="form-control"
                            value={formData.Origen}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>

                    {/* Botón de guardar */}
                    <center>
                        <button type="submit" className="btn btn-danger">Guardar cambios</button>
                    </center>
                </form>
            </div>
        </div>
    );
};

export default Modificar;
