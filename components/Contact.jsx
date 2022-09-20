import React from "react";

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen p-4 text-black ">
      <div className="flex flex-col justify-center h-full max-w-screen-lg p-4 mx-auto">
        <div className="pb-8">
          <p className="inline pb-4 text-4xl font-bold border-gray-500 ">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>
        <div className="flex items-center justify-center">
          <form
            action="https://getform.io/f/39b73775-30c4-4597-b7fb-a82e80e1efff"
            method="POST"
            className="flex flex-col w-full p-4 md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              className="p-4 text-gray-500 border-2 border-gray-400 rounded-md focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your Email"
              className="p-4 my-4 text-gray-500 border-2 border-gray-400 rounded-md focus:outline-none"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Enter your Message"
              className="p-4 text-gray-500 border-2 border-gray-400 rounded-md focus:outline-none"
            ></textarea>
            <button className="flex items-center px-6 py-3 mx-auto my-8 text-white duration-300 rounded-md bg-gradient-to-b from-cyan-500 to to-blue-500 hover:scale-110">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
