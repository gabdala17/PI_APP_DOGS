require('dotenv').config();
const express = require('express')
const router = express.Router()
const  {Race, Temperament}= require('../db')
const { Op } = require("sequelize");
const axios = require('axios')
const {
    API_KEY
  } = process.env;


let searchDogs=async(name)=>{
   
        const racePromiseApi= await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${name}&&?api_key=${API_KEY}`)
        let filtered=racePromiseApi.data.map(el=>{
          console.log(el)
          return{
              id:el.id,
              name: el.name,
              temperament:el.temperament,
              image: `https://cdn2.thedogapi.com/images/${el.reference_image_id}.jpg`,
              weightMin: el.weight.metric.split(' - ')[0],
              weightMax: el.weight.metric.split(' - ')[1],
              heightMin: el.height.metric.split(' - ')[0],
              heightMax: el.height.metric.split(' - ')[1],
              life_spanMin: el.life_span.split(' - ')[0],
              //life_spanMax: el.life_span.split(' - ')[1].split(' ')[0]

          }
      })
     
       // console.log('aca=>',racePromiseApi.data)
         return filtered
   
  
        
}
let dogsId=async(id)=>{
   
  let racePromiseApi= await axios.get(`https://api.thedogapi.com/v1/breeds/${id}/?api_key=${API_KEY}`)
  //console.log(racePromiseApi)
  let el=racePromiseApi.data
     return{
        id:el.id,
        name: el.name,
        temperament:el.temperament,
        image: `https://cdn2.thedogapi.com/images/${el.reference_image_id}.jpg`,
        weightMin: el.weight.metric.split(' - ')[0],
        weightMax: el.weight.metric.split(' - ')[1],
        heightMin: el.height.metric.split(' - ')[0],
        heightMax: el.height.metric.split(' - ')[1],
        life_spanMin: el.life_span.split(' - ')[0],
        life_spanMax: el.life_span.split(' - ')[1].split(' ')[0]
    }
  console.log('aca=>',el)  
}


let listDogs=async()=>{
 let racePromiseApi=await axios.get(`https://api.thedogapi.com/v1/breeds`)

        let filtered=racePromiseApi.data
        let fil=filtered.map(el=>{
          
            return{
                id:el.id,
                name: el.name,
                temperament:el.temperament,
                image: `https://cdn2.thedogapi.com/images/${el.reference_image_id}.jpg`,
                weightMin: el.weight.metric.split(' - ')[0],
                weightMax: el.weight.metric.split(' - ')[1],
                heightMin: el.height.metric.split(' - ')[0],
                heightMax: el.height.metric.split(' - ')[1],
                life_spanMin: el.life_span.split(' - ')[0],
                life_spanMax: el.life_span.split(' - ')[1]
            }
        })
       
        return (fil) 
   
}
let temperamentsFunction=async()=>{
  let racePromiseApi = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
              let re= await racePromiseApi.data
             //console.log(re)
              let response = re.map(el=>{
                        return  el.temperament
                        }).toString().split(',')
                        
             let  response1= response.map(el=>{
                      return el.trim()
                    })
                    //console.log("esto busco AHORA=>",response1)
              let newTemper = [...new Set(response1)]
              let newTemper1= newTemper.filter(el=>el!=="")
        
    //console.log("ME INTERESA AHORA=>",temp)
              return newTemper1
}

let allTemperaments=async ()=>{
  const newTemper=await temperamentsFunction()
  //console.log('Esto trae la response',response)
  
  // console.log("ME INTERESA AHORA=>",newTemper.length)
  const temperamentDB= await Temperament.findAll({
    include: Race
  })
  if(temperamentDB.length<1){
    for (let i = 0; i < newTemper.length; i++) {
      await Temperament.create({
        name:newTemper[i].toLowerCase()
      })
    }
    
  }
  

  return temperamentDB
}

module.exports={searchDogs, listDogs,temperamentsFunction, allTemperaments,dogsId}