import {errorReducer} from "../errorHandler";

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
