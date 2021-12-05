import React from "react";

const Cart = (props) => {
  return (
    <div>
      <h1>{props.product.name}</h1>
      <p>{props.product.price}</p>
      <button
        onClick={props.increment}
        type="button"
        disabled={props.quantity + props.basket >= props.product.quantity}
      >
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
      <button
        type="button"
        onClick={props.addToCart}
        disabled={props.basket === props.product.quantity}
      >
        Add to cart
      </button>
    </div>
  );
};

export default Cart;
