import React from 'react'
import { NavLink } from 'react-router-dom';

let Dog=({name, image, temperament, weightMin, weightMax, heightMin, heightMax, life_spanMin, life_spanMax})=>{
    return(
    <div>
        
        {/* <button onClick={onClose}>X</button> */}
        {/* <NavLink to={'/detail'}> */}
        <h3>{name}</h3>
        <img src={image} alt='imagenPerro'/>
        {/* </NavLink> */}
        <h2> Temperamentos: {temperament} </h2>
        {/* <h2> Peso:{weightMin} kg - {weightMax} kg </h2>
        <h2> Altura:{heightMin} cm - {heightMax} cm </h2>
        <h2> Esperanza de Vida: {life_spanMin} años - {life_spanMax} años</h2> */}
    </div>
    )
}
export default Dog;