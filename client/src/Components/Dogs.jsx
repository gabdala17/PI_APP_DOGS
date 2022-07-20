import React, { useEffect, useState } from 'react'
import Dog from './Dog'
import {useDispatch, useSelector} from 'react-redux'
import { getDogs, searchTemperament } from '../Store/Actions'
import LoadingSpinner from './Loading'
import OrderAlfab from './OrderAlfab'
import OrderWeight from './OrderWeight'
import FilterOrigin from './FilterOrigin'
import FilterTemp from './FilterTemp'
import NavBar from './NavBar'
import '../CSS/dogs.css'
import Pagination from './Pagination'




function Dogs() {
    let dogs= useSelector(state=>state.filteredDog)
    let isLoading= useSelector(state=>state.loading);
    let dispatch= useDispatch()

    const [pageActual,setPageActual]= useState(1)
    const [dogsPerPage]=useState(8);
    //variables paginación
    const end = pageActual * dogsPerPage //corta slice
    const start= end - dogsPerPage // primer slice de 0 a 8
    const puppies= dogs.slice(start, end)
    //función cambia de página
    function page(e, n){
      e.preventDefault()
      setPageActual(n)
    }

    

    useEffect(()=>{
        dispatch(getDogs())
    },[])

    useEffect(()=>{
      dispatch(searchTemperament())
    },[dispatch])

    console.log(dogs[0])

  return (
    <div>
     
       <NavBar/> 
       <div className='orderFilter'>
       <OrderAlfab/> <OrderWeight/> <FilterOrigin/> <FilterTemp/>
       </div>
      <div className='pagination'><Pagination page={page} dogsPerPage ={dogsPerPage}  allDogs={dogs.length}/></div>
     <div className='cardContainer'>
        { isLoading?
            <div> <LoadingSpinner /> </div>:
            puppies.map(dog=>{
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
    </div>
  )
}

export default Dogs