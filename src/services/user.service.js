import axios from "../config/axios";

export const getUserListForAuthUser = data => {
    return axios.get('/user/auth-lists');
}

export const registration = (data) => {
    return axios.post('/auth/signup', data);
}
