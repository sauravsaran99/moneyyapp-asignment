import axios from 'axios'
export const PRODUCT_REQUEST = 'PRODUCT_REQUEST';

export const PRODUCT_SUCCESS = 'PRODUCT_SUCCESS';

export const PRODUCT_FAILURE = 'PRODUCT_FAILURE';


const ProductRequest = (payload) => {
    return ({type: 'PRODUCT_REQUEST', payload})
};

const ProductSuccess = (payload) => {
    return ({type: 'PRODUCT_SUCCESS', payload})
};

const ProductFailure = (payload) => {
    return ({type: 'PRODUCT_FAILURE', payload})
};

export const ProductMiddleware = () => {
    return (dispatch) => {
        dispatch(ProductRequest())
        axios.get('https://shrouded-reaches-37639.herokuapp.com/products').then((res) => {
            dispatch(ProductSuccess(res.data))
        }).catch((err) => {
            dispatch(ProductFailure(err))
        })
    }
}

