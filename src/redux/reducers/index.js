import { combineReducers} from "redux";
import {authUserReducer, registrationReducer} from "./authUserReducer";

export default combineReducers({
    authUser: authUserReducer,
    registrationState: registrationReducer,
    // stateName: () => { return [12,2,3]}
});
