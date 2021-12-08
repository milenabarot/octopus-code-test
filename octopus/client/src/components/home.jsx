import React from "react";
import "../styles/home.scss";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div className="home">
      <h1>Octopus Energy </h1>
      <Link to="/productpage" className="home-productPagelink">
        Go to product page
      </Link>
    </div>
  );
};

export default Home;
