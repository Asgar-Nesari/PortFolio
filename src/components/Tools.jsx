import React from "react";
import VScode from "../../public/vs.jpg"
import NetBean from "../../public/netBeans.png"
import SourceTree from "../../public/sourcetree.jpeg"
import Postman from "../../public/Postman.png"

function Tools() {
  const Tools = [
    {
      id: 1,
      logo: VScode,
      name: "VS Code",
    },
    {
      id: 2,
      logo: NetBean,
      name: "NetBean",
    },
    {
      id: 3,
      logo: SourceTree,
      name: "SourceTree",
    },
    {
      id: 4,
      logo: Postman,
      name: "Postman",
    },
  ];
  return (
    <>
    <hr />
      <div
        name="Tools"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10 my-16 "
      >
        <div>
           <h1 className="text-3xl font-bold mb-5">Tools</h1>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-7 my-3 ">
            {Tools.map(({ id, logo, name }) => (
              <div
                key={id}
                className="flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] p-1 cursor-pointer hover:scale-110 duration-300 shadow-lg bg-slate-400"
              >
                <img src={logo} className="w-[150px]  rounded-full" alt="" />
                <div className="text-slate-800">{name}</div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Tools;
