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
          return{
              id:el.id,
              name: el.name,
              temperament:el.temperament,
              image: el.image,
              weight: el.weight.metric,

          }
      })
     
       // console.log('aca=>',racePromiseApi.data)
         return filtered
   
  
        
}

let listDogs=async()=>{
 let racePromiseApi=await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
        let filtered=racePromiseApi.data.map(el=>{
            return{
                id:el.id,
                name: el.name,
                temperament:el.temperament,
                image: el.image,
                weight: el.weight.metric
            }
        })
       
        return (filtered) 
   
}
let temperamentsFunction=async()=>{
  let racePromiseApi = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
              let re= await racePromiseApi.data
             // console.log(re)
              let response = re.map(el=>{
                        return  el.temperament
                        }).toString().split(',')
              let newTemper = [...new Set(response)]
        //console.log("esto busco AHORA=>",response)
    //console.log("ME INTERESA AHORA=>",temp)
              return newTemper
}

let allTemperaments=async ()=>{
  const newTemper=await temperamentsFunction()
  //console.log('Esto trae la response',response)
  
   // console.log("ME INTERESA AHORA=>",newTemper)
  const temperamentDB= await Temperament.findAll({
    include: Race
  })
  if(temperamentDB.length<1){
    for (let i = 0; i < newTemper.length; i++) {
      await Temperament.create({
        name:newTemper[i].trim().toLowerCase()
      })
    }
    return Temperament.findAll()
  }
  const apiTemper= newTemper.map(el=>el.trim())
  return apiTemper
}

module.exports={searchDogs, listDogs,temperamentsFunction, allTemperaments}