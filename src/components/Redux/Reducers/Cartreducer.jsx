
import { CART_REQUEST } from "../Action/Cart";
import { CART_SUCCESS } from "../Action/Cart";
import { CART_FAILURE } from "../Action/Cart";

const initState = {
    request: false,
    cartData: [],
    error: false,
}


export const Cartreducer = (store=initState, action) => {
    switch(action.type) {
        case CART_REQUEST:
            return {
                ...store,
                request: true,
                cartData: [],
                error: false
            }

            case CART_SUCCESS:
                initState.cartData.push(action.payload)
                return {
                    ...store,
                    request: false,
                    cartData: initState.cartData,
                    error: false
                }

                case CART_FAILURE:
                    return {
                        ...store,
                        request: false,
                        cartData: [],
                        error: true
                    }

                    default: return store;
    }
}