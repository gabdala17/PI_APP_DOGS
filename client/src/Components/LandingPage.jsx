import React from 'react'
import { NavLink } from 'react-router-dom'
import  '../CSS/LandigPage.css'


function LandingPage() {

  return (
   
        <div className='landing' >
            <div id='fondo'>
            <NavLink to={'/home'}>
                <button type="button" className='btn'> Start </button>
            </NavLink>
            </div>
    </div>
    
  )
}

export default LandingPage