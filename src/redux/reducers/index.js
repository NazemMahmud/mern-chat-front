import { combineReducers} from "redux";
import {authUserReducer} from "./usersReducer";

export default combineReducers({
    authUser: authUserReducer,
    // stateName: () => { return [12,2,3]}
});
