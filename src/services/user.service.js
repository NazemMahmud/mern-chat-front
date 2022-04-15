import {authInstance as axios} from "../config/axios";

export const getUserListForAuthUser = async data => {
    return axios.get('/user/auth-lists');
}
