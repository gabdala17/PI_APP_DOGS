import { createStore, applyMiddleware, compose} from "redux";
import rootReducer from "../Store/Reducers";
import thunk from "redux-thunk";
// //import {composeWithDevTools} from "redux-devtools-extension"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers( applyMiddleware(thunk)))


// //const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

 export default store