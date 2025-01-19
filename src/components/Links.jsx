import React from "react";
import Github from "../../public/github.png";
import linkedin from "../../public/linkedin.png";
import instagram from "../../public/instagram.jpg";
import navkri from "../../public/navkri.png";
import telegram from "../../public/telegram.jpg";
import indeed from "../../public/indeed.jpeg";

function Links() {
  return (
    <>
      <hr />
      <div
        name="Links"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10 my-16"
      >
        <div>
          <h1 className="text-3xl font-bold mb-5">Available On</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-7 my-3">
            <a href="https://github.com/Asgar-Nesari" target="_blank">
              <div className="flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] p-1 cursor-pointer hover:scale-110 duration-300 shadow-lg">
                <img
                  src={Github}
                  className="w-[150px]  rounded-full"
                  alt="Social media logo"
                />
                <h1>Github</h1>
              </div>
            </a>

            <a href="https://www.linkedin.com/feed/" target="_blank">
              <div className="flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] p-1 cursor-pointer hover:scale-110 duration-300 shadow-lg">
                <img
                  src={linkedin}
                  className="w-[150px]  rounded-full"
                  alt="Social media logo"
                />
                <h1>linkedin</h1>
              </div>
            </a>

            <a
              href="https://www.instagram.com/asgar_nesari?utm_source=qr&igsh=a2VkbjU0bnNlcmhv"
              target="_blank"
            >
              <div className="flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] p-1 cursor-pointer hover:scale-110 duration-300 shadow-lg">
                <img
                  src={instagram}
                  className="w-[150px]  rounded-full"
                  alt="Social media logo"
                />
                <h1>Instagram</h1>
              </div>
            </a>

            <a href="https://www.naukri.com/mnjuser/homepage" target="_blank">
              <div className="flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] p-1 cursor-pointer hover:scale-110 duration-300 shadow-lg">
                <img
                  src={navkri}
                  className="w-[150px]  rounded-full"
                  alt="Social media logo"
                />
                <h1>Navkri</h1>
              </div>
            </a>

            <a href="https://web.telegram.org/a/" target="_blank">
              <div className="flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] p-1 cursor-pointer hover:scale-110 duration-300 shadow-lg">
                <img
                  src={telegram}
                  className="w-[150px]  rounded-full"
                  alt="Social media logo"
                />
                <h1>Telegram</h1>
              </div>
            </a>

            <a href="https://in.indeed.com/" target="_blank">
              <div className="flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] p-1 cursor-pointer hover:scale-110 duration-300 shadow-lg">
                <img
                  src={indeed}
                  className="w-[150px]  rounded-full"
                  alt="Social media logo"
                />
                <h1>Indeed</h1>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Links;
