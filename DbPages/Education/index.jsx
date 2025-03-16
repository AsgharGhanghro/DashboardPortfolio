import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../Home/Footer";
import FeedbackEdu from "./FeedbackEdu";

const Education = () => {
  const education = [
    {
      school: "Anwar-u-Mustafa (2010-15)",
      degree: "Fifth",
      description:
        "I started a new journey of my life in Anwar-ul-Mustafa, and it changed my life. I passed the fifth class from it.",
    },
    {
      school: "Paras Science College (2016-21)",
      degree: "Sixth",
      description:
        "After Anwar school, I studied at Paras College Kandiaro, which made me better than before.",
    },
    {
      school: "Paras Science College (2021-23)",
      degree: "Engineering",
      description:
        "I continued my studies in the same college till I passed my intermediate. I experienced the best days of my life in this college with amazing teachers.",
    },
    {
      school: "NED University TIEST (2023-27)",
      degree: "Computer Science",
      description:
        "Now I am a student at NED University, Tharparkar Mithi, in the CS department. Here, I am learning valuable life experiences.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },

    ],
  };

  return (
    <>
      <div className="w-screen bg-slate-100 pt-6 pb-28 px-6 md:px-16">
        <h3 className="text-3xl font-bold text-black text-center pt-6 mb-6 md:pt-16">Education</h3>

        <Slider {...settings}>
          {education.map((item, index) => (

            <div key={index} className="p-4 mb-2  ">
              <div className="bg-white shadow-lg ml-8  cursor-pointer rounded-lg p-10 md:p-7 text-center transform transition duration-300 hover:scale-105">

                <h2 className="text-xl font-semibold mb-2 md:py-3">{item.school}</h2>
                <p className="text-blue-600 font-medium mb-3 md:py-3">{item.degree}</p>
                <p className="text-gray-600 text-sm mb-4 md:py-3">{item.description}</p>
                <button className="text-white bg-blue-600 hover:bg-blue-700 mt-3 font-bold py-2 px-6 rounded-lg">
                  <FeedbackEdu />
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <Footer />
    </>
  );
};

export default Education;