import contactReducer from "./reducer";
import {createStore} from "redux";


const store = createStore(contactReducer)
export default store