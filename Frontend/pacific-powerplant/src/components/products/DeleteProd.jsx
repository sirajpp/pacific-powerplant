import React from "react";
import axios from "../../axios";

const DeleteProd = ({ id }) => {
  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        const res = await axios.delete(`/products/${id}`);
        alert("delete successfully")
      } else {
        console.log("id is not defined");
      }
    } catch (err) {
      console.log("Error", err);
    }
  };

  return (
    <div className="modal-box w-11/12 ">
      <h3 className="font-bold text-lg">Delete a Product</h3>
      <div className="modal-action">
        <form method="dialog">
          <div className="grid grid-cols-2">
            <button className="btn bg-red-600 mx-5" onClick={handleDelete}>
              Delete
            </button>
            <button className="btn bg-slate-500">cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeleteProd;
