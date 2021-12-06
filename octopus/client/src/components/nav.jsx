import React from "react";
import "../styles/nav.scss";
import basketLogo from "../assets/basket.svg";
import mainLogo from "../assets/logo.svg";

const Nav = (props) => {
  return (
    <div className="nav">
      <img className="nav-octopusLogo" src={mainLogo} alt="Octopus logo" />
      <div className="nav-basketWrap">
        <img
          className="nav-basketWrap-icon"
          src={basketLogo}
          alt="A basket icon"
        />
        <div title="Basket Items">{props.basket}</div>
      </div>
    </div>
  );
};

export default Nav;
