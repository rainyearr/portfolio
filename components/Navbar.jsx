import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "skills",
    },
    {
      id: 4,
      link: "projects",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <div className="fixed flex items-center justify-end w-full h-20 px-4 text-white bg-[#ecf0f3] md:justify-center z-10">
      {/* <div>
        <h1 className="ml-2 text-5xl font-signature">Rain</h1>
      </div> */}

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 font-medium text-gray-500 capitalize duration-200 cursor-pointer hover:scale-105"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="z-10 pr-4 text-gray-500 cursor-pointer md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-screen text-gray-500 bg-[#ecf0f3]">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 py-6 text-4xl capitalize cursor-pointer"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
