

import React from "react";
import Footer from '../Home/Footer';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import PublicOffRoundedIcon from "@mui/icons-material/PublicOffRounded";
import DnsRoundedIcon from "@mui/icons-material/DnsRounded";
import LeakAddRoundedIcon from "@mui/icons-material/LeakAddRounded";
import SpeedRoundedIcon from "@mui/icons-material/SpeedRounded";
import KeyRoundedIcon from "@mui/icons-material/KeyRounded";
import ServiceMore from "./ServiceMore";

const Service = () => {
  const services = [
    {
      icon: <LanguageRoundedIcon style={{ fontSize: "2rem", color: "#007bff" }} />,
      title: "Full-Stack Web Development",
      description: "I build high-performance web applications using MongoDB, Express.js, React.js, and Node.js (MERN stack).",
    },
    {
      icon: <PublicOffRoundedIcon style={{ fontSize: "2rem", color: "#28a745" }} />,
      title: "Front-End Development",
      description: "Using React.js, Next.js, Tailwind CSS, and Material UI, I craft responsive, interactive, and visually appealing UIs.",
    },
    {
      icon: <DnsRoundedIcon style={{ fontSize: "2rem", color: "#ffc107" }} />,
      title: "Back-End Development",
      description: "With Node.js, Express.js, and MongoDB, I develop secure, scalable, and RESTful APIs for web applications.",
    },
    {
      icon: <LeakAddRoundedIcon style={{ fontSize: "2rem", color: "#dc3545" }} />,
      title: "API Development & Integration",
      description: "I create RESTful & GraphQL APIs and integrate third-party services like payment gateways & authentication systems.",
    },
    {
      icon: <SpeedRoundedIcon style={{ fontSize: "2rem", color: "#17a2b8" }} />,
      title: "Performance Optimization",
      description: "I optimize web apps for speed, SEO, and scalability to ensure smooth user experiences and better search rankings.",
    },
    {
      icon: <KeyRoundedIcon style={{ fontSize: "2rem", color: "#6f42c1" }} />,
      title: "Authentication & Security",
      description: "I implement JWT, OAuth, and Firebase Authentication with best security practices to protect applications.",
    },
  ];

  return (
    <>
    <div className=" bg-slate-100 pl-14 w-screen pr-8 py-10">
      <h3 className="md:text-4xl text-3xl font-bold text-center text-black pb-8 ">My Services</h3>

      <VerticalTimeline>
        {services.map((service, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "white",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
              borderRadius: "10px",
              textAlign: "center",
              padding: "20px",
            }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            iconStyle={{
              background: "white",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
              display: "flex",
              
            }}
            icon={service.icon}
          >
            <h3 className="text-xl font-semibold text-gray-800 pt-5">{service.title}</h3>
            <p className="text-gray-600 mt-2">{service.description}</p>
            <button className="mt-4 px-5 py-2 mb-5 bg-blue-600 text-white rounded-lg shadow-md transition-transform transform hover:scale-105">
              <ServiceMore />
            </button>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
    <Footer />
    </>
  );
};

export default Service;
