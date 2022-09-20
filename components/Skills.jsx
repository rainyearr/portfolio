import React from "react";
import html from "../public/assets/portfolio/html.png";
import css from "../public/assets/portfolio/css.png";
import javascipt from "../public/assets/portfolio/javascript.png";
import react from "../public/assets/portfolio/react.png";
import tailwind from "../public/assets/portfolio/tailwind.png";
import nextjs from "../public/assets/portfolio/nextjs.png";
import Image from "next/image";

const Experience = () => {
  const tech = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascipt,
      title: "JAVASCRIPT",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 6,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
  ];
  return (
    <div name="skills" className="w-full h-screen">
      <div className="flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto text-gray-500">
        <div>
          <p className="inline p-2 text-4xl font-bold text-gray-700">
            Experience
          </p>
          <p className="py-6 text-gray-500">
            These are the technologies I have worked with
          </p>
        </div>
        <div className="grid w-full grid-cols-2 gap-8 px-12 py-8 text-center sm:grid-cols-3 sm:px-0">
          {tech.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <Image
                width="55px"
                height="55px"
                className="w-20 mx-auto"
                src={src}
                alt=""
              />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
