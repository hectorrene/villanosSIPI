import React from "react";
import joker from "../assets/joker.jpg";
import "./Formato.css";

const Ejemplo = () => {
    return (
        <div className="fondo">
            <header>
            </header>

                <img src={joker} alt="joker" className="img" />
                <div className="villanos">
                <p> 
                    "Nombre": "Joker",<br>       
                    </br>"Nemesis": "Batman",<br>            
                    </br>"Fecha_de_Creacion": "1940",<br>           
                    </br>"Poderes": "Genio criminal, manipulación, impredecible",<br>          
                    </br>"Apariencia": "Piel blanca, cabello verde, traje púrpura",<br>         
                    </br>"Identidad_Secreta": "Desconocida",<br>         
                    </br>"Origen": "Gotham City" 
                </p>
            </div>
        </div>
    )
}

export default Ejemplo;