import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchTemperament } from '../Store/Actions'
import '../CSS/Create.css'
import NavBar from './NavBar'
import {useNavigate } from 'react-router-dom'


function validate(input) {
    
  let errors={}
  const  expresiones  =  {
         name: /^[a-zA-ZÀ-ÿ\s]{ 1,40 }$/, 
          //   /^[a-zA-ZÀ-ÿ\s]{1,40}$/      Letras y espacios, pueden llevar acentos.
         weight: /^\d{1,2}$/,// 1 a 2 numeros.
         life: /^\d{1,2}$/,// 1 a 2 numeros.
         height:  /^\d{2,3}$/  // 2 a 3 numeros.
      }
  
  if( !expresiones.name.test(input.name)){
    console.log('a verrrrr',expresiones.name.test(input.name))
      errors.name= 'El nombre debe contener solo letras y espacios'
  }
  if(input.weightMax <= input.weightMin ){
      errors.weightMax= 'el peso máximo debe ser mayor al peso mínimo' 
  }
  if(!expresiones.weight.test(input.weightMax)){
    console.log('a verrrrr weight',expresiones.weight.test(input.weightMax))
      errors.weightMax = 'debe contener entre 1 y 2 dígitos el peso'
  }
  if(!expresiones.weight.test(input.weightMax)){
      errors.weightMin = 'debe contener entre 1 y 2 dígitos el peso'
  }
  if(input.weightMin <= 1 ){
      errors.weightMin= 'el peso no puede ser menor a 1 kg'
  }
 
  if(input.heightMax <= input.weightMin ){
      errors.heightMax= 'la atura máxima debe ser mayor a la altura mínima' 
  }
  if(!expresiones.height.test(input.heightMax)){
      errors.heightMax = 'debe contener entre 2 y 3 números la altura'
  }
  if(!expresiones.height.test(input.heightMax)){
      errors.heightMin = 'debe contener entre 2 y 3 números la altura'
  }
  if(input.heightMin <=1 ){
      errors.heightMin= 'la atura no puede ser menor a 15 centimetros'
  }
  if(!expresiones.life.test(input.life_spanMax) || input.life_spanMax<1){
      errors.life_spanMax='la esperanza de vida no puede ser menor a un año, y debe contener entre 1 y 2 números'
  }
  if(!expresiones.life.test(input.life_spanMin) || input.life_spanMin<1){
      errors.life_spanMin='la esperanza de vida no puede ser menor a un año, y debe contener entre 1 y 2 números'
  }
  if(input.temperaments===[] && input.temperaments.length===0){
      errors.temperaments= 'debe contener al menos un temperamento'
  }
  return errors;

}


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
    temperaments:[]
  })
  let temperamentEx = useSelector(state=>state.temperament)
  let dispatch = useDispatch()
  let navigate = useNavigate()
  
  useEffect(()=>{
    dispatch(searchTemperament())
  },[dispatch])

  let handleChange=(e)=>{
    e.preventDefault();
    setInput((prev)=>({...prev,[e.target.name]:e.target.value}))
        
  }
  


  let handleSubmit=async (e)=>{
    e.preventDefault();
    let error = await validate(input)
    // console.log('Validate', validate(input))
    // setError(validated)
    console.log('ERROR==>', error)
   // console.log('SETERROR==>', setError)

    if(Object.keys(error).length===0){
      try {
        let add= await axios.post(`http://localhost:3001/dogs`,input)
            
        navigate('/added')

      } catch (error) {

        alert(error.response.data)
      }
    }
    else {
      alert('No se puede añadir la raza, revise todos los campos')
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
    temperaments:[]
    })

  }

  let handleSelect=(e)=> {    
    e.preventDefault();
    if(input.temperaments.length<5){
      if(!input.temperaments.includes(e.target.value) ){
        console.log(e.target.value)
        setSelect(          
          select=[...select, e.target.value]
          )          
          console.log('soy select',select)          
          setInput({
            ...input,
            temperaments: select
          })
        };
      }
      else{
        alert('No se pueden agregar mas temperamentos')
      }
  }
 
  function handleDelete(e){
      //console.log('lo que quiero eliminar=> ', e.target.value)
      setSelect(
        select=select.filter(t=> t!== e.target.value)
        )
      setInput({
        ...input,
            temperaments: select
      })
      
    }


  return (
    <>
    <NavBar/>
    
        <form onSubmit={handleSubmit} className='formulario'>
          <div className='formulario_grupo'>
            <label className='formulario_label'>NOMBRE DE LA RAZA*
            </label>
            <div className='formulario__grupo_input'>
            <input type={'text'}
            name={'name'}
            value={input.name ??""}
            onChange={handleChange} 
            className='formulario_input'
            required
            />
            </div>
              <p > El nombre debe contener solo letras y espacios </p>
        
          </div>
          <div className='formulario_grupo'>
          <label className='formulario_label'>IMAGEN</label>
            <div className='formulario__grupo_input'>
            <input type={'text'}
            name={'image'}
            value={input.image ??""}
            onChange={handleChange} 
            className='formulario_input'
            />
            </div>
            <p className='formulario_input_validacion' > algo que decir
            </p>
          </div>
          <div className='formulario_grupo'>
          <label className='formulario_label'>Peso Mínimo*</label>
          <div className='formulario__grupo_input'>
            <input type={'text'}
            name={'weightMin'}
            value={input.weightMin ??""}
            onChange={handleChange} 
            className='formulario_input'
            required
            />
            </div>
            <p > 
              el peso no puede ser menor a 1 kg
            </p>
            <p>
              debe contener entre 1 y 2 dígitos el peso
            </p>
          </div>
          <div className='formulario_grupo'>
          <label className='formulario_label'>Peso Máximo*</label>
          <div className='formulario__grupo_input'>
            <input type={'text'}
            name={'weightMax'}
            value={input.weightMax ??""}
            onChange={handleChange} 
            className='formulario_input'
            required
            />
            <p > 
                el peso máximo debe ser mayor al peso mínimo 
           </p>
            <p>
                 debe contener entre 1 y 2 dígitos el peso
            </p>
            </div>
          </div>
          <div className='formulario_grupo'>
          <label className='formulario_label'>Altura Minima* (cm)</label>
          <div className='formulario__grupo_input'>
            <input type={'text'}
            name={'heightMin'}
            value={input.heightMin ??""}
            onChange={handleChange} 
            className='formulario_input'
            required
            />
            </div>
            <p > 
            la atura no puede ser menor a 15 centimetros
            </p>
            <p>
            debe contener entre 2 y 3 números la altura
            </p>
          </div>
          <div className='formulario_grupo'>
          <label className='formulario_label'>Altura Máxima*(cm)</label>
          <div className='formulario__grupo_input'>
            <input type={'text'}
            name={'heightMax'}
            value={input.heightMax ??""}
            onChange={handleChange} 
            className='formulario_input'
            required
            />
            </div>
            <p > 
            la atura máxima debe ser mayor a la altura mínima
            </p>
            <p>
            debe contener entre 2 y 3 números la altura
            </p>
          </div>
          <div className='formulario_grupo'>
          <label className='formulario_label'>Esperanza de vida Mínima</label>
          <div className='formulario__grupo_input'>
            <input type={'text'}
            name={'life_spanMin'}
            value={input.life_spanMin ??""}
            onChange={handleChange} 
            className='formulario_input'
            />
            </div>
            <p className='formulario_input_validacion' > 
            la esperanza de vida no puede ser menor a un año, 
            </p>
            <p>
            y debe contener entre 1 y 2 números
            </p>
          </div>
          <div className='formulario_grupo'>
          <label className='formulario_label'>Esperanza de vida Máxima</label>
          <div className='formulario__grupo_input'>
            <input type={'text'}
            name={'life_spanMax'}
            value={input.life_spanMax ??""}
            onChange={handleChange} 
            className='formulario_input'
            />
            </div>
            <p > 
            la esperanza de vida no puede ser menor a un año, 
            </p>
            <p>
            y debe contener entre 1 y 2 números
            </p>
          </div>
          <div className='formulario_grupo'>
          <label className='formulario_label'>Temperamentos*</label>
          <div className='formulario__grupo_input'>
          <select  onChange={e=>handleSelect(e)} name={'temperaments'} className='formulario_input' >
            <option value='selected' hidden className='option'> Temperamentos </option>
            {temperamentEx.map(el=>{
              return (
                <option value={el.name ??""} key={el.id} className='option'>
                  {el.name}            
                </option>
              ) 
            })
            }
          </select>
          </div>
            {select.map(el=>{
                return (
                  <ul className='temp' key={el} >
                    <li className='temp'>
                      <p >{el}</p>
                      <button value ={el} onClick={handleDelete} > Eliminar </button>
                    </li>
                  </ul>
                )
              })
            }
          </div>
          <div>
            <input type={'submit'} value={'AÑADIR'}  className='btn'/>
          </div>
          
        </form>
    </>
   
  )
}

export default Create