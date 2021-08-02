import { ActionTypes } from "../constants/action-type.js";
import {
  getAllProducts,
  getAProductById,
  deleteProductById,
  editProductById,
  addProduct,
  getProductsByCategory,
} from "../../api/products";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const setCellPhoneProduct = (products) => {
  return {
    type: ActionTypes.SET_CELLPHONE_PRODUC,
    payload: products,
  };
};
export const setSmartWatchProduct = (products) => {
  return {
    type: ActionTypes.SET_SMARTWATCH_PRODUC,
    payload: products,
  };
};
export const setheadPhone = (products) => {
  return {
    type: ActionTypes.SET_HEADPHONE_PRODUC,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const deleteSelectedProduct = (id) => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    payload: id,
  };
};

export const editSelectedProduct = (product) => {
  return {
    type: ActionTypes.EDIT_SELECTED_PRODUCT,
    payload: product,
  };
};

export const setLoading = ()=>{
  return{
    type:ActionTypes.LOADING,
  }
}

export const addNewProduct = (product) => {
  return {
    type: ActionTypes.ADD_PRODUCT,
    payload: product,
  };
};

export const getProducts = () => async (dispatch, getState) => {
  let res = await getAllProducts();
  dispatch(setProducts(res.data));
  dispatch(setLoading());
};
export const getProductsBYCategory =
  (category) => async (dispatch, getState) => {
    let res = await getProductsByCategory(category);
    if (category == "گوشی همراه") {
      dispatch(setCellPhoneProduct(res?.data));
    } else if (category == "ساعت هوشمند") {
      dispatch(setSmartWatchProduct(res?.data));
    }
    else if(category == "هدفن"){
      dispatch(setheadPhone(res?.data));
    }
  };

export const getCellphone = () => async (dispatch) => {
  let res = await getProductsByCategory("گوشی همراه");
  dispatch(setCellPhoneProduct(res?.data));
};
export const getSmartWatch = () => async (dispatch) => {
  let res = await getProductsByCategory("ساعت هوشمند");
  dispatch(setSmartWatchProduct(res?.data));
};

export const getAProduct = (id) => async (dispatch) => {
  let res = await getAProductById(id);
  dispatch(selectedProduct(res.data));
};

export const deleteProduct = (id) => async (dispatch) => {
  await deleteProductById(id);
  dispatch(deleteSelectedProduct(id));
};

export const editProduct = (newProduct) => async (dispatch) => {
  console.log(newProduct);
  await editProductById(newProduct);
  dispatch(editSelectedProduct(newProduct));
};

export const addAProduct = (product) => async (dispatch) => {
  let res = await addProduct(product);
  console.log(res);
  dispatch(addNewProduct(res.data));
};

