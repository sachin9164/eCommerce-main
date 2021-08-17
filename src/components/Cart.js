import React from "react";
import { connect } from "react-redux";

import { toggleCart } from "../store/cart";
import CartItem from "./CartItem";
import { toast } from "react-toastify";
function Cart({ items, isOpen, total, toggleCart }) {
  const cartItemIds = Object.keys(items);

  function cartItemUi(id) {
    const item = { id, ...items[id] };
    return <CartItem key={id} item={item} />;
  }

  function showResults() {
    alert(JSON.stringify(items));
    console.log(total);
    toast.success("Proceed to Buy");
  }
  return (
    <div className={`cart ${isOpen ? "is-open" : ""}`}>
      <div className="cart-header">
        <div className="bold">Cart</div>
        <button className="button is-danger" onClick={toggleCart}>
          Close
        </button>
      </div>
      <div className="cart-items">
        {cartItemIds.length > 0 ? (
          cartItemIds.map(cartItemUi)
        ) : (
          <div className="cart-empty">Your cart is empty!</div>
        )}
      </div>
      <button className="button is-success" onClick={showResults}>
        Buy
      </button>
      <div className="cart-footer">
        Cart Total: <span className="bold">₹{total}</span>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    items: state.cart.items,
    isOpen: state.cart.isOpen,
    total: state.cart.total
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCart: () => dispatch(toggleCart())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
