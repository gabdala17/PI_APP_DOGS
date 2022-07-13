import React from 'react'
import { NavLink } from 'react-router-dom';
//import '../CSS'
let Dog=({id, name, image, temperament, weightMin, weightMax, heightMin, heightMax, life_spanMin, life_spanMax})=>{
    return(
    <div>
        
        {/* <button onClick={onClose}>X</button> */}
        <NavLink to={`/detail/${id}`}>
        <h3>{name}</h3>
        <div className='dog'>
        <img src={image} alt='imagenPerro'/>
        </div>
        </NavLink>
        <h2> Temperamentos: {temperament} </h2>
        {/* <h2> Peso:{weightMin} kg - {weightMax} kg </h2>
        <h2> Altura:{heightMin} cm - {heightMax} cm </h2>
        <h2> Esperanza de Vida: {life_spanMin} años - {life_spanMax} años</h2> */}
    </div>
    )
}
export default Dog;