import {errorReducer} from "../errorHandler";

/**
 * Login reducer: after login set auth user from token
 * @param state
 * @param action
 * @returns {{}|{[p: string]: *}|*}
 */
export const authUserReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      const response = {...errorReducer(state, action)};
      // TODO: access token break and store
      return response.payload
    case 'LOGIN_ERROR':
      return {...errorReducer(state, action)};
    default:
      return state;
  }
};


/**
 * Registration reducer
 * @param state
 * @param action
 * @returns {{}|{[p: string]: *}|*}
 */
export const registrationReducer = (state = {}, action) => {
  switch (action.type) {
    case 'REGISTRATION_SUCCESS':
      const response = {...errorReducer(state, action)}; // TODO: no data send from registration, only success message
      return response.payload
    case 'REGISTRATION_ERROR':
      return {...errorReducer(state, action)};
    default:
      return state;
  }
};
