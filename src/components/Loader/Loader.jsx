import React from "react";
import Spinner from "react-bootstrap/Spinner";
import "./Loder.css"
const Loader = () => {
  return (
    <div className="spinner-container">
    <Spinner className="spinner" animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    </div>
  );
};

export default Loader;
