import { createStore, combineReducers, applyMiddleware } from "redux";
import { productDetailsReducers, productListReducers } from "./Reducers/ProductReducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { cartReducer } from "./Reducers/CartReducers";
import { userLoginReducer, userRegisterReducer } from "./Reducers/UserReducer";

const reducer = combineReducers({
  productList: productListReducers,
  productDetails:productDetailsReducers,
  cart:cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer
});

const cartItemFromLocalStorage = localStorage.getItem("cartItems") ? 
JSON.parse(localStorage.getItem("cartItems")):[]

const userInfoFromLocalStorage = localStorage.getItem("userInfo") ? 
JSON.parse(localStorage.getItem("userInfo")):null


const initialState = {
  cart:{
    cartItems:cartItemFromLocalStorage
  },
  userLogin:{
    userInfo: userInfoFromLocalStorage
  }
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
