import {login, registration} from "../../services/Authentication/auth.service";
import {errorActionCreator} from "../errorHandler";

/**
 * Login action creator
 * @param loginInfo
 * @returns {(function(*): Promise<void>)|*}
 */
export const loginAction = loginInfo => async dispatch => {
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

/**
 * Registration action creator
 * @param userInfo
 * @returns {(function(*): Promise<void>)|*}
 */
export const signUpAction = userInfo => async dispatch => {
    // TODO: loader dispatch later for isLoading
    await registration(userInfo)
        .then(response => {
            dispatch({
                type: 'REGISTRATION_SUCCESS',
                payload: response.data
            });
        })
        .catch(error => {
            dispatch( errorActionCreator('REGISTRATION_ERROR', error));
        });
}
