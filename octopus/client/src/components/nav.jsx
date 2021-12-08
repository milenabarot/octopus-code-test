import React from "react";
import "../styles/nav.scss";
import basketLogo from "../assets/basket.svg";
import mainLogo from "../assets/logo.svg";

const Nav = (props) => {
  return (
    <nav className="nav">
      <img className="nav-octopusLogo" src={mainLogo} alt="Octopus logo" />
      <button type="button" className="nav-basket">
        <img
          className="nav-basket-icon"
          src={basketLogo}
          alt="The shopping basket"
        />
        <span className="nav-basket-quantity" title="Basket Items">
          {props.basket}
        </span>
      </button>
    </nav>
  );
};

export default Nav;
