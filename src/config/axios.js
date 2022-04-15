import axios from 'axios';
import {appConfig} from "./config";
import {getAccessToken} from "../utility/utils";


const instance = axios.create({
   baseURL: appConfig.apiBaseUrl,
   timeout: 1000,
   headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
   }
});

const authInstance = axios.create({
   baseURL: appConfig.apiBaseUrl,
   timeout: 10000,
   headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
   }
})

authInstance.interceptors.request.use(
    config => {
       // ** Get token from localStorage / state
       const accessToken = getAccessToken

       // ** If token is present add it to request's Authorization Header
       if (accessToken) {
          // ** eslint-disable-next-line no-param-reassign
          config.headers.Authorization = `Bearer ${accessToken}`
       }
       return config
    },
    error => Promise.reject(error)
)
export {instance, authInstance};
