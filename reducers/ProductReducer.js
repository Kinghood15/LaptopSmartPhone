import {PRODUCT_LOADED_SUCCESS,PRODUCT_LOADED_FAIL,PRODUCTS_LOADED_SUCCESS,PRODUCTS_LOADED_FAIL} from '../contexts/Constants';
export const productReducer = (state, action) => {
    const { type,payload } = action;
    switch (type) {
        case PRODUCT_LOADED_SUCCESS:
            return {
                ...state,
                Products:payload,
                productLoading:false
            };

        case PRODUCT_LOADED_FAIL:
            return {
                ...state,
                Products:[],
                productLoading:false
            };
        case PRODUCTS_LOADED_SUCCESS:
            return {
                ...state,
                Products:payload,
                productLoading:false
            };
        case PRODUCTS_LOADED_FAIL:
            return {
                ...state,
                Products:[],
                productLoading:false
            };
        default: return state;
    }
}