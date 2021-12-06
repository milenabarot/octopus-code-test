import React from "react";
import "../styles/cart.scss";

const Cart = (props) => {
  return (
    <div>
      <p>{props.product.price}</p>
      <button onClick={props.increment} type="button">
        +
      </button>
      <p>Qty</p>
      <div title="Current quantity"> {props.quantity}</div>
      <button
        onClick={props.decrement}
        type="button"
        disabled={props.quantity === 1}
      >
        -
      </button>
      <button type="button" onClick={props.addToCart}>
        Add to cart
      </button>
    </div>
  );
};

export default Cart;
