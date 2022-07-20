import React from 'react'
import { NavLink } from 'react-router-dom'
import puppiesGif from '../CSS/perro-info-animada-0331.gif'

function notDog() {
  return (
    <div className='add'> 
    <h1 className='resp'>
        NO SE ECONTRÓ LA RAZA
    </h1>

    <img src={puppiesGif}/>
    <NavLink to={'/home'}>
    <button >ir a Home</button>
    </NavLink>
</div>
  )
}

export default notDog