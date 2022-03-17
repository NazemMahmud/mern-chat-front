import axios from "../../config/axios";

export const login = data => {
    // TODO: REMINDER: no need to receive id, it will be in token
    return axios.post('/auth/login', data);
}

export const registration = (data) => {
    return axios.post('/auth/signup', data);
}
