import React from "react";
import { connect } from "react-redux";

import { toggleCart } from "../store/cart";
import Cart from "./Cart";
import Categories from "./Categories";
import Items from "./Items";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App({ isLoading, selectedCategoryId, toggleCart }) {
  return (
    <div className="app">
                
      <div className="app-header">
        <Categories />
        <div className="app-header-cart">
          <button className="button is-inverted" onClick={toggleCart}>
            Cart
          </button>
        </div>
      </div>
  
      <div className="app-body">
        {!isLoading && <Items key={selectedCategoryId} />}
      </div>
      <Cart />
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar
      /> 

    </div>
  );
}

const mapStateWithProps = (state) => {
  return {
    isLoading: state.categories.isLoading,
    selectedCategoryId: state.categories.selectedCategoryId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCart: () => dispatch(toggleCart())
  };
};

export default connect(mapStateWithProps, mapDispatchToProps)(App);
