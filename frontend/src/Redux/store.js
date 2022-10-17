import { createStore, combineReducers, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import loadTeachers from "./reducers/Teacher";


const rootReducer = combineReducers({
    loadTeachers: loadTeachers
})

const store = createStore(rootReducer, applyMiddleware(reduxThunk));



export default store; 