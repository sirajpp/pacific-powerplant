import React,{useState} from "react";
import "./Work.css";
import { useSelector } from "react-redux";
import DeleteWork from "./DeleteWork";
const Work = ({ work }) => {
  const { currentUser } = useSelector((state) => state.admin);
  const [selectedWork, setSelectedWork] = useState(null);
  const handleDeleteClick = (work) => {
    setSelectedWork(work);
    document.getElementById("deletework").showModal();
  };
  return (
    <div className=" card mt-5 ml-2 w-11/12 hover:border-4 hover:border-black">
      <img src={work.image} alt="article-cover" className=" h-64 rounded-lg" />
      {currentUser ? (
        <div>
          <button
            className="btn text-center bg-red-500 w-10/12 m-2 mx-8 text-white"
            onClick={() => handleDeleteClick(work)}
          >
            Delete
          </button>
          {selectedWork && (
                  <dialog
                    id="deletework"
                    className="modal flex justify-center items-center"
                  >
                    <DeleteWork id={work._id} />
                  </dialog>
                )}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Work;
