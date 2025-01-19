import React from "react";
import html from "../../public/html.jpg";
import css from "../../public/css.png";
import js from "../../public/js.png";
import java from "../../public/java2.png";
import c from "../../public/c.png";
import python from "../../public/python2.png";
import express from "../../public/express2.png";
import mongodb from "../../public/mongodb.png";
import node from "../../public/node.png";
import react from "../../public/react.png";

import bootstrap from "../../public/bootstrap.png"
import tailwindcss from "../../public/tailwind.png"
import Mysql from "../../public/mysql.png"

function Language() {
  const FrontEnd = [
    {
      id: 1,
      logo: html,
      name: "HTML",
    },

    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: js,
      name: "JavaScript",
    },
    {
      id: 4,
      logo: react,
      name: "React.js",
    },
    {
      id: 5,
      logo: bootstrap,
      name: "Bootstrap",
    },
    {
      id: 6,
      logo: tailwindcss,
      name: "Tailwind CSS",
    },
  ];

  const Backend = [
    {
      id: 1,
      logo: node,
      name: "Node.js",
    },
    {
      id: 2,
      logo: express,
      name: "Express.js",
    },
    {
      id: 3,
      logo: java,
      name: "Java",
    },
    {
      id: 4,
      logo: python,
      name: "Python",
    },
    {
      id: 5,
      logo: c,
      name: "C#",
    },
  ];

  const Database = [
    {
      id: 1,
      logo: mongodb,
      name: "MongoDB",
    },
    {
      id: 2,
      logo: Mysql,
      name: "Mysql",
    },
  ];
  return (
    <>
      <div
        name="Language"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10 my-16"
      >
        <div>
          <h1 className="text-3xl font-bold mb-5">Languages</h1>
          <h1 className="font-semibold">Frontend :</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-7 my-3">
            {FrontEnd.map(({ id, logo, name }) => (
              <div
                key={id}
                className="flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] p-1 cursor-pointer hover:scale-110 duration-300 shadow-lg"
              >
                <img src={logo} className="w-[150px]  rounded-full" alt="" />
                <div>{name}</div>
              </div>
            ))}
          </div>
          <br />
          <h1 className="font-semibold">Backend</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-7 my-3">
            {Backend.map(({ id, logo, name }) => (
              <div
                key={id}
                className="flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] p-1 cursor-pointer hover:scale-110 duration-300 shadow-lg"
              >
                <img src={logo} className="w-[150px]  rounded-full" alt="" />
                <div>{name}</div>
              </div>
            ))}
          </div>
          <br />
          <h1 className="font-semibold">DataBase</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-7 my-3">
            {Database.map(({ id, logo, name }) => (
              <div
                key={id}
                className="flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] p-1 cursor-pointer hover:scale-110 duration-300 shadow-lg"
              >
                <img src={logo} className="w-[150px]  rounded-full" alt="" />
                <div>{name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Language;
