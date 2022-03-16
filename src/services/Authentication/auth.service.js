import axios from "../../config/axios";

export const login = data => {
    return axios.post('/auth/login', data);
}

export const registration = (data) => {
    return axios.post('/auth/signup', data);
}
