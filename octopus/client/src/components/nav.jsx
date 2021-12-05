import React from "react";

const Nav = (props) => {
  return (
    <div>
      <div>Basket</div>
      <div title="Basket Items">{props.basket}</div>
      {props.basket === props.product.quantity ? (
        <p>Max quantity reached</p>
      ) : null}
    </div>
  );
};

export default Nav;
