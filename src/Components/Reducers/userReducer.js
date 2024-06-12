import { produce } from 'immer';
import { FETCH_USER_REQUEST, FETCH_USER_SUCESS, FETCH_USER_FAILED} from "../Constants/index";

const initialState = {
    usersList : [],
    loading : false,
    error : ""
}

const UserReducer = (state = initialState, action) => {
    switch(action.type) {
        // case FETCH_USER_REQUEST : return {
        //     ...state,
        //     usersList : [],
        //     loading : true,
        //     error : ""
        // };
        case FETCH_USER_REQUEST : return produce(draft => {
            draft.usersList = []
            draft.loading = true
            draft.error = ""
        });
        case FETCH_USER_SUCESS : return {
            ...state,
            usersList : action.payload,
            loading : false,
            error : ""
        };
        case FETCH_USER_FAILED : return {
            ...state,
            usersList : [],
            loading : false,
            error : "Failed to load data"
        };
        default : return state;
    }
}

export default UserReducer;


