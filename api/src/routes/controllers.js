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
    
       // console.log('aca=>',racePromiseApi.data)
         return racePromiseApi.data
   
  
        
}

let listDogs=async()=>{
 let racePromiseApi=await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
        let filtered=racePromiseApi.data.map(el=>{
            return{
                id:el.id,
                name: el.name,
                temperament:el.temperament,
                image: el.image,
                weight: el.weight
            }
        })
       
        return (filtered) 
   
}

module.exports={searchDogs, listDogs}