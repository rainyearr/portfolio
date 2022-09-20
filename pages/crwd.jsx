import React from "react";
import propertyImg from "../public/assets/projects/property.jpg";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import CRWD from "../public/assets/projects/CRWD.jpeg";
import mainpage from "../public/assets/projects/mainpage.png";
import signin from "../public/assets/projects/signin.png";
import login from "../public/assets/projects/login.png";

const property = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={CRWD}
          alt="/"
        />
        <div className="z-10 text-white p-2 absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] ">
          <h2>Crowdsourcing Website</h2>
          <h3>Next JS / Typescript / MongoDB</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This project is a part of a personal internship. The project is a
            crowdsourcing app in which users can post software projects. Then
            other users can interact and support the projects by funding.
          </p>
          {/* <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          <button className="px-8 py-2 mt-4 mr-8">Code</button> */}
        </div>
        <div className="col-span-4 p-4 shadow-xl md:col-span-1 shadow-gray-400 rounded-xl">
          <div className="p-2">
            <p className="pb-2 font-bold text-center">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" />
                Next JS
              </p>
              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" />
                Typescript
              </p>
              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" />
                MongoDB
              </p>
              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" />
                Antd Components
              </p>
            </div>
          </div>
        </div>
        <a href="/#projects">
          <button className="px-8 py-2 mt-4 bg-gray-500">Back</button>
        </a>
      </div>
      <div className="max-w-[80%] mx-auto py-10">
        <p className="p-2 pb-10 text-6xl font-bold text-gray-700 ">Main Page</p>
        <div>
          <Image src={mainpage} />
        </div>
        <p className="p-2 pb-10 mt-10 text-6xl font-bold text-gray-700 ">
          Login Page
        </p>
        <div>
          <Image src={login} />
        </div>
        <p className="p-2 pb-10 mt-10 text-6xl font-bold text-gray-700 ">
          Signup Page
        </p>
        <div>
          <Image src={signin} />
        </div>
      </div>
    </div>
  );
};

export default property;
