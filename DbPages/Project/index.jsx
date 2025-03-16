import React from "react";
import Footer from "../Home/Footer";
import Stack from "./Stack";

const Project = () => {
  return (
    <>
     <div className="grid gap-9 grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 ">
      <div className="w-screen min-h-screen bg-white text-black pr-16 pl-4 pb-16 md:pb-24">
        <h3 className="md:text-4xl text-3xl font-bold text-center pt-12 md:pt-16">
         My Projects
        </h3>
        <div className="flex justify-center mt-6">
          <div className="w-full max-w-4xl">
            <Stack />
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default Project;