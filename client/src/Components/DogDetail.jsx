import React from 'react'
import { useEffect, useState} from 'react';
import {useParams } from 'react-router-dom'
import axios from 'axios';
import LoadingSpinner from './Loading';
import NavBar from './NavBar';
import '../CSS/detail.css'


function DogDetail() {
    const [dog, setDog]=useState({});
    const [isLoading, setIsLoading] = useState(false);
    const {id}= useParams();

    //console.log(id)
    useEffect(async()=>{
        setIsLoading(true);
        await axios.get(`http://localhost:3001/dogs/${id}`)
        .then(dog=>{
            setDog(dog.data)
            setIsLoading(false);
        })   
        return()=>{
            setDog(null)
        }
    },[])


  return (
    <div>
        {
            isLoading?
            <div> <LoadingSpinner /> </div>:
            <>
                <NavBar/>
            <div className='Detail'>
                <div className='dogImageDetail'>
                <img src={dog.image} alt='imagenPerro' className='imgDetail'/>
                </div>
                <div className='dogDetail'>
                <h3 className='nameDetail'>{dog.name}</h3>
                <h2 className='tempDetail'> Temperamentos:</h2> <p className='detailSmall'>{dog.temperaments}</p> 
                <h2 className='weightDetail'> Peso: </h2><p className='detailSmall'>{dog.weightMin} kg - {dog.weightMax} kg </p>
                <h2 className='heightDetail'> Altura: </h2><p className='detailSmall'> {dog.heightMin} cm - {dog.heightMax} cm </p>
                <h2 className='lifeDetail'> Esperanza de Vida: </h2> <p className='detailSmall'> {dog.life_spanMin} años - {dog.life_spanMax} años </p> 
                </div>
            </div>
            </>
        }
       
        </div>
      )
    }
                                            {/* {
                                    "id": 2,
                                    "name": "Afghan Hound",
                                    "temperament": "Aloof, Clownish, Dignified, Independent, Happy",
                                    "image": "https://cdn2.thedogapi.com/images/hMyT4CDXR.jpg",
                                    "weightMin": "23",
                                    "weightMax": "27",
                                    "heightMin": "64",
                                    "heightMax": "69",
                                    "life_spanMin": "10",
                                    "life_spanMax": "13"
                                } */}
            
            

        
        
        

export default DogDetail