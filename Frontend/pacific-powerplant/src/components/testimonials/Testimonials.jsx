import React, { useState, useEffect } from "react";
import Testimonial from "./Testimonial";
import axios from "../../axios";
const Testimonials = () => {
  const [testi, setTesti] = useState([]);

  useEffect(() => {
    const fetchTestis = async () => {
      const res = await axios.get(`/testi`);
      setTesti(res.data);
    };
    fetchTestis();
  }, []);
  return (
    <div>
      <h1 className="text-4xl text-center text-slate-300 bg-stone-700 mx-auto w-11/12 md:w-6/12 Belanosima rounded-full abou py-1 mt-20">
        TESTIMONIALS
      </h1>
      <div className="carousel carousel-center w-full mx-auto  space-x-4 bg-transparent rounded-box mt-20">
        {testi.map((test) => (
          <div className="carousel-item" key={test._id}>
            <Testimonial test={test} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
