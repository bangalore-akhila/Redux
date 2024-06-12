import { EMP_FETCH_SUCESS, EMP_FETCH_REQUEST, EMP_FETCH_FAIL } from "../Constants"

const initialState = {
    empLoading : false,
    empData : [],
    empError : ""
}

export const EmpReducer = (state=initialState, action) => {
switch (action.type) {
    case EMP_FETCH_REQUEST : return {
        ...state, empLoading : true
    }
    case EMP_FETCH_SUCESS : return {
        ...state,
        empLoading : false,
        empData : action.payload
    }
    case EMP_FETCH_FAIL : return {
        ...state,
        empLoading : false,
        empError : action.payload
    } 
    default : return initialState
}
}

