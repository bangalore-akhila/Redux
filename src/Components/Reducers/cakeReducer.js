import { produce } from 'immer';
import { CAKE_ORDERED, CAKE_SELLED } from "../Constants";

const initialState = {
    noOfCakes : 10
}

const CakeReducer = (state = initialState, action) => {
        switch(action.type) {
            case CAKE_ORDERED :
            return {
                ...state,
                noOfCakes : state.noOfCakes + 1
            }

            case CAKE_SELLED : 
            //using immer
            return produce(state, (draft)=>{draft.noOfCakes--;})
           
                /**
                  without using immer
                  return{
                   ...state,
                  address : {
                  ...state.address,
                  street : action.payload}}
            using immer
            return produce(state, (draft)=>{draft.address.street = action.payload})
         */
        
            default : return state

        }
}

export default CakeReducer;