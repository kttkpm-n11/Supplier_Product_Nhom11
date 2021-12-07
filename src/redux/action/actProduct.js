import axios from "axios";
import { API_PRODUCT, API_SUPPLIER } from "../constants/api";
import {
    createAction,
    STORE_PRODUCTS,
    STORE_PRODUCT_BY_ID,
    STORE_SUPPLIERS,
    STORE_SUPPLIER_BY_ID,
} from "../constants/constants";

export const getProducts = () => {
    return (dispatch) => {
        return axios
            .get(API_PRODUCT)
            .then((resp) => {
                dispatch(createAction(STORE_PRODUCTS, resp.data));
            })
            .catch((err) => console.error(err));
    };
};

export const getProductById = (productId) => {
    return (dispatch) => {
        return axios
            .get(API_PRODUCT + `/${productId}`)
            .then((resp) => {
                dispatch(createAction(STORE_PRODUCT_BY_ID, resp.data));
            })
            .catch((err) => console.error(err));
    };
};

export const getSuppliers = () => {
    return (dispatch) => {
        return axios
            .get(API_SUPPLIER)
            .then((resp) => {
                dispatch(createAction(STORE_SUPPLIERS, resp.data));
            })
            .catch((err) => console.error(err));
    };
};

export const getSupplierById = (supplierId) => {
    return (dispatch) => {
        return axios
            .get(API_SUPPLIER + `/${supplierId}`)
            .then((resp) => {
                dispatch(createAction(STORE_SUPPLIER_BY_ID, resp.data));
            })
            .catch((err) => console.error(err));
    };
};
