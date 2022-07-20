import React from 'react'
import { NavLink } from 'react-router-dom'
import Search from './Search'
import '../CSS/navBar.css'


export default function NavBar() {
  return (
    <div className='navBar'>
        <div className='titlePage'>
          <h1>AMOR CANINO</h1>
        </div>
      <ul >
        <li>
          <NavLink to ={'/home'}> HOME </NavLink>
        </li>
        <li>
          <NavLink to={'/create'}>AÑADIR RAZAS</NavLink> 
        </li>
        <li>
           <NavLink to={'/about'} >ABOUT</NavLink> 
        </li>
      </ul>
      <div className='search'>
      <Search />
      </div>
    </div>
  )
}
