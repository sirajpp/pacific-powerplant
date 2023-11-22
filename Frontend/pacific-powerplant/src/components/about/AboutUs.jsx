import React from "react";
import "./About.css";
import Vison from "./Vison";
import Mission from "./Mission";

const AboutUs = () => {
  return (
    <div className="mt-32" id="/about">
      <h1 className="text-4xl mt-10  text-center text-slate-300 bg-stone-700 mx-auto w-11/12 md:w-6/12 Belanosima rounded-full abou py-1">
        ABOUT US
      </h1>
      <div className="text-align-center justify-items-center w-10/12 mx-auto text-justify  sm:text-center p-2 text-lg lg:text-2xl my-5 text-white pop mt-14 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        similique inventore aliquam hic iure neque culpa ipsam magnam. Ratione,
        aut itaque tempora sunt sed consequuntur est at a neque odit sequi culpa
        eos placeat nemo distinctio numquam unde, voluptatem ut? Eaque
        aspernatur sequi nihil itaque a quo officiis earum, quasi adipisci iusto
        alias iste tempora sunt voluptates rerum, sed harum numquam sint ullam
   
      </div>
      <div className="mx-auto w-10/12 grid sm:grid-cols-2 gap-4 mt-10">
        <div className="w-full text-center vision pb-2 hover:shadow-slate-100 shadow-md">
          <Vison />
        </div>
        <div className="w-full bg-red-400 text-center vision pb-3 hover:shadow-slate-100 shadow-md">
          <Mission />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
