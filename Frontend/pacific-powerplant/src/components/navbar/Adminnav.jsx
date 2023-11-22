import React from "react";
import CreateProduct from "../products/createProduct";
import { Link } from "react-scroll";
import CreateWork from "../works/CreateWork";
import CreateTesti from "../testimonials/createTesti";

const Adminnav = ({ handleLogut }) => {
  return (
    <div className="dropdown dropdown-bottom dropdown-end ">
      <label
        tabIndex={0}
        className=" text-lg YsabeauSC font-bold hvr-underline-from-center"
      >
        Admin
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 ml-20"
      >
        <li className="my-2 text-center">
          <button
            className="btn"
            onClick={() => {
              document.getElementById("my_modal_3").showModal();
            }}
          >
            products
          </button>
          <dialog
            id="my_modal_3"
            className="modal flex justify-center items-center"
          >
            <CreateProduct />
          </dialog>
        </li>
        <hr className="w-full"></hr>
        <li className="mt-2 text-center">
          {" "}
          <button
            className="btn"
            onClick={() => {
              document.getElementById("testi").showModal();
            }}
          >
            Testimonials
          </button>
          <dialog id="testi" className="modal flex justify-center items-center">
            <CreateTesti />
          </dialog>
        </li>
        <hr className="w-full"></hr>
        <li className="mt-2 text-center">
          <button
            className="btn"
            onClick={() => {
              document.getElementById("work").showModal();
            }}
          >
            Work
          </button>
          <dialog id="work" className="modal flex justify-center items-center">
            <CreateWork />
          </dialog>
        </li>
        <hr className="w-full"></hr>
        <Link to="/">
          <button className="btn w-full mt-2 text-center" onClick={handleLogut}>
            Logout
          </button>
        </Link>
      </ul>
    </div>
  );
};

export default Adminnav;
