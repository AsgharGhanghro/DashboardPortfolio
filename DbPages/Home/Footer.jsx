/* eslint-disable react/jsx-pascal-case */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInRoundedIcon from "@mui/icons-material/LinkedIn";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import { Link } from 'react-router-dom';
import Footer_FRontModel from './Footer_FRontModel';
import Footer_BackModel from './Footer_BackModel';
import Footer_APIModel from './Footer_APIModel';
import { TbBrandFiverr } from "react-icons/tb";

const Footer = () => {
  return (
    <div className="pl-10 w-full">
<footer className="footer bg-black text-white md:pl-32 p-10">
  <nav>
    <h6 className="footer-title text-blue-600 font-bold text-xl">Services</h6>
   <Footer_FRontModel />
    <a className="font-xs hover:to-blue-500"><Footer_BackModel className="text-sm"/></a>
    <a className="text-xs hover:to-blue-500"><Footer_APIModel className="text-sm"/></a>
    
  </nav>
  <nav>
    <h6 className="footer-title text-blue-600 font-bold text-xl">Routes</h6>
     <Link to="/grates" className='font-normal text-sm '>Grates</Link>
     <Link to="/education" className=' font-normal  text-sm '>Education</Link>
     <Link to="/project" className=' font-normal text-sm '> Project</Link>
     <Link to="/service" className=' font-normal text-sm '>Service</Link>
     <Link to="/skill" className='font-normal text-sm '>Skills</Link>
  </nav>
  <nav>
    <h6 className="footer-title text-blue-600 font-bold text-xl">Legal</h6>
    <a className="text-sm ">Terms of use</a>
    <a className="text-sm ">Privacy policy</a>
    <a className="text-sm ">Cookie policy</a>
  </nav>
</footer>
<footer className="footer bg-black text-white border-base-300 border-t px-10 py-4">
  <aside className="grid-flow-col items-center md:pl-20">
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      className="fill-current">
      <path
        d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
    </svg>
    <p className='font-semibold'>
    Ali Asghar , <span className='footer-title text-blue-600 font-bold text-sm'>Freelancer</span> 
      <br />
      Providing reliable websites .
    </p>
  </aside>
  <nav className="md:place-self-center md:justify-self-end ">
    
    <div className="grid grid-flow-col gap-1 md:pr-40 pb-4">
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
                  className="text-gray-500 cursor-pointer mr-3  transsfrom transition duration-500  hover:scale-150"
                />
              </a>
              <a href="https://www.linkedin.com/">
                <LinkedInRoundedIcon
                  size={30}
                  className="text-blue-400 cursor-pointer mr-3 hover:text-blue-400  transsfrom transition duration-500  hover:scale-150"
                />
              </a>
              <a href="https://www.fiverr.com/asghar_ned/build-website-development-custom-website-design-as-mern">
                <TbBrandFiverr
                  size={30}
                  className="text-green-500 cursor-pointer pb-1 hover:text-green-500  transsfrom transition duration-500  hover:scale-150"
                />
              </a>
    </div>
  </nav>
</footer>
</div>

  )
}

export default Footer
