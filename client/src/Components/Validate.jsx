import React from 'react'

function Validate(input) {
    
    let errors={}
    const  expresiones  =  {
        //     usuario : / ^ [ a-zA-Z0-9_- ] { 4,16 } $ / ,  // Letras, numeros, guion y guion_bajo
            name: / ^ [ a-zA-ZÀ-ÿ \s ] { 1,40 } $ / ,  // Letras y espacios, pueden llevar acentos.
        //     contraseña : / ^ . { 4,12 } $ / ,  // 4 a 12 dígitos.
        //     correo : / ^ [ a-zA-Z0-9_.+- ] + @ [ a-zA-Z0-9- ] + \. [ a-zA-Z0-9-. ] + $ / ,
           weight : / ^ \d { 1,2 } $ /  ,// 1 a 2 numeros.
           life : / ^ \d { 1,2 } $ /  ,// 1 a 2 numeros.
           height : / ^ \d { 2,3 } $ /  // 2 a 3 numeros.
        }
    
    // if( !expresiones.name.test(input.name)){
    //     errors.name= 'El nombre debe contener solo letras y espacios'
    // }
    if(input.weightMax <= input.weightMin ){
        errors.weightMax= 'el peso máximo debe ser mayor al peso mínimo' 
    }
    if(!expresiones.weight.test(input.weightMax)){
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
// const  expresiones  =  {
//     usuario : / ^ [ a-zA-Z0-9_- ] { 4,16 } $ / ,  // Letras, numeros, guion y guion_bajo
//     nombre : / ^ [ a-zA-ZÀ-ÿ \s ] { 1,40 } $ / ,  // Letras y espacios, pueden llevar acentos.
//     contraseña : / ^ . { 4,12 } $ / ,  // 4 a 12 dígitos.
//     correo : / ^ [ a-zA-Z0-9_.+- ] + @ [ a-zA-Z0-9- ] + \. [ a-zA-Z0-9-. ] + $ / ,
//     telefono : / ^ \d { 7,14 } $ /  // 7 a 14 numeros.
// }

export default Validate