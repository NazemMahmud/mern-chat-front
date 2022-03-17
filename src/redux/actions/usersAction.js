import {login} from "../../services/Authentication/auth.service";
import {errorActionCreator} from "../errorHandler";

export const getAuthUser = loginInfo => async dispatch => {
    // TODO: loader dispatch later for isLoading
    await login(loginInfo)
        .then(response => {
            dispatch({
                type: 'LOGIN_SUCCESS',
                payload: response.data
            });
        })
        .catch(error => {
            dispatch( errorActionCreator('LOGIN_ERROR', error));
        });
}
