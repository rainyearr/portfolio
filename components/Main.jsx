import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Typed from "react-typed";

function Main() {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="text-sm tracking-widest text-gray-600 uppercase">
            LET'S BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4 text-6xl text-gray-700">
            Hi, I'm <span className="text-[#5651e5]">Rain</span>
          </h1>
          <h1 className="py-2 text-2xl text-gray-700 md:text-4xl">
            An Aspiring Front-End Web Developer
          </h1>
          {/* <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            An aspiring web-developer looking to combine my academic learnings
            with practical knowledge and skills from the industry. Passionate
            and eager to learn new things as well as to be an asset to the
            company through system development.
          </p> */}
          <h1 className="py-4 text-2xl font-bold text-gray-700 sm:text-2xl md:text-3xl">
            I have experiences with{" "}
            <span className="text-[#5651e5]">
              <Typed
                className="text-[#5651e5] pl-2 text-2xl sm:text-2xl md:text-3xl font-extrabold md:pl-4"
                strings={["React", "Next JS", "Tailwind CSS", "UI/UX Design"]}
                typeSpeed={120}
                backSpeed={140}
                loop
              />
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Main;
