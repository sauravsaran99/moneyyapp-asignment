
import { createStore } from "redux";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { applyMiddleware, compose } from "redux";
import { Productreducer } from "../Reducers/Productreducer";
import { Cartreducer } from "../Reducers/Cartreducer";
import { ProductDetailsreducer } from "../Reducers/ProductDetailsreducer";

const allReducers = combineReducers({
    Productreducer,
    Cartreducer,
    ProductDetailsreducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const Store = createStore(allReducers, composeEnhancers(applyMiddleware(thunk)));