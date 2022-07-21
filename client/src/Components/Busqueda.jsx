import React from 'react'
import { useSelector } from 'react-redux'
import Dog from './Dog'
import LoadingSpinner from './Loading'
import NavBar from './NavBar'
import puppiesGif from '../CSS/perro-info-animada-0331.gif'
import puppies from '../CSS/perro-esperando.gif'
import '../CSS/busqueda.css'

function Busqueda() {
    let filteredDogs= useSelector(state=>state.searchDog)
    let isLoading= useSelector(state=>state.loading)
    
    if(filteredDogs.length>0){
        if(filteredDogs[0].message){
            return(
                <>
                <div>
                <NavBar/>
                </div>
                { isLoading?
                    <div> <LoadingSpinner /> </div>:
                <div className='search'>
            <h1 className='resp'>
                {filteredDogs[0].message}
            </h1>
           <img src={puppiesGif} className='search_puppies' />
          </div>
                }
                </>
            )
        }
        else{
            return (
                <>
                <div>
                <NavBar/>
                </div>
                <div className='search'>
                { isLoading?
                    <div> <LoadingSpinner /> </div>:              
                    filteredDogs.map(dog=>{
                        return <Dog
                        key={dog.id}
                        id={dog.id}
                        name={dog.name}
                        image={dog.image}
                        weightMin={dog.weightMin}
                        weightMax= {dog.weightMax} 
                        temperament={dog.temperaments}
                        />
                    })                      
                }
                </div>
                    </>

            )
         }
    }
    else{
        return (
            <>
            <div>
            <NavBar/>
            </div>
            <div className='search'>
            <h1 className='resp'>
                ESCRIBE UNA RAZA O VAMOS A HOME
            </h1>
           <img src={puppies} className='search_puppies' />
          </div>
            </>
            )
    }


}


export default Busqueda
/*
<div className='add'> 
    <h1 className='resp'>
        NO SE ECONTRÓ LA RAZA
    </h1>

    <img src={puppiesGif}/>
    <NavLink to={'/home'}>
    <button >ir a Home</button>
    </NavLink>
</div> */