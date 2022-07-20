import React from 'react'
import { NavLink } from 'react-router-dom';
import '../CSS/dog.css'
function Dog({id, name, image, temperament, weightMin, weightMax, heightMin, heightMax, life_spanMin, life_spanMax}){

    let tempFinally=[]
    console.log('aaaaaaa',temperament)
     if(temperament){
        if(typeof temperament[0] === 'object'){
           
            temperament.forEach(e => {
                tempFinally.push(e.name)
            });
        }
        else{
            
            let temper= String(temperament).split(',')
            tempFinally=tempFinally.concat(temper)
        }
}
    
    // let arr = [...temperament ];
//console.log(temper)
    return(
        
    <div className='card'>
         
        <div className='name'>
            <NavLink to={`/detail/${id}`} style={{textDecoration:'inherit'}}>
                <h3>{name}</h3>
             </NavLink>
        </div>

        <div className='dogImage'>
            <img src={image} alt='imagenPerro' className='img'/>
        </div>
        <div className='weight'>
            <div className='titleWeight'>Peso: </div>
               <div className='numberWeight'>{weightMin} kg - {weightMax} kg </div> 
        </div>
        <div className='temp'>
            <div className='tempTitle'> Temperamentos: </div>
            <div className='nameTempContainer'>
            {
                tempFinally.map(tem=>(
                    <p  className='nameTemp' key={Math.random() * 2.5} > {tem} </p>
                ))
            } 
            </div>
            
        </div>
      
    </div>
    )
}
export default Dog;