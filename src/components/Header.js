import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/img/logo.png";
import { ActiveStyles, NotActiveStyles } from "../utils/styles";
import { FaCrown } from "react-icons/fa";
import { useStateValue } from "../context/StateProvider";
import { getAuth } from "firebase/auth";
import { app } from "../config/firebase.config";
import { motion } from "framer-motion";
import { DiAptana } from "react-icons/di";

function Header() {
  const [{ user }, dispatch] = useStateValue();

  const [dropDown, setDropDown] = useState(false);

  const navigate = useNavigate();

  const logOut = () => {
    const firebaseAuth = getAuth(app);
    firebaseAuth
      .signOut()
      .then(() => {
        window.localStorage.setItem("auth", "false");
      })
      .catch((err) => {
        console.log(err);
      });
    navigate("/login", { replace: true });
  };
  return (
    <header
      onMouseLeave={() => setDropDown(false)}
      className="flex items-center w-ful p-4 md:py-2 md:px-6"
    >
      <NavLink to="/">
        <img className="w-16" src={logo} alt="" />
      </NavLink>
      <ul className="flex items-center justify-center ml-7">
        <li className="mx-5 text-lg">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? ActiveStyles : NotActiveStyles
            }
          >
            Home
          </NavLink>
        </li>
        <li className="mx-5 text-lg">
          <NavLink
            to={"/musics"}
            className={({ isActive }) =>
              isActive ? ActiveStyles : NotActiveStyles
            }
          >
            Music
          </NavLink>
        </li>
        <li className="mx-5 text-lg">
          <NavLink
            to={"/premium"}
            className={({ isActive }) =>
              isActive ? ActiveStyles : NotActiveStyles
            }
          >
            Premium
          </NavLink>
        </li>
        <li className="mx-5 text-lg">
          <NavLink
            to={"/contact"}
            className={({ isActive }) =>
              isActive ? ActiveStyles : NotActiveStyles
            }
          >
            Contact Us
          </NavLink>
        </li>
      </ul>

      <div
        onMouseEnter={() => setDropDown(true)}
        className="flex items-center ml-auto cursor-pointer gap-2 relative"
      >
        <img
          className=" w-12 h-12 min-w-[44px] object-cover rounded-full shadow-lg "
          src={user?.user?.imageURL}
          alt=""
          // onClick={() => setDropDown(!dropDown)}
        />

        <div className="flex flex-col">
          <p className="text-textColor hover:text-headingColor font-semibold">
            {user?.user?.name}
          </p>
          <p className="flex items-center gap-2 text-xs text-gray-500 font-normal">
            Premium Member
            <FaCrown className="text-sm -ml-1 text-yellow-500" />
          </p>
        </div>

        {dropDown && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 20 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute flex flex-col z-10 top-10 p-3 right-0 w-275 gap-2 bg-card shadow-lg rounded-lg backdrop-blur-sm"
          >
            <NavLink to="/userProfile">
              <p className="text=base text-textColor hover:font-semibold duration-150 transition-all ease-in-out">
                Profile
              </p>
            </NavLink>

            <NavLink to="/useFavorite">
              <p className="text=base text-textColor hover:font-semibold duration-150 transition-all ease-in-out">
                My Favorites
              </p>
            </NavLink>

            {user?.user?.role === "admin" && (
              <>
                <NavLink to="/dashboard/">
                  <p className="text=base text-textColor hover:font-semibold duration-150 transition-all ease-in-out">
                    Dashboard
                  </p>
                </NavLink>
              </>
            )}

            <hr />

            <p
              className="text=base text-textColor hover:font-semibold duration-150 transition-all ease-in-out"
              onClick={logOut}
            >
              Sign Out
            </p>
          </motion.div>
        )}
      </div>
    </header>
  );
}

export default Header;
