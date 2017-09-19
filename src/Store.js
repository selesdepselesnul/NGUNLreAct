import { createStore, applyMiddleware } from 'redux'
import {createLogger} from "redux-logger";
import {setGradeRowsReducer, setGradeRowsEpic} from './reducers/setGradeRowsReducer'
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import { createEpicMiddleware } from "redux-observable";


const epicMiddleware = createEpicMiddleware(setGradeRowsEpic);
export default createStore(
                setGradeRowsReducer, 
                {}, 
                applyMiddleware(createLogger(), epicMiddleware));