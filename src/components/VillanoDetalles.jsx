import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import "./VillanoDetalles.css"

const VillanoDetalles = () => {
  
  const { opcion, nombre } = useParams(); //Asi se obtienen los datos de la url quien lo diria
  const [villano, setVillano] = useState(null);
  const [error, setError] = useState(null);
  const url = 'http://localhost:3001';
 
  console.log(opcion, nombre);
  console.log(`${url}/api/villanos/${opcion}/${nombre}`);
  useEffect(() => {
    const fetchVillano = async () => {
      try{
        const response = await fetch(`${url}/api/villanos/${opcion}/${nombre}`);
        if(!response.ok){
          throw new Error("Error al obtener los datos")
        }
        const data = await response.json();
        console.log(data);
        setVillano(data);
      } catch(e){
        setError(e.message);
      }
    };
    fetchVillano();
  }, [])

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!villano) {
    return <div>Cargando...</div>;
  }

  return (
    <div className='container'>
      <div className='imagenes'>
        <img src={`/${villano.Nombre.toLowerCase().replace(/ /g, '_')}.jpg`} className='imagenes' alt={villano.Nombre} />
      </div>
      <h2 className='tituloInsano'>{villano.Nombre}</h2>
      <p className='textoInsano'>Nemesis de {villano.Nombre}: {villano.Nemesis}</p>
      <p className='textoInsano'>Creado en {villano["Fecha de Creación"]}</p>
      <p className='textoInsano'>Poderes: {villano.Poderes}</p>
      <p className='textoInsano'>Apariencia del villano insano: {villano.Apariencia}</p>
      <p className='textoInsano'>Identidad secreta: {villano["Identidad Secreta"]}</p>
      <p className='textoInsano'>Origen del insano: {villano.Origen}</p>
    </div>
  )
}

export default VillanoDetalles