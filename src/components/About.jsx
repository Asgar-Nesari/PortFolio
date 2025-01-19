import React from "react";

function About() {
  return (
    <>
      <div name="About" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
          I’m a dedicated MERN stack developer with a passion for building web
          applications that are both functional and visually appealing. I
          specialize in creating full-stack solutions using MongoDB, Express.js,
          React, and Node.js.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">Education</h1>
        <span>
          MCA . D Y Patil Agricultural and Technical University Talsande .
          2023-2025
        </span>
        <br /><br />
        <h1 className="text-green-600 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <span>
          Proficient in MERN stack.Experienced with tools like VS Code , Postman
          , NetBean.Excellent problem-solving skills,Leadership and much more.
        </span>

        <br /><br />
        <h1 className="text-green-600 font-semibold text-xl">
         Awards & Certificate
        </h1>
        <span>
          <ul>
            <li>TECHNOTSAV - 2024 [ National level Technival Event ]</li>
            <li>Greet Learning [ Front End Development ]</li>
          </ul>
        </span>

        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Mission Statement
        </h1>
        <span>
        To design and develop innovative, user-friendly web applications that solve real-world problems, with the power of the MERN stack. I aim to deliver scalable, efficient, and high-quality solutions that enhance user experiences and drive business success, while continuously learning and evolving in the ever-changing tech landscape.
        </span>
      </div>
    </>
  );
}

export default About;
