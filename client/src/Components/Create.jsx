import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postDog, searchTemperament } from '../Store/Actions'
import Validate from './Validate'

function Create() {
  let [select, setSelect]= useState([])
  let [input, setInput] = useState({
    name:'', 
    image:'', 
    weightMax:'', 
    weightMin:'', 
    heightMax:'', 
    heightMin:'', 
    life_spanMax:'', 
    life_spanMin:'', 
    temperament:[]
  })
  let [error, setError] =  useState({})
  let temperamentEx = useSelector(state=>state.temperament)
  let dispatch = useDispatch()

  useEffect(()=>{
    dispatch(searchTemperament())
  },[dispatch])


  let handleChange=(e)=>{
    e.preventDefault();
    setInput((prev)=>({...prev,[e.target.name]:e.target.value}))
    setError(Validate(
      e.preventDefault(),
      setInput((prev)=>({...prev,[e.target.name]:e.target.value}))
    ))
  }
  
  let handleSubmit=async (e)=>{
    e.preventDefault();
    if(Object.keys(error).length===0){
      try {
        let add= await axios.post(`http://localhost:3001/dogs`,input)
        console.log(add)
      } catch (error) {
        console.log(error)
      }
    }
    else {
      alert('No se puede añadir la raza, hay algo mal')
    }
    setInput({
      name:'', 
    image:'', 
    weightMax:'', 
    weightMin:'', 
    heightMax:'', 
    heightMin:'', 
    life_spanMax:'', 
    life_spanMin:'', 
    temperament:[]
    })

  }

  let handleSelect=(e)=> {
    
    e.preventDefault();
    if(select.length<5){
      if(!select.includes(e.target.value) ){
        console.log(e.target.value)
        setSelect((prev)=>[...prev,e.target.value])
      };
    }
    else{
      alert('No se pueden agregar mas temperamentos')}
    setInput((prev)=>({...prev,[e.target.name]:select}))
    // setInput(...input,
    //   [input.temperament.concat(select)])
    // const updatedInput = [...input.temperament, select];

    // setInput(updatedInput);

      console.log('soy select',select)
      // //console.log(e.target.value)
      // console.log('soy el name',e.target.name)
      // setInput({
      //   ...input.temperament,
      //  input.temperament.concat([select])

      
   
    //  setInput(...input, input[temperament] = input.temperament.concat(select) )
      // setInput(
      //   // ...input,
      //   // [temperament]= [...input.temperament, e.target.value]
      //   input =>[...input.temperament, ...select]        )
       console.log('Soy input=>',input.temperament)
     

  }
 
  function handleDelete(e){
      setInput(
        (prev)=>({...prev,[e.target.name]:[input.temperament].filter(t=> t!==e)})
        )
    }

    function handleTemperament(){

    }
    // let sel =check.selections
    // let find= sel.indexOf(key)
    // if(find> -1) sel.splice(find,1)
    // else{
    //   sel.push(key)
    // }
    // setCheck({selections:sel})

    
  
     // {multiValue: [...evt.target.input].map(o => o.value)}); 
  

//  const options =temperament.map(el=>{
//   return <option value= {el}> {el} </option>
//    }) 
console.log(temperamentEx)
  return (
    <>
    <div>AÑADIR RAZAS</div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>NOMBRE DE LA RAZA</label>
            <input type={'text'}
            name={'name'}
            value={input.name ??""}
            onChange={handleChange} 
            />
            {
              error.name && (

                <p> {error.name}</p>
              )

            }
          </div>
          <div>
          <label>IMAGEN</label>
            <input type={'text'}
            name={'image'}
            value={input.image ??""}
            onChange={handleChange} 
            />
          </div>
          <div>
          <label>Peso Mínimo</label>
            <input type={'text'}
            name={'weightMin'}
            value={input.weightMin ??""}
            onChange={handleChange} 
            />
            {
              error.weightMin && (

                <p> {error.weightMin}</p>
              )

            }
          </div>
          <div>
          <label>Peso Máximo</label>
            <input type={'text'}
            name={'weightMax'}
            value={input.weightMax ??""}
            onChange={handleChange} 
            />
            {
              error.weightMax && (

                <p> {error.weightMax}</p>
              )

            }
          </div>
          <div>
          <label>Altura Minima</label>
            <input type={'text'}
            name={'heightMin'}
            value={input.heightMin ??""}
            onChange={handleChange} 
            />
            {
              error.heightMin && (

                <p> {error.heightMin}</p>
              )

            }
          </div>
          <div>
          <label>Altura Máxima</label>
            <input type={'text'}
            name={'heightMax'}
            value={input.heightMax ??""}
            onChange={handleChange} 
            />
            {
              error.heightMax && (

                <p> {error.heightMax}</p>
              )

            }
          </div>
          <div>
          <label>Esperanza de vida Mínima</label>
            <input type={'text'}
            name={'life_spanMin'}
            value={input.life_spanMin ??""}
            onChange={handleChange} 
            />
            {
              error.life_spanMin && (

                <p> {error.life_spanMin}</p>
              )

            }
          </div>
          <div>
          <label>Esperanza de vida Máxima</label>
            <input type={'text'}
            name={'life_spanMax'}
            value={input.life_spanMax ??""}
            onChange={handleChange} 
            />
             {
              error.life_spanMax && (

                <p> {error.life_spanMax}</p>
              )

            }
          </div>
          <div>
          <label>Temperamentos</label>
        
          <select  onChange={e=>handleSelect(e)} name={'temperament'} >
            <option value='selected' hidden> Temperamentos</option>
            {temperamentEx.map(el=>{
              return (
                <option value={el.name ??""} key={el.id}>
                  {el.name}            
                </option>
              ) 
            })
            }
          </select>
            {

              select.map(el=>{
                return (
                  <ul key={el}>
                    <li>
                      <p>{el}</p>
                      <button onClick={()=>handleDelete(el)} > Eliminar </button>
                    </li>
                  </ul>
                )
              })
            }
          </div>
          <div>
            <input type={'submit'} value={'AÑADIR'} />
          </div>
          
        </form>
    </>
   
  )
}

export default Create