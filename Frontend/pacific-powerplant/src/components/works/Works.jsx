import React, { useState, useEffect } from "react";

import Work from "./Work";
import Testimonials from "../testimonials/Testimonials";
import axios from "../../axios";
const Services = () => {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    const fetchWorks = async () => {
      const res = await axios.get(`/works`);
      setWorks(res.data);
    };
    fetchWorks();
  }, []);

  return (
    <div className="mt-32" id="/services">
      <div>
        <h1 className="text-4xl text-center text-slate-300 bg-stone-700 mx-auto w-11/12 md:w-6/12 Belanosima rounded-full abou py-1 mt-20">
          OUR WORKS
        </h1>
        <div className="w-full mx-auto">
          <div className="w-10/12 mx-auto  grid  sm:grid-cols-2   lg:grid-cols-3 gap-1 mt-16">
            {works.map((work) => (
              <Work key={work._id} work={work} />
            ))}
          </div>
        </div>
      </div>
      <Testimonials />
    </div>
  );
};

export default Services;
