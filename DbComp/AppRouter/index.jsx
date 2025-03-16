import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../DbPages/Home";
import Service from "../../DbPages/Service";
import Education from "../../DbPages/Education";
import Project from "../../DbPages/Project";
import Grates from "../../DbPages/Grates";
import Skills from "../../DbPages/Skills";
import Contact from "../../DbPages/Contact";
import Intrested from '../../DbPages/Contact/Intrested';

const index = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/grates" element={<Grates />} />
        <Route path="/education" element={<Education />} />
        <Route path="/project" element={<Project />} />
        <Route path="/service" element={<Service />} />
        <Route path="/skill" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/intrested" element={<Intrested />} />
      </Routes>
    </>
  );
};

export default index;
