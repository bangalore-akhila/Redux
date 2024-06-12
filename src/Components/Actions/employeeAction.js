import { EMP_FETCH_REQUEST, EMP_FETCH_SUCESS, EMP_FETCH_FAIL } from "../Constants";
import axios from "axios";


const empDataRequest = () => {
    return {
        type : EMP_FETCH_REQUEST
    }
}

const empDataSucess = (payload) => {
    return {
        type : EMP_FETCH_SUCESS,
        payload
    }
}

const empDataFail = (error) => {
    return {
        type : EMP_FETCH_FAIL,
        payload : error
    }
}

export const fetchEmpDetails = () => {
return function(dispatch) {
    dispatch(empDataRequest());
    axios.get('https://jsonplaceholder.typicode.com/users').then(data => {
        dispatch(empDataSucess(data.data))
    }).catch(error => dispatch(empDataFail(error)))
}
}





