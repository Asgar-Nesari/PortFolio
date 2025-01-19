import React from "react";
import Bookstore from "../../public/Bookstore.jpg";
import TextUtils from "../../public/Textutils.png";
import PWD from "../../public/pwd.jpg";
import node from "../../public/node.png";
import python from "../../public/python.png";
import react from "../../public/react.png";

function Projects() {
  return (
    <>
      <div
        name="Projects"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
      >
        <div>
          <h1 className="text-3xl font-bold mb-5">PROJECTS</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-5">
            <div className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300">
              <img
                src={Bookstore}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt=""
              />
              <div>
                <div className="font-bold text-lg m-2 px-2">BookStore</div>
                <p className="px-2 text-gray-700">
                  It is a Bookshop where customer can explore and buy a variety
                  of books.
                </p>
              </div>
              <div className="px-6 py-4 space-x-3 justify-around">
                <a
                  href="https://github.com/Asgar-Nesari/Bookstore"
                  target="_blank"
                  className="bg-green-500 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded "
                >
                  Source Code
                </a>
              </div>
            </div>

            <div className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300">
              <img
                src={TextUtils}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt=""
              />
              <div>
                <div className="font-bold text-lg m-2 px-2">TextUtils</div>
                <p className="px-2 text-gray-700">
                  Possible text Editing with the given buttons.
                </p>
              </div>
              <div className="px-6 py-4 space-x-3 justify-around">
                <a
                  href="https://github.com/Asgar-Nesari/TextUtils"
                  target="_blank"
                  className="bg-green-500 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded "
                >
                  Source Code
                </a>
              </div>
            </div>

            <div className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300">
              <img
                src={PWD}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt=""
              />
              <div>
                <div className="font-bold text-lg m-2 px-2">PWD Skills</div>
                <p className="px-2 text-gray-700">
                  Customer can explore the variety of courses.
                </p>
              </div>
              <div className="px-6 py-4 space-x-3 justify-around">
                <a
                  href="https://asgar-nesari.github.io/PW-Skill/"
                  target="_blank"
                  className="bg-green-500 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded "
                >
                  Open
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
