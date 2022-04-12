import React,{createContext, useReducer} from 'react';
import {productReducer} from '../reducers/ProductReducer';
import {apiUrl,PRODUCT_LOADED_SUCCESS,PRODUCT_LOADED_FAIL,PRODUCTS_LOADED_SUCCESS,PRODUCTS_LOADED_FAIL} from './Constants';
import axios from 'axios';

export const ProductContext = createContext(); 

const ProductContextProvider = ({children}) =>{
    const [productState, dispatch] = useReducer(productReducer,{
        product:null,
        Products:[],
        productFinds:[], 
        productLoading: true
    });

    // Get all children
    const getProducts = async() => {
        try {
            const response = await axios.get(`${apiUrl}/categoryproduct/product/getProduct`);
            if(response.data.success) {
                dispatch({ type:PRODUCT_LOADED_SUCCESS, payload: response.data.Products})
            }
        } catch (error) {
            dispatch({ type:PRODUCT_LOADED_FAIL});
            console.log(error);
        }
    }
    // Get children by Id
    const getProductsbyId = async productID => {
        try {
            const response = await axios.get(`${apiUrl}/categoryproduct/product/getProductById/${productID}`);
            if(response.data.success) {
                dispatch({ type:PRODUCT_LOADED_SUCCESS, payload: response.data.Products})
            }
        } catch (error) {
            dispatch({ type:PRODUCT_LOADED_FAIL})   
        }
    }
    // Get children by Id
    const getQuantityProductsbyId = async productID => {
        try {
            const response = await axios.get(`${apiUrl}/categoryproduct/product/ProductId/quanlityDetails/${productID}`);
            if(response.data.success) {
                dispatch({ type:PRODUCT_LOADED_SUCCESS, payload: response.data.Products})
            }
        } catch (error) {
            dispatch({ type:PRODUCT_LOADED_FAIL})   
        }
    }

    //Find items product by category product 
    // Get all children
    const getProductsbyCategoryProduct = async categoryProductId => {
        try {
            const response = await axios.get(`${apiUrl}/categoryproduct/product/categoryProductId/${categoryProductId}`);
            if(response.data.success) {
                dispatch({ type:PRODUCTS_LOADED_SUCCESS, payload: response.data.Products}) 
            }
        } catch (error) {
            dispatch({ type:PRODUCTS_LOADED_FAIL})   
        }
    }
    // Find item product
    const FindProduct = async nameproduct => {
        try {
            const response = await axios.get(`${apiUrl}/categoryproduct/product/findProduct/${nameproduct}`);
            if(response.data.success) {
                dispatch({ type:PRODUCTS_LOADED_SUCCESS, payload: response.data.Products}) 
            }
        } catch (error) {
            dispatch({ type:PRODUCTS_LOADED_FAIL})   
        }
    }
    //Context data
    const productContextData = {productState,getProducts,getProductsbyId,getQuantityProductsbyId,getProductsbyCategoryProduct,FindProduct};

    //Return provider information
    return (
        <ProductContext.Provider value={productContextData}>
            {children}
        </ProductContext.Provider>
    );
}
export default ProductContextProvider;
