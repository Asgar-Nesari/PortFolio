import React, { useState } from "react";
import pic from "../../public/Profile2.jpeg";
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItem = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Projects",
    },
    {
      id: 4,
      text: "Language",
    },
    {
      id: 5,
      text: "Tools",
    },
    {
      id: 6,
      text: "Links",
    },
    {
      id: 7,
      text: "Contact",
    },
  ];
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md h-16 fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="flex justify-between h-16 items-center">
          <div className="flex space-x-2">
            <img src={pic} className="h-12 w-12 rounded-full" alt="" />
            <h1 className="font-semibold text-xl cursor-pointer">
              Asga<span className="text-blue-500">r</span>
              <p className="text-sm">MERN Stack Developer</p>
            </h1>
          </div>

          {/* desktop Navbar */}
          <div>
            <ul className=" hidden md:flex space-x-8">
              {navItem.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 cursor-pointer"
                  key={id}
                >
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
            <div onClick={() => setMenu(!menu)} className="md:hidden">
              {menu ? <IoMdClose size={24} /> : <MdOutlineMenu size={24} />}
            </div>
          </div>
        </div>
        {/* Mobile Navbar */}
        {menu && (
          <div className="bg-white">
            <ul className=" md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl">
              {navItem.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 cursor-pointer font-semibold"
                  key={id}
                >
                  <Link
                  onClick={() => setMenu(!menu)}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
