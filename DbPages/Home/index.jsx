/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect, useState } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInRoundedIcon from "@mui/icons-material/LinkedIn";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import image from "./images/Mypic_RemBg.png";
import ResumeModel from './ResumeModel';
import Typewriter from "typewriter-effect";
//@ts-ignore
import RINGS from "vanta/src/vanta.rings";
import Footer from "./Footer";
import { TbBrandFiverr } from "react-icons/tb";


const Home = () => {
  const [rings, setRINGS] = useState(null);
  useEffect(() => {
    if (!rings) {
      setRINGS(
        RINGS({
          el: "#your-element-selector",
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
        })
      );
    }
    return () => {
      if (rings) rings.destroy();
    };
  }, [rings]);

  return (
    <>
      <div className="w-screen  md:pl-16 " id="your-element-selector">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 ">
          <div className="container  pl-20 md:pt-14 pr-5  mt-14 text-white pb-16 md:pb-24 ">
            <p className="">
              Hello Its ,{" "}
              <span className="text-xl font-bold text-blue-600">
                Ali Asghar
              </span>
            </p>
            <p className="flex pt-4 text-xl  gap-2">
              I am a{" "}
              <span className="text-xl md:text-2xl font-bold text-blue-600">
                <Typewriter
                  options={{
                    strings: [
                      "Freelancer",
                      "Mern Stack Developer",
                      "Programmer",
                    ],
                    autoStart: true,
                    loop: true,

                  }}
                />
              </span>
            </p>
            <p className="pt-5  pr-3 text-justify">
              I am a skilled MERN stack developer passionate about building
              dynamic, scalable web applications. Proficient in MongoDB,
              Express.js, React.js, and Node.js, I create seamless full-stack
              solutions with responsive UIs and robust back-end systems. I
              specialize in designing RESTful APIs, optimizing databases, and
              deploying cloud-based applications. With a focus on clean,
              maintainable code and user-centric design, I bring ideas to life
              while ensuring performance and reliability.{" "}
              <span className="hidden md:block">
                {" "}
                Let’s collaborate to turn your vision into a powerful digital
                experience!
              </span>
            </p>

            <div className="pt-3 ">
              <a href="https://www.facebook.com/">
                <FacebookRoundedIcon
                  size={30}
                  className="mr-3 text-blue-500 cursor-pointer hover:text-blue-600  transsfrom transition duration-500  hover:scale-150"
                />
              </a>
              <a href="https://www.instagram.com/">
                <InstagramIcon
                  size={30}
                  className="text-pink-600 mr-3 cursor-pointer hover:text-pink-600  transsfrom transition duration-500  hover:scale-150"
                />
              </a>
              <a href="https://www.twitter.com/">
                <TwitterIcon
                  size={30}
                  className="text-black cursor-pointer mr-3 hover:text-black  transsfrom transition duration-500  hover:scale-150"
                />
              </a>
              <a href="https://www.linkedin.com/in/ali-asghar-a730322bb/">
                <LinkedInRoundedIcon
                  size={30}
                  className="text-blue-400 cursor-pointer mr-3 hover:text-blue-400  transsfrom transition duration-500  hover:scale-150"
                />
              </a>
              <a href="https://www.fiverr.com/asghar_ned/build-website-development-custom-website-design-as-mern">
                <TbBrandFiverr
                  size={30}
                  className="text-green-500 cursor-pointer mt-[-30px] ml-36 hover:text-green-500  transsfrom transition duration-500  hover:scale-150"
                />
              </a>
              <div className="">
              <button className="text-white  mt-6 md:hidden font-bold text-xl py-1 px-2 rounded-lg shadow-2xl bg-blue-600 border transform transition duration-500  hover:scale-110 hover:text-blue-600 hover:bg-black">
                <ResumeModel />
              </button>
               </div>
              <div className="mt-6  ">
                <button className="text-white hidden md:block font-bold text-xl py-2 px-4 rounded-lg shadow-2xl bg-blue-600 border transform transition duration-500  hover:scale-110 hover:text-blue-600 hover:bg-black">
                <ResumeModel />
                </button>
              </div>
            </div>
          </div>

          <div className="">
            <img
              src={image}
              alt=""
              className="absolute -mt-4 -z-10 md:-mt-8 hidden md:block"
            />
          </div>
        </div>
      </div>
      <Footer />
      
    </>
  );
};

export default Home;
