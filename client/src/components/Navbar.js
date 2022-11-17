import React from "react";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Candidates" },
    { name: "Voting", link: "/voting" },
    { name: "About", link: "/#about" },
  ];
  let [open, setOpen] = useState(false);
  let [close, setClose] = useState(true);

  const activeLink =
    "underline underline-offset-8 decoration-slate-400 cursor-default";
  const normalLink = "";

  return (
    <div>
      {/* start header */}

      <div className="w-full h-[64px] fixed top-0 z-40">
        <div className="md:flex h-[56px] place-content-end shadow-md py-4 md:px-10 px-7 font-prata bg-[#21201D]">
          <div
            onClick={() => setOpen(!open)}
            className="text-2xl absolute right-8 top-5 pb-3 cursor-pointer md:hidden"
          >
            <ion-icon
              name={open ? "close" : "menu"}
              style={{ color: "#D4A976" }}
            ></ion-icon>
          </div>

          <ul
            className={`md:flex shadow-md md:shadow-none md:items-center md:pb-0 pb-4 absolute md:static bg-[#21201D] text-[#D4A976] mx-4  md:z-40 z-[-1] left-0 w-[91vw] rounded-xl md:w-auto md:pl-0 pl-9 md:pt-0 pt-9 transition-all duration-300 ease-in ${
              open ? "opacity-100" : "opacity-0"
            } md:opacity-100 text-xl`}
          >
            <li
              key="1"
              className="ml-4 md:ml-8 md:my-0 my-4 px-1 py-1 hover:text-[#ffd39c]"
            >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? normalLink : normalLink
                }
              >
                <p title>{"Home"}</p>
              </NavLink>
            </li>

            <li
              key="1"
              className="ml-4 md:ml-8 md:my-0 my-4 px-1 py-1 hover:text-[#ffd39c]"
            >
              <NavLink
                to="/vote"
                className={({ isActive }) =>
                  isActive ? normalLink : normalLink
                }
              >
                <p title>{"Voting"}</p>
              </NavLink>
            </li>

            <li
              key="1"
              className="ml-4 md:ml-8 md:my-0 my-4 px-1 py-1 relative transition-all duration-200 ease-in justify-center "
              onClick={() => setClose(!close)}
            >
              <div className="flex w-full h-full">
                <Link to="#" className="hover:text-[#ffd39c]">
                  <p>{"Candidates"}</p>
                </Link>
                <div className="invisible">
                  <ion-icon
                    name={close ? "chevron-up" : "chevron-down"}
                  ></ion-icon>
                </div>

                <div className=" md:absolute md:right-0 top-2 cursor-pointer ">
                  <ion-icon
                    name={close ? "chevron-up" : "chevron-down"}
                  ></ion-icon>
                </div>
              </div>

              <div
                className={
                  close
                    ? "hidden "
                    : "flex flex-col md:absolute text-sm bg-[#21201D] md:shadow-xl w-full px-5 py-5 rounded-b-md md:left-0 transition-all mt-[0.8rem] -z-30 "
                }
              >
                <ul>
                  <li className="hover:text-[#ffd39c] transition-all duration-300">
                    <Link to="/candid1">Kadek Ninda N.P</Link>
                  </li>
                  <li className="mt-3 hover:text-[#ffd39c] transition-all duration-300">
                    <Link to="/candid2">Konang Tyagazain N.</Link>
                  </li>
                  <li className="mt-3 hover:text-[#ffd39c] transition-all duration-300">
                    <Link to="/candid3">Billy Fahd Qodama</Link>
                  </li>
                </ul>
              </div>
            </li>

            <li
              key="1"
              className="ml-4 md:ml-8 md:my-0 my-4 px-1 py-1 hover:text-[#ffd39c]"
            >
              <NavLink
                to="/webteam"
                className={({ isActive }) =>
                  isActive ? normalLink : normalLink
                }
              >
                <p title>{"About"}</p>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
