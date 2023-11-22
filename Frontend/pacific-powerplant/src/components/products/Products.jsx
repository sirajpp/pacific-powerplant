import React, { useState, useEffect } from "react";
import Product from "./Product";
import axios from "../../axios";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get(`/products`);
      setProducts(res.data);
    };
    fetchProducts();
  }, []);

  return (
    <>
    {products ? (
    <div className="mt-32 " id="/products">
      <h1 className="text-2xl sm:text-3xl md:text-4xl   text-center text-slate-300 bg-stone-700 w-10/12 mx-auto md:w-6/12 Belanosima rounded-full abou py-1 ">
        PRODUCTS & SERVICES
      </h1>
      <div className="w-full mx-auto">
        <div className="w-11/12 mx-auto  grid  sm:grid-cols-2   lg:grid-cols-3 gap-2 mt-16 ">
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div> ) : (<div>No products availabe</div>) }
    </>
  );
};

export default Products;
