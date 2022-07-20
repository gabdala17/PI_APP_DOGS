import React from 'react'
import { useEffect, useState} from 'react';
import {useParams } from 'react-router-dom'
import axios from 'axios';
import LoadingSpinner from './Loading';
import NavBar from './NavBar';


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
            <h3>{dog.name}</h3>
            <div className='dog'>
            <img src={dog.image} alt='imagenPerro'/>
            </div>
            <h2> Temperamentos: {dog.temperaments} </h2>
            <h2> Peso: {dog.weightMin} kg - {dog.weightMax} kg </h2>
            <h2> Altura: {dog.heightMin} cm - {dog.heightMax} cm </h2>
            <h2> Esperanza de Vida: {dog.life_spanMin} años - {dog.life_spanMax} años</h2> 
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