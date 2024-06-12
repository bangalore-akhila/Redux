import { CAKE_ORDERED, CAKE_SELLED } from "../Constants";

export const cakeOrdered =()=> {
    return {
        type:CAKE_ORDERED,
        
    }
}

export const cakeSelled =()=> {
    return {
        type:CAKE_SELLED,
        
    }
}

