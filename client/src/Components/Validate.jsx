import React from 'react'

function Validate(input) {
    let errors={}
    if(!input.name){
        errors.name='La raza debe tener un nombre'
    }
    if(input.name !==  / ^ [ a-zA-ZÀ-ÿ \s ] { 1,40 } $ /){
        errors.name= 'El nombre debe contener solo letras y espacios'
    }
    if(!input.weightMax){
        errors.weightMax='la raza debe contenter un peso máximo apróximado'
    }
    if(!input.weightMin){
        errors.weightMin='la raza debe contenter un peso mínimo apróximado'
    }
    if(input.weightMax <= input.weightMin ){
        errors.weightMax= 'el peso máximo debe ser mayor al peso mínimo' 
    }
    if(input.weightMax!==/ ^ \d { 1,2} $ /){
        errors.weightMax = 'debe contener entre 1 y 2 dígitos el peso'
    }
    if(input.weightMin!==/ ^ \d { 1,2} $ /){
        errors.weightMin = 'debe contener entre 1 y 2 dígitos el peso'
    }
    if(input.weightMin <= 1 ){
        errors.weightMin= 'el peso no puede ser menor a 1 kg'
    }

    if(!input.heightMax){
        errors.heightMax='la raza debe contenter una altura máxima apróximada'
    }
    if(!input.heightMin){
        errors.heightMin='la raza debe contenter un altura mínima apróximada'
    }
    if(input.heightMax <= input.weightMin ){
        errors.heightMax= 'la atura máxima debe ser mayor a la altura mínima' 
    }
    if(input.heightMax!==/ ^ \d { 2,3} $ /){
        errors.heightMax = 'debe contener entre 2 y 3 números la altura'
    }
    if(input.heightMin!==/ ^ \d { 1,2} $ /){
        errors.heightMin = 'debe contener entre 2 y 3 números la altura'
    }
    if(input.heightMin <=1 ){
        errors.heightMin= 'la atura no puede ser menor a 15 centimetros'
    }
    if(input.life_spanMax !==/ ^ \d { 1,2} $ / || input.life_spanMax<1){
        errors.life_spanMax='la esperanza de vida no puede ser menor a un año, y debe contener entre 1 y 2 números'
    }
    if(input.life_spanMin !==/ ^ \d { 1,2} $ / || input.life_spanMin<1){
        errors.life_spanMin='la esperanza de vida no puede ser menor a un año, y debe contener entre 1 y 2 números'
    }
    if(Array.isArray(input.temperament)&& input.temperament.length===0){
        errors.temperament= ' debe contener al menos un temperamento'
    }
    return errors;

}
// const  expresiones  =  {
//     usuario : / ^ [ a-zA-Z0-9_- ] { 4,16 } $ / ,  // Letras, numeros, guion y guion_bajo
//     nombre : / ^ [ a-zA-ZÀ-ÿ \s ] { 1,40 } $ / ,  // Letras y espacios, pueden llevar acentos.
//     contraseña : / ^ . { 4,12 } $ / ,  // 4 a 12 dígitos.
//     correo : / ^ [ a-zA-Z0-9_.+- ] + @ [ a-zA-Z0-9- ] + \. [ a-zA-Z0-9-. ] + $ / ,
//     telefono : / ^ \d { 7,14 } $ /  // 7 a 14 numeros.
// }

export default Validate