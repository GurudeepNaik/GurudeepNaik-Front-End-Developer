import React from "react";

import GetWithHeader from "../GetWithHeader/GetWithHeader";
import "./Landing.css";

const Landing = () => {
  // const { rockets } = useAPI();
  // console.log(rockets);
  return (
    <div className="main-container">
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
            <h1 className="main-h1 text-4xl font-bold tracking-tight sm:text-center sm:text-6xl text-white opacity-80">Welcome to Space-X</h1>
            <p className="main-p mt-6 text-lg leading-8  text-white opacity-80 sm:text-center">Go ahead and Check On Our Rockets , Capsules and Dragons</p>
            <button className="main-btn"><a href="https://www.spacex.com/">Learn More</a></button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GetWithHeader(Landing);
