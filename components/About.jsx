import Image from "next/image";
import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import HeroImage from "../public/assets/portfolio/heroImage.jpg";
import { Link } from "react-scroll";

const About = () => {
  return (
    <div name="about" className="w-full h-screen">
      <div className="flex flex-col items-center justify-start h-full max-w-screen-lg px-4 mx-auto md:flex-row">
        <div className="flex flex-col justify-center w-full h-full">
          <h2 className="inline p-2 text-4xl font-bold text-gray-700">About</h2>
          <p className="w-full py-4 text-xl text-gray-500 md:text-xl">
            An aspiring web-developer looking to combine my academic learnings
            with practical knowledge and skills from the industry. Passionate
            and eager to learn new things as well as to be an asset to the
            company through system development.
          </p>
          <div>
            <Link
              to="projects"
              smooth
              duration={500}
              className="flex items-center px-6 py-3 my-2 text-white rounded-md cursor-pointer group w-fit bg-gradient-to-r from-cyan-500 to to-blue-500"
            >
              Portfolio
              <span className="duration-300 group-hover:rotate-90">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        {/* <div>
          <Image
            src={HeroImage}
            height="70%"
            width="40%"
            className="rounded-2xl mx-auto w-[400px] md:w-[400px] p-3 hidden md:flex"
          />
        </div> */}
      </div>
    </div>
  );
};

export default About;
