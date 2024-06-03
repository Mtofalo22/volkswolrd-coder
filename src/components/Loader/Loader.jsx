import React from "react";
import { DotLoader } from "react-spinners";
import "./loader.css";

const Loader = () => {
  return (
    <div className="loader">
      <DotLoader color="#037584" />
    </div>
  );
};

export default Loader;
