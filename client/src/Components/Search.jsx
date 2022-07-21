import React from 'react';
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import {searchDogs} from '../Store/Actions'



function Search() {
    const [input, setInput]=useState('')
    //console.log(input)
    let navigate= useNavigate()
    let dispatch = useDispatch()
    let handleSubmit=(e)=>{
      if(input.length<1){
        alert('escriba una raza')
      }
       else{
         e.preventDefault();
         dispatch(searchDogs(input))
         let path='/search'
         navigate(path)
         setInput('')
       }
          
      
    }
    //console.log(handleSubmit(e))
    let handleChange=(e)=>{
        //console.log(e)
        e.preventDefault();
        setInput(e.target.value)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' value={input} placeholder= 'Raza de Canino...' onChange={handleChange}  />
            <input type='submit' value= "Buscar" />
      </form>
    
    </div>
  )
}

export default Search




