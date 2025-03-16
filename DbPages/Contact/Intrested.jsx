/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// import { MdConnectWithoutContact } from "react-icons/md";

const ContactCard = () => {
  return (
    <div className="bg-slate-100 ">
    <div className="flex items-center w-screen h-screen  justify-center  text-white   ">
      <motion.div
        className=" bg-white p-6 rounded-2xl shadow-2xl ml-16 mr-6 max-w-md text-center"
        // whileHover={{ scale: 1.05 }}
        // transition={{ duration: 0.3 }}
      >
        <h2 className="text-2xl font-bold text-gray-800">Need a Website?</h2>
        <p className="text-gray-600 mt-2">
          If you are interested in a custom website for your business, I can
          create modern, responsive, and high-performing web applications.
        </p>
        <p className="text-gray-600 mt-2">
          I offer MERN Stack Development, Front-End Design, API Integration, and
          more!
        </p>

        <div className="mt-4 mb-4">
          <p className="text-xl font-semibold text-gray-800">Contact me:</p>

          <p 
          className="text-blue-600 hover:text-blue-300 cursor-pointer font-semibold mt-5">
            Watsapp No: 0320-2376159</p>
            
          <a
            href="https://www.fiverr.com/asghar_ned/build-website-development-custom-website-design-as-mern"
            target="Asghar_Fiver"
            className="text-blue-600 hover:text-blue-300 font-semibold "
          >
            Fiverr Profile
          </a>
        </div>

     <Link to='/'>
        <button
          className="mt-4 px-6 py-3  bg-blue-500 text-white font-bold rounded-lg shadow-md transition-transform transform hover:scale-110"
        >
          Home
        </button>
        </Link>
      </motion.div>
    </div>
    </div>
  );
};

export default ContactCard;
