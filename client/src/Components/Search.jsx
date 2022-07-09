import React from 'react';
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import {searchDogs} from '../Store/Actions'
//import React from 'react'


function Search() {
    const [input, setInput]=useState('')
    //console.log(input)
    let dispatch = useDispatch()
    let handleSubmit=(e)=>{
        //console.log(e.target.value)
        e.preventDefault();
        dispatch(searchDogs(input))
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




//export default function Search() {
    
    //     const [input, setInput]=useState('')
    //     let dispatch = useDispatch()
    //     let handleChange=(e)=>{
    //         e.preventDefault();
    //         setInput(e.target.value)
    //     }
    //     let handleSubmit=(e)=>{
    //         e.preventDefault();
    //         dispatch(searchDogs(input))
    //         setInput('')
    //     }
    //   return (
    //     <form onSubmit={handleSubmit}>
    //         <input type='text' value={input} placeholder= 'Raza de Canino...' onChange={handleChange} autocomplete="off"  />
    //         <input type='submit' value= "Buscar" />
    //     </form>
    //   )
  
//}


