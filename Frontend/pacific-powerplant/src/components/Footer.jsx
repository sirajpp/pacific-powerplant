import React from "react";
import "./home/Home";

const Footer = () => {
  return (
    <div className=" w-full  bg-transparent ">
      <a className="text-sm text-white ml-5 flex justify-center">
        Copyright ©
        <span className="josefin text-yellow-200 text-sm md:text-lg">
          Pacific Powerplant.
        </span>
        All right reserved
      </a>
    </div>
  );
};

export default Footer;
