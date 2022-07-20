import React from 'react'
import { NavLink } from 'react-router-dom'
import '../CSS/AddedSuccessfully.css'
import perroGif from '../CSS/perro-imagen-animada.gif'

function AddedSuccessfully() {
  return (

    <div className='add'> 
        <h1 className='resp'>
            SU RAZA SE AGREGO CORRECTAMENTE 
        </h1>

        <img src={perroGif}/>
        <NavLink to={'/home'}>
          <button className='btn-home'>
             <div className='irHome'>ir a Home</div>
          </button>
        </NavLink>
    </div>
  )
}

export default AddedSuccessfully