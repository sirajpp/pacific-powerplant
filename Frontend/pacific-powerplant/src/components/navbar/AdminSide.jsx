import React from "react";
import { Link } from "react-scroll";
import CreateProduct from "../products/createProduct";
import CreateWork from "../works/CreateWork";
import CreateTesti from "../testimonials/createTesti";

const AdminSide = ({ handleLogut, closeDrawer }) => {
  return (
    <div className="dropdown dropdown-bottom dropdown-end ">
      <label
        tabIndex={0}
        className="mx-2 text-lg YsabeauSC font-bold hvr-underline-from-center"
      >
        Admin
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-1 shadow bg-base-100 rounded-box w-52 ml-20 mb-5  "
      >
        <li className="text-center ">
          <button
            className="btn  bg-slate-900 text-md text-white"
            onClick={() => {
              closeDrawer();
              document.getElementById("adminside").showModal();
            }}
          >
            products
          </button>
          <dialog
            id="adminside"
            className="modal flex justify-center items-center w-11/12"
          >
            <CreateProduct />
          </dialog>
        </li>
        <hr className="w-full"></hr>
        <li className="mt-2">
          {" "}
          <button
            className="btn  text-center bg-slate-900 text-md text-white hover:bg-slate-700 hover:text-yellow-200"
            onClick={() => {
              closeDrawer();
              document.getElementById("testiside").showModal();
            }}
          >
            Testimonials
          </button>
          <dialog
            id="testiside"
            className="modal flex justify-center items-center w-11/12"
          >
            <CreateTesti />
          </dialog>
        </li>
        <hr className="w-full"></hr>
        <li className="mt-2 text-center">
          {" "}
          <button
            className="btn bg-slate-900 text-md text-white"
            onClick={() => {
              closeDrawer();
              document.getElementById("workside").showModal();
            }}
          >
            works
          </button>
          <dialog
            id="workside"
            className="modal flex justify-center items-center w-11/12"
          >
            <CreateWork />
          </dialog>
        </li>
        <hr className="w-full"></hr>
        <Link to="/">
          <button
            className="btn w-full mt-2 text-center bg-slate-900 text-md text-white"
            onClick={handleLogut}
          >
            Logout
          </button>
        </Link>
      </ul>
    </div>
  );
};

export default AdminSide;
