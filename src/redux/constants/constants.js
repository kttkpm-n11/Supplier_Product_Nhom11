export const STORE_PHONE_AND_PASSWORD_WHEN_LOGIN = "STORE_PHONE_AND_PASSWORD_WHEN_LOGIN";
export const CLEAR_USER_INFO_LOGIN = "CLEAR_USER_INFO_LOGIN";
export const LOGIN_SUCCESSFUL = "LOGIN_SUCCESSFUL";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const LOGOUT_SUCCESSFUL = "LOGOUT_SUCCESSFUL";

/**product & supplier */

export const STORE_PRODUCTS = "STORE_PRODUCTS";
export const STORE_PRODUCT_BY_ID = "STORE_PRODUCT_BY_ID";

export const STORE_SUPPLIERS = "STORE_SUPPLIERS";
export const STORE_SUPPLIER_BY_ID = "STORE_SUPPLIER_BY_ID";

/**Message from server */
export const SET_MESSAGE_FROM_SERVER = "SET_MESSAGE_FORM_SERVER";
export const CLEAR_MESSAGE_FROM_SERVER = "CLEAR_MESSAGE_FROM_SERVER";

export const createAction = (type, data) => {
    return { type, data };
};
