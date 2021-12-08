import React from "react";
import "../styles/cart.scss";

const Cart = (props) => {
  const price = props.product.price;
  const priceArray = Array.from(String(price), Number);
  priceArray.splice(2, 0, ".");
  const formattedPrice = priceArray.join("");

  return (
    <section className="cart">
      <div className="cart-priceQuantityWrap">
        <p className="cart-price">{formattedPrice}</p>
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
          className="cart-addToCartButton"
          type="button"
          onClick={props.addToCart}
        >
          Add to cart
        </button>
      </div>
    </section>
  );
};

export default Cart;
