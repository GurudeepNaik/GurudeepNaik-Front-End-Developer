import React from "react";
import Navbar from "../Navbar/Navbar";
import "./GetWithHeader.css"

const GetWithHeader = (Component) => {
  return () => {
    return (
      <div className="bg">
        <Navbar />
        <Component />
      </div>
    );
  };
};

export default GetWithHeader;
