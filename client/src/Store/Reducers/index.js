import {SEARCH_DOGS, GET_DOGS, DETAIL_DOG, LOADING_DOG, SEARCH_TEMPERAMENTS, POST_DOG} from '../../Constants/ActionsConst'
// // import {ASCENDENTE, DESCENDENTE} from '../../Constants/SortConst'
const initialState={
    dogs:[],
    filteredDog:[],
    detailDog: {},
    temperament: [],
    loading:false
 }

let rootReducer=(state=initialState,action )=>{
    // switch(action.type){
    
    //         default: 
    //         return state
    // }
    switch (action.type) {
        case GET_DOGS:
            return{
                ...state,
                dogs:action.payload,
                filteredDog: action.payload
            }
        case SEARCH_DOGS:
            return{
                ...state,
                dogs:action.payload
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

//         case SORT_NAME:
//             let orderedDogs=[...state.dogs];
//             orderedDogs.sort((a,b)=>{
//                 if(a.name < b.name){return action.payload === ASCENDENTE? -1 : 1};
//                 if(a.name > b.name){return action.payload === DESCENDENTE? -1 : 1};
//                 return 0;
//             })
//             return{
//                 ...state,
//                 orderedDogs:orderedDogs
//             }
    
         default: 
           return state
  }
}
export default rootReducer;