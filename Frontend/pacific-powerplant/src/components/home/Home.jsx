import React, { useRef } from "react";
import Lottie from "lottie-react";
import animationData from "../../lotties/ppp1.json";

import "./Home1.css";
const Home = () => {
  const HomeAnimation =
    useRef < import("lottie-react").LottieRefCurrentProps > null;
  return (
    <div
      className=" mt-48 sm:mt-24 md:mt-44 lg:mt-32  xl:flex xl:items-center xl:justify-around  text-white"
      id="/"
    >
      <div className="font-extrabold text-center mx-5  mt-7 xl:text-left xl:my-auto xl:mt-44 md:ml-16 text-3xl md:text-6xl ">
        <p className="">
          <span className="block lg-inline ubuntu xl:text-7xl mt-20 ">
            PACIFIC POWERPLANT
          </span>
        </p>
        <div className="text-xl  mt-3 ms-2 animate__animated animate__fadeInUp animate__delay-1s animate_slower pop">
          A Smart Choice is making your own electricity
        </div>
      </div>
      <div className=" w-full  md:w-9/12 mx-auto -mt-16 md:-mt-24 xl:mx-0 xl:w-5/12 xl:-ms-24 xl:-mt-10  ">
        <Lottie lottieRef={HomeAnimation} animationData={animationData} />
      </div>
    </div>
  );
};

export default Home;
