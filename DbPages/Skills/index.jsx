/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Skill.css";
// import SplashCursor from './SplashCursor';
import SkillModel from "./SkillModel";
import Footer from "../Home/Footer";

const technologies = [
  {
    name: "React.js",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    description: "React is a JavaScript library for building user interfaces.",
  },
  {
    name: "MongoDB",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",
    description: "MongoDB is a NoSQL database for modern applications.",
  },
  {
    name: "Node.js",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    description: "Node.js is a runtime environment for server-side JavaScript.",
  },
  {
    name: "Express.js",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
    description: "Express is a web framework for Node.js.",
  },
  {
    name: "Tailwind CSS",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    description: "Tailwind is a utility-first CSS framework.",
  },
  {
    name: "HTML",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    description: "HTML is the standard markup language for web pages.",
  },
  {
    name: "CSS",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
    description: "CSS is used for styling web pages.",
  },
  {
    name: "JavaScript",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    description: "JavaScript is a programming language for the web.",
  },
  {
    name: "Bootstrap",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
    description: "Bootstrap is a popular CSS framework.",
  },
];

const Card = ({ name, image, description }) => {
  return (
    <div className="card w-72 h-90 cursor-pointer perspective-1000 transform-style-preserve-3d transition-transform duration-500 hover:rotate-y-180">
      <div className="card-face front absolute w-full h-full bg-white rounded-lg shadow-lg flex flex-col items-center justify-center  text-center backface-hidden">
        <img src={image} alt={name} className="w-24 h-24 mb-6" />
        <h3 className="text-2xl font-bold mb-4">{name}</h3>
        <p className="text-black">{description}</p>
      </div>

      <div className="card-face back absolute w-full h-full bg-slate-100 rounded-lg shadow-lg flex flex-col items-center justify-center p-6 text-center backface-hidden transform rotate-y-180">
        <h3 className="text-2xl font-bold mb-4">{name}</h3>
        <p className="text-black mb-6">
          Learn more about {name} and start building amazing projects!
        </p>
        <a href="#" className="px-6 py-2 bg-blue-500 text-white rounded-lg ">
          <SkillModel />
        </a>
      </div>
    </div>
  );
};

const Skill = () => {
  return (
    <>
      <div className=" w-screen text-black text-center ">
        <div className=" bg-slate-100 py-10 mr-4">
          <div className="container mx-auto">
            <h1 className="md:text-4xl text-3xl font-bold text-black pb-7 pt-2 pl-4 md:pt-2 text-center">
              My Skills
            </h1>

            <div className="ml-16 ">
              <div className="grid gap-10 md:gap-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-3">
                {technologies.map((tech, index) => (
                  <Card key={index} {...tech} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      {/* <SplashCursor /> */}
    </>
  );
};

export default Skill;
