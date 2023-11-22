import React, { useState } from "react";
import axios from "../../axios";
const CreateTesti = () => {
  const [inputs, setInputs] = useState({});
  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const res = await axios.post("/testi/new", { ...inputs });
    alert("Testimonials has been created")
  
  
      setInputs({});
  
  };
  return (
    <div className="modal-box">
      <h3 className="font-bold text-lg">Create a Product </h3>
      <form method="dialog">
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>

        <input
          type="text"
          placeholder="Name"
          className="input input-bordered w-full mx-auto mt-8 "
          name="name"
          value={inputs.name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Separate the Brands with commas."
          className="input input-bordered w-full mx-auto mt-8 "
          name="feedback"
          value={inputs.feedback}
          onChange={handleChange}
        />
        <div className="mt-10 flex gap-4 items-center justify-center">
          <button className="btn btn-success" onClick={handleUpload}>
            create
          </button>
          <button className="btn btn-success">cancel</button>
        </div>
      </form>
    </div>
  );
};

export default CreateTesti;
