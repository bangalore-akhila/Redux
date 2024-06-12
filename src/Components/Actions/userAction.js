import { FETCH_USER_REQUEST, FETCH_USER_SUCESS, FETCH_USER_FAILED} from "../Constants/index";
import axios from 'axios';

const fetchUserReq = () => {
return {
    type : FETCH_USER_REQUEST
}
}

const fetchUserSucess = (payload) => {
    return {
        type : FETCH_USER_SUCESS,
        payload  
    }
    }

const fetchUserFail = (error) => {
        return {
            type : FETCH_USER_FAILED,
            payload : error
        }
        }

export const fetchUser = () => {
    return function(dispatch) {
        dispatch(fetchUserReq())
        axios.get('https://jsonplaceholder.typicode.com/users').then((data) => {
            dispatch(fetchUserSucess(data.data))
        }).catch(error => dispatch(fetchUserFail(error)))
    }
}