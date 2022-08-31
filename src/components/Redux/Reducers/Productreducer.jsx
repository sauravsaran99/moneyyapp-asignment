import { PRODUCT_REQUEST } from "../Action/Product";
import { PRODUCT_SUCCESS } from "../Action/Product";
import { PRODUCT_FAILURE } from "../Action/Product";

const initialState = {
  loading: false,
  Products: [],
  error: false,
};

export const Productreducer = (store = initialState, action) => {
  switch (action.type) {
    case PRODUCT_REQUEST:
      return {
        ...store,
        loading: true,
        Products: [],
        error: false,
      };
    case PRODUCT_SUCCESS:
      return {
        ...store,
        loading: false,
        Products: action.payload,
        error: false,
      };

    case PRODUCT_FAILURE:
      return {
        ...store,
        loading: false,
        Products: [],
        error: true,
      };

    default:
      return store;
  }
};
