import axios from "../../config/axios";
import {login} from "../../services/Authentication/auth.service";

export const getAuthUser = (loginInfo) => async dispatch => {
    // const response = await axios.post('/');
    const response = await login(loginInfo);
    //     .then(response => {
    //         history.push("/");
    //     })
    //     .catch(error => {
    //         snackbarCallBack(error.response.data.message);
    //     });

    dispatch({
        type: 'GET_USER',
        payload: response.data ? response.data : response.message
    });
}
