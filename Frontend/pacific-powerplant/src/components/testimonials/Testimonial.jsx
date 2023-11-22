import React, { useState } from "react";
import "./Testimonials.css";
import "../../index.css";
import { useSelector } from "react-redux";
import EditTesti from "./EditTesti";
import DeleteTesti from "./DeleteTesti";
const Testimonial = ({ test }) => {
  const { currentUser } = useSelector((state) => state.admin);
  const [selectedTesti, setSelectedTesti] = useState(null);
  const handleEditTesti = (test) => {
    setSelectedTesti(test);
    document.getElementById("edittest").showModal();
  };
  const handleDeleteTesti = (test) => {
    setSelectedTesti(test);
    document.getElementById("deletetest").showModal();
  };
  return (
    <div>
      {test ? (
        <div>
          <div
            className="ag-courses_item w-56 h-44 overflow-y-scroll no-scrollbar"
            
          >
            <div className="ag-courses-item_link">
              <div className="ag-courses-item_bg "></div>
              <div className="ag-courses-item_title hover:text-black   ">
                <p className="text-center text-orange-400 hover:text-red-900 mr-14 mt-3 ">
                  {test.name}
                </p>
                <div className="text-sm p-3 h-28 ">{test.feedback}</div>
              </div>
            </div>
          </div>
          {currentUser ? (
            <div className=" -mt-5 flex justify-center items-center">
              <button
                className="btn  mx-2 bg-slate-900"
                onClick={() => handleEditTesti(test)}
              >
                edit
              </button>
              {selectedTesti && (
                <dialog
                  id="edittest"
                  className="modal flex justify-center items-center "
                >
                  <EditTesti test={test} />
                </dialog>
              )}
              <button
                className="btn m-2 text-center bg-red-900 "
                onClick={() => handleDeleteTesti(test)}
              >
                Delete
              </button>
              {selectedTesti && (
                <dialog
                  id="deletetest"
                  className="modal flex justify-center items-center"
                >
                  <DeleteTesti id={test._id} />
                </dialog>
              )}
            </div>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <p>notesti</p>
      )}
    </div>
  );
};

export default Testimonial;
