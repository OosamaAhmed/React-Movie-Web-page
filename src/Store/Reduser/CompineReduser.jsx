import { combineReducers } from "redux";
import { addfavorite,  } from "./Reduser";


export default combineReducers({
    Rfav: addfavorite,
})