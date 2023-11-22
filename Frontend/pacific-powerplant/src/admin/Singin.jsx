import React, { useState } from "react";
import { FaDotCircle } from "react-icons/fa";
import axios from "../axios";
import { useDispatch } from "react-redux";
import { loginFailure, loginStart, loginSuccess } from "../redux/adminSlice";
import { IoIosCloseCircle } from "react-icons/io";

const Singin = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const closeDrawer = () => {
    document.getElementById("my-drawer").checked = false;
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post(
        "/auths/signin",
        { name, password },
        { withCredentials: true }
      );

      dispatch(loginSuccess(res.data));
      closeDrawer();
    } catch (err) {
      dispatch(loginFailure());
    }
  };

  return (
    <div className="drawer mt-10">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="my-drawer" className="text-slate-900">
          <FaDotCircle size="18" />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="w-full flex items-center justify-center bg-slate-900 z-10 min-h-full">
          <div className="card p-5">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={closeDrawer}
            >
              <IoIosCloseCircle size="14" />
            </button>

            <p className=" text-3xl mb-5 Belanosima mt-10 ">
              Only Admin can Login
            </p>
            <div className="form-control w-full max-w-xs mt-5">
              <label className="label">
                <span className="label-text text-sm">Admin Name</span>
              </label>
              <input
                type="text"
                placeholder="&#128589;Admin name"
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-control w-full max-w-xs mt-5">
              <label className="label">
                <span className="label-text text-sm">Password</span>
              </label>
              <input
                type="text"
                placeholder="&#128274;Password"
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className="btn btn-success w-full mt-8 text-xl"
              onClick={handleLogin}
            >
              sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singin;
