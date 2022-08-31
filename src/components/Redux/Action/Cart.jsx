
export const CART_REQUEST = 'CART_REQUEST';

export const CART_SUCCESS = 'CART_SUCCESS';

export const CART_FAILURE = 'CART_FAILURE';


export const CartRequest = (payload) => {
    return ({type: 'CART_REQUEST', payload})
};

export const CartSuccess = (payload) => {
    return ({type: 'CART_SUCCESS', payload})
};

export const CartFailure = (payload) => {
    return ({type: 'CART_FAILURE', payload})
};