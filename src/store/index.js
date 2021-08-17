import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import categoriesReducer from "./categories";
import itemsReducer from "./items";
import cartReducer from "./cart";

const reducers = combineReducers({
  cart: cartReducer,
  categories: categoriesReducer,
  items: itemsReducer
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
