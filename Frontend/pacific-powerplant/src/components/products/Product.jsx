import React, { useState } from "react";
import "./Product.css";
import Call from "./Call";
import { useSelector } from "react-redux";
import DeleteProd from "./DeleteProd";
import EditProd from "./EditProd";

const Product = ({ product }) => {
  const { currentUser } = useSelector((state) => state.admin);
  const [selectedProduct, setSelectedProduct] = useState(null);


  const handleEditClick = (product) => {
    setSelectedProduct(product);
    document.getElementById("edit").showModal();
  };
  const handleDeleteClick = (product) => {
    setSelectedProduct(product);
    document.getElementById("delete").showModal();
  };
  return (
    <div>
      {product ? (
        <div className="bn5 w-10/12 mx-auto lg:m-3 mt-5">
          <figure className="p-2 px-4">
            <img
              src={product.imageUrl}
              alt="Shoes"
              className="rounded-xl w-full h-48 md:h-56 bg-transparent img "
            />
          </figure>
          <div className="p-2">
            <h2 className="text-2xl pop ml-2">{product.name}</h2>
            <hr className="w-full mx-auto my-1"></hr>
            <p className="my-2 ml-2 text-lg YsabeauSC ">Brands:</p>
            <div className=" ml-5 -mt-2  pop h-20 w-full justify-center items-center">
              {product.brands.map((brand) => (
                <p className="text-blue-400 hover:text-yellow-300" key={brand}>
                  {brand}
                </p>
              ))}
            </div>

            <hr className="w-11/12 mx-auto my-2"></hr>
            <div className="  w-9/12  mx-auto grid grid-cols-2 pl-2 ">
              <button
                className="m-2  w-10/12 text-center  py-2  bn23 hover:text-black"
                onClick={() => document.getElementById("contact").showModal()}
              >
                Buy
              </button>

              <button
                className="m-2  w-10/12 text-center py-2   bn24 hover:text-black "
                onClick={() => document.getElementById("contact").showModal()}
              >
                service
              </button>
              <dialog id="contact" className="modal">
                <Call />
              </dialog>
            </div>
            {currentUser ? (
              <div className=" w-9/12  mx-auto grid grid-cols-2 pl-2 ">
                <button
                  className="btn m-2 text-center bg-slate-900 w-10/12"
                  onClick={() => handleEditClick(product)}
                >
                  Edit
                </button>
                {selectedProduct && (
                  <dialog
                    id="edit"
                    className="modal flex justify-center items-center"
                  >
                    <EditProd product={selectedProduct} />
                  </dialog>
                )}

                <button
                  className="btn m-2 text-center bg-red-900 w-10/12"
                  onClick={() => handleDeleteClick(product)}
                >
                  Delete
                </button>
                {selectedProduct && (
                  <dialog
                    id="delete"
                    className="modal flex justify-center items-center"
                  >
                    <DeleteProd id={product._id} />
                  </dialog>
                )}
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      ) : (
        <p>no products</p>
      )}
    </div>
  );
};

export default Product;
