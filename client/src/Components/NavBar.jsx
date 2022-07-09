import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to ={'/home'}> HOME </NavLink>
        </li>
        <li>
          AMOR CANINO
        </li>
        <li>
          <NavLink to={'/create'}>CREATE</NavLink> 
        </li>
        <li>
           <NavLink to={'/about'} >ABOUT</NavLink> 
        </li>
      </ul>
    </div>
  )
}
