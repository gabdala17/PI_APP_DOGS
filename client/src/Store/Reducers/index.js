import {SEARCH_DOGS, GET_DOGS, DETAIL_DOG, LOADING_DOG, SEARCH_TEMPERAMENTS, SORT_NAME, SORT_WEIGHT, FILTER_ORIGIN, FILTER_TEMPER} from '../../Constants/ActionsConst'
import { AÑADIDAS, EXISTENTES, TODAS } from '../../Constants/Filters'
import {ASCENDENTE } from '../../Constants/SortConst'
const initialState={
    dogs:[],
    filteredDog:[],
    detailDog: {},
    temperament: [],
    ordererDogs:[],
    loading:false,
    searchDog:[]
 }

let rootReducer=(state=initialState,action )=>{
    switch (action.type) {
        case GET_DOGS:
            return{
                ...state,
                dogs:action.payload,
                filteredDog: action.payload,
                loading: false
            }
        case SEARCH_DOGS:
            if(!action.data){
            console.log('aca entraaa')
            return{
                ...state,
                searchDog:action.payload,
                loading: false
            }
        }
            else{
                console.log('aca entraaa erroooor')
                return{
                    ...state,
                    searchDog: action.data,
                    loading: false
                }
            }
        case LOADING_DOG:
            return{
                ...state,
                loading: action.payload
            }
        case DETAIL_DOG:
            return{
                ...state,
               // loading: false,
               detailDog: action.payload
            }
        case SEARCH_TEMPERAMENTS:
            return{
                ...state,
                temperament: action.payload
            }

        case SORT_NAME:
            let orderedDogs=[...state.dogs];
            let ordered = orderedDogs.sort((a,b)=>{
                if(a.name < b.name){
                    return action.payload === ASCENDENTE ? -1 : 1;
                };
                if(a.name > b.name){
                    return action.payload === ASCENDENTE? 1 : -1;
                };
                return 0;
            })
            return{
                ...state,
                filteredDog:ordered
            }
            case SORT_WEIGHT:
                let orderedWeight=[...state.dogs];
                let orderedW= orderedWeight.sort((a,b)=>{
                    if(a.weightMin < b.weightMin){
                        return action.payload === ASCENDENTE ? -1 : 1;
                    };
                    if(a.weightMin > b.weightMin){
                        return action.payload === ASCENDENTE? 1 : -1;
                    };
                    return 0;
                })
                return{
                    ...state,
                    filteredDog:orderedW
                }  
            case FILTER_ORIGIN:
                let filterOrigin
                if(action.payload === AÑADIDAS){
                    filterOrigin= state.dogs.filter(el=>String(el.id).length>10)
                }
                if(action.payload === EXISTENTES){
                    filterOrigin= state.dogs.filter(el=>String(el.id).length<10)
                }
                if(action.payload === TODAS){
                    filterOrigin = [...state.dogs]
                }
                return{
                    ...state,
                    filteredDog: filterOrigin
                }
            case FILTER_TEMPER:
                // let x= action.payload.charAt(0).toUpperCase()
                // let payload= x + action.payload.slice(1)
                //console.log('aaaaaa',payload)

                let perros=[...state.dogs];
                let cachorro=[]
                //console.log('action.payload', action.payload)
                perros.forEach(perro=>{
                    //console.log('aca perro.temperament=>', perro.temperament)
                    
                    let temp=String(perro.temperaments)
                   // console.log('aca String(perro.temperament)=>', temp)
                    if(temp.includes(action.payload) /*||temp.includes(action.payload)*/) cachorro.push(perro)
                })
                console.log('cachorro', cachorro)

                return{
                    ...state,
                    filteredDog: cachorro
                }
         default: 
           return state
  }
}
export default rootReducer;