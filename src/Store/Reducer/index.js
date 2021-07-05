import { combineReducers } from "redux";
import { LoginReducer } from "./LoginReducer";
import {RegisterReducer} from "./RegisterReducer"
const rootReducer=combineReducers({
Login:LoginReducer,
Register:RegisterReducer
})
export default rootReducer;