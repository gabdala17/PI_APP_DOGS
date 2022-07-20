// // import {GET_DOGS, SEARCH_DOGS, SORT_NAME, SORT_WEIGHT, SEARCH_TEMPERAMENTS} from '../../Constants/ActionsConst'
import axios from 'axios'
import {SEARCH_DOGS, GET_DOGS, DETAIL_DOG, LOADING_DOG, SEARCH_TEMPERAMENTS, POST_DOG, SORT_NAME, SORT_WEIGHT, FILTER_ORIGIN, FILTER_TEMPER} from '../../Constants/ActionsConst'

export function loadingDog(){
    return ({
        type: LOADING_DOG,
        payload: true
    })
}

export function getDogs(){
    
    return function (dispatch){
        dispatch(loadingDog())
        axios.get('http://localhost:3001/dogs')
        .then(dogs=>{
            dispatch({
                type: GET_DOGS,
                payload: dogs.data
            })
        })
        .catch(error=>{
            console.log(error)
        })
    }
}

export function searchDogs(name){
    return function(dispatch){
        axios.get(`http://localhost:3001/dogs?name=${name}`)
        .then(dog=>{
            dispatch({
                type: SEARCH_DOGS,
                payload: dog.data
            })
        })
        .catch(error=>{
            console.log(error)
        })
    }
}

export function detailDog(id){
    //console.log(typeof id)
    return function(dispatch){
        axios.get(`http://localhost:3001/dogs/${id}`)
        .then(dog=>{
            console.log(dog.data)
            dispatch({
                type:DETAIL_DOG,
                payload: dog.data
            })
        })
        .catch(error=>{
            console.log(error)
        })
    }
}

export let searchTemperament=()=>{
    return  (dispatch)=>{
        axios.get(`http://localhost:3001/temperaments`)
        .then(temp=>{
            dispatch({
                type: SEARCH_TEMPERAMENTS ,
                payload: temp.data
            })
        })
        .catch(error=>{
            console.log(error)
        })

    }
}

export let sortName=(order)=>{
    return{
        type: SORT_NAME,
        payload: order
    }
}
export let sortWeight=(order)=>{
    return{
        type: SORT_WEIGHT,
        payload: order
    }
}

export let filterOrigin=(filter)=>{
    return{
        type: FILTER_ORIGIN,
        payload: filter
    }
}
export let filterTemper=(filter)=>{
    console.log('ACTION TEMPE', filter)
    return{
        type: FILTER_TEMPER,
        payload: filter
        
    }
}
