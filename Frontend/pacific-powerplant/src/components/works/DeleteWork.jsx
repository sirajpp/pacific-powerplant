import React from "react";
import axios from "../../axios";

const DeleteWork = ({ id }) => {
  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        const res = await axios.delete(`/works/${id}`);
        alert("Work has been deleted")
      } else {
        console.log("id is not defined");
      }
    } catch (err) {
      console.log("Error", err);
    }
  };
  return (
    <div className="modal-box w-11/12 max-w-5xl">
      <h3 className="font-bold text-lg">Delete a Product</h3>

      <div className="modal-action">
        <form method="dialog">
          <div className="grid grid-cols-2">
            <button
              className="btn btn-primary-hover:btn-danger mx-5"
              onClick={handleDelete}
            >
              Delete
            </button>
            <button className="btn btn-primary-hover:btn-danger">cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeleteWork;
