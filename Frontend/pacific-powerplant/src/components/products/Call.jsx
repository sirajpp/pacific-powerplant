import React from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import "./Product.css";
import { IoIosCloseCircle } from "react-icons/io";
const Call = () => {
  const phoneNumber = "+91 90873 44666"; // Replace with the actual phone number

  const handleCall = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = `tel:${phoneNumber}`;
    } else {
      alert(
        `To make a call, please use a mobile device or copy the number ${phoneNumber}  and paste it into your phone dialer.`
      );
    }
  };

  const wtspNumber = "9087344666"; // Replace with the actual WhatsApp number

  const handleClick = () => {
    window.open(`https://wa.me/${wtspNumber}`, "_blank");
  };
  return (
    <div className="modal-box bg-slate-900 w-11/12 mx-auto shadow-orange-400 shadow-md">
      <h3 className="font-bold text-lg"></h3>
      <p className="py-4 call-modal-title text-center josefin">
        Buy and Service a product by phone call and whatsapp
      </p>
      <div className="modal-action">
        <form method="dialog">
          <button className=" call-modal-close ">
            <IoIosCloseCircle size="14" />
          </button>
        </form>
        <div className="w-full grid grid-cols-2 mx-auto">
          <button
            className="btn w-10/12 text-center pop ml-5 bg-slate-300 text-black "
            onClick={handleCall}
          >
            <FaPhoneVolume size="13" className="mx-1" /> Call
          </button>
          <button
            className="btn w-10/12 text-center pop bg-slate-300 text-black"
            onClick={handleClick}
          >
            <IoLogoWhatsapp size="18" className="mx-1" /> whatsapp
          </button>
        </div>
      </div>
    </div>
  );
};

export default Call;
