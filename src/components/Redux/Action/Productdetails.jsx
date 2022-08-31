
export const PRODUCTDETAILS_REQUEST = 'PRODUCTDETAILS_REQUEST';

export const PRODUCTDETAILS_SUCCESS = 'PRODUCTDETAILS_SUCCESS';

export const PRODUCTDETAILS_FAILURE = 'PRODUCTDETAILS_FAILURE';


export const productDetailsRequest = (payload) => {
    return ({type: 'PRODUCTDETAILS_REQUEST', payload})
};

export const productDetailsSuccess = (payload) => {
    return ({type: 'PRODUCTDETAILS_SUCCESS', payload})
};

export const productDetailsFailure = (payload) => {
    return ({type: 'PRODUCTDETAILS_FAILURE', payload})
};