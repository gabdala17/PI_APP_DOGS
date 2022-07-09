import React from 'react'
import Dog from './Dog'
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react'
import { getDogs } from '../Store/Actions'



function Dogs() {
    let dogs= useSelector(state=>state.dogs)
    let loading= useSelector(state =>state.dogs)
    let dispatch= useDispatch()
    useEffect(()=>{
        dispatch(getDogs)
    },[])
    console.log(dogs)
  return (
    <div>
        SOY DOGS
        { 
            dogs.map(dog=>{
               return <Dog
                    key={dog.id}
                   name={dog.name}
                   image={dog.image}
                   temperament={dog.temperament}
                />
            })
        }
    </div>
  )
}

export default Dogs