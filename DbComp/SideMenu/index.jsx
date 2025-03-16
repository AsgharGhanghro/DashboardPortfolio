/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
// import image from '../../DbPages/Home/images/Mypic_RemBg.png';
import { Home, FileUser, Menu, X ,GalleryHorizontalEnd ,GraduationCap,Hourglass,Server,CircleUser,MessageCircleMore} from "lucide-react";
import Feedback from "../../DbPages/Home/Feedback";


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (

    <>
    <div className=" fixed top-0 bottom-0 left-0 z-10">
      <div
        className={`${
          isOpen ? "w-60 " : "w-14 "
        } bg-blue-600 h-screen rounded-tr-3xl shadow-lg  text-white duration-300 md:flex flex-col`}
      >
        <button
          className="p-2 focus:outline-none hover:bg-blue-500 "
          onClick={toggleSidebar}
          aria-label="Toggle Sidebar"
        >
          {isOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
        <div className="flex flex-col mt-8 space-y-4 translate-x-0">

          <a
            href="/"
            className="flex items-center p-2 hover:bg-blue-500 rounded-md"
          >
            <Home size={24} />
            {isOpen && <span className="ml-5">Home</span>}
          </a>

          <a
            href="/grates"
            className="flex items-center p-2 hover:bg-blue-500  rounded-md"
          >
            <FileUser  size={24} />
            {isOpen && <span className="ml-4">Grates</span>}
          </a>

          <a
            href="/education"
            className="flex items-center p-2 hover:bg-blue-500  rounded-md"
          >
            <GraduationCap size={24} />
            {isOpen && <span className="ml-4">Education</span>}
          </a>

          <a
            href="/project"
            className="flex items-center p-2 hover:bg-blue-500  rounded-md"
          >
          
            <Hourglass   size={24} />
            {isOpen && <span className="ml-4">Project</span>}
          </a>

          <a
            href="/service"
            className="flex items-center p-2 hover:bg-blue-500  rounded-md"
          >
          
            <Server   size={24} />
            {isOpen && <span className="ml-4">Service</span>}
          </a>
          
          <a
            href="/skill"
            className="flex items-center p-2 hover:bg-blue-500  rounded-md"
          >
          
             <GalleryHorizontalEnd    size={24} />
            {isOpen && <span className="ml-4">Skills</span>}
          </a>

          <a
            href="/contact"
            className="flex items-center p-2 hover:bg-blue-500  rounded-md"
          >
          
            <CircleUser    size={24} />
            {isOpen && <span className="ml-4">Contact</span>}
          </a>
          
        </div>

        <div className="mt-4 md:mt-14 focus:outline-none hover:bg-blue-500  ">
        <a
            href="#"
            className="flex items-center p-2 hover:text-white  hover:bg-blue-500  rounded-md"
          >
          
            <MessageCircleMore  size={27} />
            {isOpen && <span className="-ml-3 "><Feedback /></span>}

          </a>
        
        </div>
      </div>

      {/* <nav className=' fixed -z-10 hidden md:block m-5 top-0 left-20 right-3 bg-blue-700 rounded-sm '>

    <div className='container px-4 flex justify-between items-center h-16 shadow-2xl '>
        <h className='text-2xl text-black font-bold px-6 py-2 pl-24 rounded-md cursor-pointer hover:bg-blue-700'>PortFolio </h> */}
        {/* <h className='text-2xl text-black font-bold px-6 py-2 rounded-md cursor-pointer hover:bg-blue-700'>Ali Asghar </h> */}
       {/* <img src={image} alt="pic" className="h-14 w-14 rounded-full bg-black p-2 -mr-6" /> */}

     {/* </div>
    </nav> */}
    </div>
   
    </>
  );
};

export default Sidebar;

