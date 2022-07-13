import React from 'react'
import Dog from './Dog'
import {useDispatch, useSelector} from 'react-redux'




function Dogs() {
    let dogs= useSelector(state=>state.dogs)
    let loading= useSelector(state =>state.dogs)
    let dispatch= useDispatch()
    // useEffect(()=>{
    //     dispatch(getDogs())
    // },[])
    console.log(dogs)
  return (
    <div>
        
        { 
            dogs.map(dog=>{
               return <Dog
                    key={dog.id}
                    id={dog.id}
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