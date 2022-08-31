
import { PRODUCTDETAILS_FAILURE } from "../Action/Productdetails";
import { PRODUCTDETAILS_SUCCESS } from "../Action/Productdetails";
import { PRODUCTDETAILS_REQUEST } from "../Action/Productdetails";

const initState = {
    request: false,
    productDetails: {},
    failed: false
}

export const ProductDetailsreducer = (store = initState, action) => {
    switch(action.type) {
        case PRODUCTDETAILS_REQUEST:
            return (
                {
                    ...store,
                    request: true,
                    productDetails: {},
                    failed: false
                }
            )

            case PRODUCTDETAILS_SUCCESS: 
            return (
                {
                    ...store,
                    request: false,
                    productDetails: action.payload,
                    failed: false
                }
            )
                case PRODUCTDETAILS_FAILURE:
                    return (
                        {
                            ...store,
                            request: false,
                            productDetails:{},
                            failed: true
                        }
            )

             default: return (store);;
    }
}