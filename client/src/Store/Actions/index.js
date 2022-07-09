// // import {GET_DOGS, SEARCH_DOGS, SORT_NAME, SORT_WEIGHT, SEARCH_TEMPERAMENTS} from '../../Constants/ActionsConst'
import axios from 'axios'
import {SEARCH_DOGS, GET_DOGS} from '../../Constants/ActionsConst'
export function getDogs(){
    return function (dispatch){
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
//export let searchTemperament=()=>{
//     return  (dispatch)=>{
//         axios.get(`http://localhost:3001/temperaments`)
//         .then(temp=>{
//             dispatch({
//                 type: SEARCH_TEMPERAMENTS,
//                 payload: temp.data
//             })
//         })
//         .catch(error=>{
//             console.log(error)
//         })

//     }
// }
// export let sortName=(order)=>{
//     return{
//         type: SORT_NAME,
//         payload: order
//     }
// }


