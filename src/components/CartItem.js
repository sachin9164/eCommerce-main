import React from "react";
import AddRemoveButton from "./AddRemoveButton";

function CartItem({ item }) {
  return (
    <div className="cart-item">
      <div className="cart-item-top">
        <div className="cart-item-title">{item.name}</div>
        <AddRemoveButton item={item} />
      </div>
      <div className="cart-item-calc">
        ₹{item.price} x {item.quantity} = ₹{item.price * item.quantity}
      </div>
    </div>
  );
}

export default CartItem;
