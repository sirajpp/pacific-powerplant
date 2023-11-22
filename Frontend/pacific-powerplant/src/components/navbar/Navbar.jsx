import React, { useState, useEffect } from "react";
import { navLinks } from "../../constants";
import { pplogo } from "../../assets";
import "../products/Product.css";
import { Link } from "react-scroll";
import { IoIosCloseCircle } from "react-icons/io";
import "../home/Home1.css";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/adminSlice";
import Adminnav from "./Adminnav";
import AdminSide from "./AdminSide";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.addEventListener("scroll", handleScroll);
  }, []);

  const { currentUser } = useSelector((state) => state.admin);

  const dispatch = useDispatch();
  const handleLogut = () => {
    dispatch(logout());
  };

  const closeDrawer = () => {
    document.getElementById("my-drawer-3").checked = false;
  };
  return (
    <div className="w-full fixed  z-50">
      <div className="drawer   text-white ">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div
            className={`w-full navbar z-100 lg:px-32 ${
              scrolled ? "navbg" : "bg-transparent"
            } `}
          >
            <Link to="/" spy={true} offset={-100} smooth={true} duration={800}>
              <img src={pplogo} alt="Logo" className="w-10  mx-2" />
            </Link>

            <div className="flex-1 px-2 mx-2 Belanosima text-xl ">
              Pacific PowerPlant
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                {navLinks.map((navLink) => (
                  <li key={navLink.id}>
                    <Link
                      to={`/${navLink.id}`}
                      spy={true}
                      offset={-100}
                      smooth={true}
                      duration={1000}
                      className="hover:text-teal-300 YsabeauSC hvr-underline-from-center"
                    >
                      {navLink.title}
                    </Link>
                  </li>
                ))}
                <li className="-mt-2 hover:text-teal-300 ">
                  {currentUser ? <Adminnav handleLogut={handleLogut} /> : <></>}
                </li>
              </ul>
            </div>
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
          </div>
        </div>
        <div className="drawer-side ">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          <ul className="menu p-4  min-h-full  text-white YsabeauSC w-full  flex items-center justify-center navbg fixed overflow-scroll ">
            <button
              onClick={closeDrawer}
              className="text-white call-modal-close "
            >
              <IoIosCloseCircle size="24" />
            </button>
            {navLinks.map((navLink) => (
              <div key={navLink.id}>
                <li className="mb-2">
                  <Link
                    to={`/${navLink.id}`}
                    spy={true}
                    offset={-100}
                    smooth={true}
                    duration={1000}
                    className="hover:text-teal-300 text-xl"
                    onClick={closeDrawer}
                  >
                    {navLink.title}
                  </Link>
                </li>
                <hr className="w-full"></hr>
              </div>
            ))}
            <li>
              {currentUser ? (
                <AdminSide
                  handleLogut={handleLogut}
                  closeDrawer={closeDrawer}
                />
              ) : (
                <></>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
