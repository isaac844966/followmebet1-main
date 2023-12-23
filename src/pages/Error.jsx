import React from "react";
import Wrapper from "../assets/wrapper/ErrorPage";
import { Link } from "react-router-dom";
import img from "../images/not-found.svg";

const Error = () => {
  return (
    <Wrapper>
      <div>
        <img src={img} alt='not found' />
        <h3>Ohh!</h3>
        <p>We can't seem to find the you are looking for</p>
        <Link to='/'>back home</Link>
      </div>
    </Wrapper>
  );
};

export default Error;
