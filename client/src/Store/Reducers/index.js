import {SEARCH_DOGS, GET_DOGS} from '../../Constants/ActionsConst'
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