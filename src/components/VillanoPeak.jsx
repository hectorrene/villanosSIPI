import React, { useEffect, useState } from 'react'
import "./VillanoPeak.css";
import { Link } from 'react-router-dom';


const VillanoPeak = ({opcion}) => {
  const [villanos, setVillanos] = useState([]);
  const [error, setError] = useState(null);
  const url = 'http://localhost:3001';
  useEffect(() => {
    const fetchVillanos = async () => {

      try {
        const response = await fetch(`${url}/api/villanos/${opcion}`);
        if (!response.ok) {
          throw new Error("Error");
        }
        const data = await response.json();
        setVillanos(data);
        console.log(data);
      } catch (e) {
        setError(e.message);
      }
    }
    fetchVillanos();
  },[])
  return (
    
    <div className='flexiImagenes'>
      {villanos.map((villano, index) => (
        <div key={index}>
          <Link to={`/villanos/api/${opcion}/${villano.Nombre.toLowerCase()}`}>
            <div className='imgContainer'>
              <img src={`/${villano.Nombre.toLowerCase().replace(/ /g, '_')}.jpg`} className='imagenes' />
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default VillanoPeak