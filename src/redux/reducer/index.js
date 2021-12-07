import { combineReducers } from "redux";

import authentication from "./returnObject/authentication";
import products from "./returnArray/products";
import productById from "./returnObject/productById";

const reducer = combineReducers({
    authentication,
    products,
    productById,
});

export default reducer;
