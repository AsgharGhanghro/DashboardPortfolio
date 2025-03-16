// /* eslint-disable jsx-a11y/no-distracting-elements */
import React from "react";
import Bar from "./Bar";
import Footer from "../Home/Footer";
import Pie from "./Pie";
import Chart from "./Chart";
import Data from "./Data";


const Index = () => {
  return (
    <>
      <div className="w-full bg-white px-4 md:px-8 lg:px-12 pb-10">
        <h3 className="text-xl md:text-3xl font-bold text-center text-black pl-6 pt-8 md:pt-8 pb-3">
          University Performance
        </h3>
        
        <div className="grid gap-9 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 mt-6 pl-11 md:pl-20">

          <div className="w-full rounded-lg shadow-2xl bg-slate-100 py-3 flex flex-col items-center">
            <h4 className="text-black font-bold text-center md:text-xl mb-2">
              University Semesters GPA
            </h4>
            <div className="w-60 md:w-full h-64 flex md:mb-5 justify-center">
              <Bar />
            </div>
          </div>

          <div className="w-full rounded-lg shadow-2xl bg-slate-100 py-3 flex flex-col items-center">
            <h4 className="text-black font-bold text-center md:text-xl mb-2">
              University Semesters Progress
            </h4>
            <div className="w-full h-64 flex mb-5 justify-center">
              <Chart />
            </div>
          </div>

          <div className="w-full rounded-lg shadow-2xl bg-slate-100 p-4 flex flex-col items-center">
            <h4 className="text-black font-bold text-center md:text-xl mb-2">
              University Semesters Attendance
            </h4>
            <div className="w-full  h-64 flex justify-center mr-16 md:mr-28 md:mb-12">
              <Pie />
            </div>
          </div>

          <div className="w-full rounded-lg shadow-2xl bg-slate-100 p-4 flex flex-col items-center">
            <h4 className="text-black font-bold text-center md:text-xl mb-2">
              Skills I Have Learned
            </h4>
            <div className="w-full h-64 flex mb-3 justify-center">
              <Data />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Index;
