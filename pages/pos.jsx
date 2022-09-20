import Image from "next/image";
import React from "react";
import pos from "../public/assets/projects/pos.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import ReactPlayer from "react-player";

const crypto = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={pos}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Point of Sales</h2>
          <h3>React JS / Vanilla JS/ Custom CSS Components</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This website is a project-based internship composed by a team from
            different sections. Each are tasked with different part. This is a
            point of sales website of a milktea shop. I was assigned on the
            products page. Implementing designs and connecting it to the
            backend. Ensuring that the items are displayed correctly and working
            properly.
          </p>
          <a
            href="https://github.com/Meph27/Sinceretea-POS-Client"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="https://youtu.be/xq6ejvtYO4k"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Demo</button>
          </a>
        </div>
        <div className="col-span-4 p-4 shadow-xl md:col-span-1 shadow-gray-400 rounded-xl">
          <div className="p-2">
            <p className="pb-2 font-bold text-center">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1 ">
              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" /> Custom CSS
              </p>
              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
            </div>
          </div>
        </div>
        <a href="/#projects">
          <button className="px-8 py-2 mt-4 bg-gray-500">Back</button>
        </a>
        {/* <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link> */}
      </div>
      {/* <div className="w-full">
        <ReactPlayer url={"https://youtu.be/xq6ejvtYO4k"} />
      </div> */}
    </div>
  );
};

export default crypto;
