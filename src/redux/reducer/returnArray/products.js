import { STORE_PRODUCTS } from "../../constants/constants";

const initial = [];

const reducer = (state = initial, action) => {
    const { type, data } = action;
    switch (type) {
        case STORE_PRODUCTS:

        return data;

        default:
            return state;
    }
};

export default reducer