require('dotenv').config();
const express = require('express')
const router = express.Router()
const  {Race, Temperament}= require('../db')
const { Op } = require("sequelize");
const axios = require('axios')
const {
    API_KEY
  } = process.env;
const {searchDogs, listDogs} = require('./controllers');




  
            /*[ ] GET /dogs?name="...":
            Obtener un listado de las razas de perro que contengan la palabra ingresada como query parameter
            Si no existe ninguna raza de perro mostrar un mensaje adecuado*/
            /* GET /dogs:
                Obtener un listado de las razas de perro
                Debe devolver solo los datos necesarios para la ruta principal*/
// router.get('/',(req,res,next)=>{
//     const {name}=req.query
//     try {
//         let puppies
//         if(name){
//         puppies = searchDogs(name)
//         res.status(201).send(puppies)
//         } 
//         else{
//             puppies = listDogs()
//             res.status(201).send(puppies)
//         }
          
//     } catch (error) {
//         next (error)
//     }         
// })
//BIEN HECHO
//     ^
//    ||
router.get('/', async (req, res, next)=>{
    try {
        const {name}= req.query;
    let racePromiseApi;
    
    let racePromiseDB;
    if(name){
        racePromiseApi= await searchDogs(name)
        console.log(racePromiseApi)
        racePromiseDB = await Race.findAll({
                include: Temperament,
                where:{
                    name : name
                }
        })
    }
    else{
        racePromiseApi= await listDogs()
        racePromiseDB = await Race.findAll({
            include: Temperament,
        })
    }
    
        let allDogs=[racePromiseApi.flat(),...racePromiseDB.flat()].flat()
        //const finallyDogs= allDogs.flat()
        if(allDogs.length===0) return res.status(404).send('No existe la raza')
        res.status(201).send(allDogs) 
    } catch (error) {
        next(error)
    }
})
//===================================================================================
router.get('/:idRaza',async (req,res,next)=>{
    const {idRaza}=req.params
   console.log(idRaza)
   let response
     try {
        if(typeof idRaza === 'string' && idRaza.length<8){
            let racePromiseApi = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
            let re=racePromiseApi.data
           // console.log(re)
            let fil = re.filter(el=> el.id === idRaza)
            console.log(fil)
            response = fil.map(el=>{
                return  {id: fil.id,
                    name: fil.name,
                    temperament:fil.temperament,
                    image: fil.image,
                    weight: fil.weight,
                    height: fil.height
                }
                })
        }
        else{
            response= await Race.findByPk(idRaza)
       }
        res.status(201).send(response)
    } catch (error) {
        next(error)  
    }
})
/**/
router.post('/',async(req,res,next)=>{

/*[ ] POST /dogs:
Recibe los datos recolectados desde el formulario controlado de la ruta de creación de raza de perro por body
Crea una raza de perro en la base de datos relacionada con sus temperamentos */
 try {
        const {id, name, image, temperament, weightMax, weightMin, heightMax, heightMin, life_spanMin, life_spanMax} = req.body
        let promiseApi= await searchDogs(name)
        let promiseDB = await listDogs();
        let someDB= promiseDB.some(el=>el.name===name)
        if(!name || !temperament || !weightMax || !weightMin || !heightMax || !heightMin) return res.status(404).send('Faltan datos obligatorios')
        if(someDB || promiseApi.length>0) return res.status(404).send(`La raza ${name} ya existe`)
        const newRace= await Race.create({
            id, 
            name, 
            image, 
            temperament,
            weightMax, 
            weightMin, 
            heightMax, 
            heightMin, 
            life_spanMin, 
            life_spanMax
        })
        res.status(201).send(newRace)
    } catch (error) {
        next (error)
    }
})

//console.log(typeof 453-5463-6754 === 'number')



module.exports= router;
/*
[ ] 

[ ] GET /dogs/{idRaza}:
Obtener el detalle de una raza de perro en particular
Debe traer solo los datos pedidos en la ruta de detalle de raza de perro
Incluir los temperamentos asociados

 */