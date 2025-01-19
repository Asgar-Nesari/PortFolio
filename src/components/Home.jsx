import React from "react";
import pic from "../../public/Own.jpeg";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";

import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-xl md:text-4xl">
              <h1>Hello , I'm a </h1>
              {/* <span className="text-red-600 font-bold">Developer</span> */}
              <ReactTyped
                className="text-red-600 font-bold"
                strings={["Developer","Programmer","Coder"]}
                typeSpeed={40}
                backSpeed={40}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
            I am a passionate and skilled MERN stack web developer with expertise in building dynamic, user-friendly, and scalable web applications. With hands-on experience in MongoDB, Express.js, React, and Node.js, I specialize in crafting full-stack solutions that combine efficient backend logic with intuitive frontend interfaces.
            </p>
            <br />
            {/* Social media Icon */}
            <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 items-center">
              <div className="space-y-2">
                <h1 className="font-bold">Available on</h1>
                <ul className="flex space-x-5 ">
                  <li>
                    <a href="https://www.linkedin.com/feed/" target="_blank">
                    <FaLinkedin className="text-xl cursor-pointer md:text-3xl hover:scale-110 duration-200 rounded-lg border-[2px]" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/Asgar-Nesari" target="_blank">
                    <FaGithub className="text-xl cursor-pointer md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/asgar_nesari?utm_source=qr&igsh=a2VkbjU0bnNlcmhv" target="_blank">
                    <FaInstagramSquare className="text-xl cursor-pointer md:text-3xl hover:scale-110 duration-200 rounded-lg border-[2px]" />
                    </a>
                  </li>
                  <li>
                    <a href="https://web.telegram.org/a/" target="_blank">
                    <FaTelegram className="text-xl cursor-pointer md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                    </a>
                  </li>
                </ul>
              </div>

              {/* current working */}
              <div className="space-y-2">
                <h1 className="font-bold">Currently working on</h1>
                <div className="flex space-x-5 ">
                  <SiMongodb className="text-xl cursor-pointer md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <SiExpress className="text-xl cursor-pointer md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <FaReact className="text-xl cursor-pointer md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <FaNodeJs className="text-xl cursor-pointer md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img src={pic} alt="My Profile pic" className="rounded-full md:w-[400px] md:h-[400px]" />
          
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Home;
