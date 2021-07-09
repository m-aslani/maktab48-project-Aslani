import { ActionTypes } from "../constants/action-type.js";
import {getAllProducts, getAProductById , deleteProductById , editProductById , addProduct} from "../../api/products";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const deleteSelectedProduct = (id)=>{
  return{
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    payload: id,
  }
}

export const addNewProduct = (product)=>{
return{
  type:ActionTypes.ADD_PRODUCT,
  payload:product,
}
}

export const getProducts = () => async (dispatch, getState) => {
  let res = await getAllProducts();
    dispatch(setProducts(res.data));
};

export const getAProduct = (id) => async (dispatch)=>{
  let res = await getAProductById(id);
  dispatch(selectedProduct(res.data));
}

export const deleteProduct = (id) => async (dispatch)=>{
  await deleteProductById(id);
  dispatch(deleteSelectedProduct(id));

}

export const editProduct = (id,newProduct) =>async(dispatch)=>{
let res = await editProductById(id,newProduct);
console.log(res.data);
}

export const addAProduct = (product) =>async(dispatch)=>{
  let res = await addProduct(product);
  console.log(res);
  dispatch(addNewProduct(product));
}