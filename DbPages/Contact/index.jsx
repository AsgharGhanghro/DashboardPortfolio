// /* eslint-disable no-undef */
/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
// import SplashCursor from './/../Skills/SplashCursor';
import { SiMinutemailer } from "react-icons/si";
import { TbPassword } from "react-icons/tb";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// @ts-ignore
import RINGS from "vanta/src/vanta.rings";

const Contact = () => {
  const [rings, setRINGS] = useState(null);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  
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

 
  const collectData = async (data) => {
    try {
      if (!data.userName || !data.email || !data.password) {
        toast.error("Please fill out all fields!");
        return;
      }

      const res = await fetch("http://localhost:4000/register", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const result = await res.json();
      if (result) {
        toast.success("Successfully!");
        navigate("/intrested");
      }
    } catch (error) {
      toast.error("Error submitting form. Try again!");
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <div className="w-screen bg-white text-black  pt-20 md:pt-36 ml-3" >
        {/* <h3 className="text-3xl font-bold text-center pb-4">
          Contact
        </h3> */}
        <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 lg:grid-cols-1 ">
          
          <div className="contact shadow-2xl mb-5 rounded-md md:px-10 py-6 px-1  bg-slate-100 backdrop-blur-md mx-auto">
            <form onSubmit={handleSubmit(collectData)} className="bg-slate-100">
              <h2 className="font-bold text-xl text-center pb-8">Get In Touch</h2>

             
              <label className="input focus:outline-none bg-white shadow-lg flex items-center gap-2 m-3">
                <PersonRoundedIcon className="text-2xl text-black" />
                <input
                  type="text"
                  className="text-black"
                  placeholder="UserName"
                  {...register("userName", { required: true, maxLength: 20 })}
                />
              </label>
              {errors.userName && <span className="text-red-700 text-sm ml-3">UserName is Required</span>}

              
              <label className="input focus:outline-none  bg-white shadow-lg flex items-center gap-2 m-3">
                <SiMinutemailer className="text-2xl text-black" />
                <input
                  type="email"
                  className="text-black"
                  placeholder="Email"
                  {...register("email", { required: true, maxLength: 30 })}
                />
              </label>
              {errors.email && <span className="text-red-700 text-sm ml-3">Email is Required</span>}

             
              <label className="input focus:outline-none text-black bg-white shadow-lg flex items-center gap-2 m-2">
                <TbPassword className="text-xl text-black" />
                <input
                  type="password"
                  className="text-black"
                  placeholder="Password"
                  {...register("password", { required: true, maxLength: 20,minLength:5})}
                />
              </label>
              {errors.password && <span className="text-red-700 text-sm ml-3 ">Password is Required & minL is 4</span>}

             
              <div className="pb-3 mt-6">
                <input
                  className="text-black ml-3 cursor-pointer font-bold text-xl py-2 px-6 rounded-lg shadow-2xl bg-white transform transition duration-500 hover:scale-110 hover:text-blue-bg-blue-600"
                  type="submit"
                  value="Submit"
                />
                <ToastContainer />
              </div>
            </form>
          </div>
        </div>
      </div>
    {/* <SplashCursor /> */}
    </>
  );
};

export default Contact;

