import React from "react";
import "../styles/cart.scss";

const Cart = (props) => {
  return (
    <div className="cart">
      <div className="cart-priceQuantityWrap">
        <p className="cart-price">{props.product.price}</p>
        <div className="cart-quantityWrap">
          <p>qty</p>
          <div className="cart-quantityButtonWrap">
            <button
              className="cart-quantityButton"
              onClick={props.decrement}
              type="button"
              disabled={props.quantity === 1}
            >
              -
            </button>
            <div
              className="cart-quantityButton-number"
              title="Current quantity"
            >
              {props.quantity}
            </div>
            <button
              className="cart-quantityButton"
              onClick={props.increment}
              type="button"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="cart-addToCartButtonWrap">
        <button
          classname="cart-addToCartButton"
          type="button"
          onClick={props.addToCart}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
