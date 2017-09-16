import { createStore, applyMiddleware } from 'redux'
import {createLogger} from "redux-logger";
import setGradeRowsReducer from './reducers/setGradeRowsReducer'
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

export default createStore(
                setGradeRowsReducer, 
                {}, 
                applyMiddleware(createLogger(), thunk,  promise()));