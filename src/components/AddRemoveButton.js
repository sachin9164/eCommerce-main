import React from "react";
import { connect } from "react-redux";

import { addItem, removeItem } from "../store/cart";

function AddRemoveButton({ cartItems, item, addItem, removeItem }) {
  const itemInCart = cartItems[item.id];

  if (itemInCart) {
    return (
      <div className="button-group">
        <button className="button" onClick={() => removeItem(item)}>
          -
        </button>
        <div className="button-label">{itemInCart.quantity}</div>
        <button className="button" onClick={() => addItem(item)}>
          +
        </button>
      </div>
    );
  } else {
    return (
      <button onClick={() => addItem(item)} className="button">
        Add to Cart
      </button>
    );
  }
}

const mapStateToProps = state => {
  return {
    cartItems: state.cart.items
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddRemoveButton);
