import React from "react";
import { Link } from "react-router-dom";
import background from "../../../image/phe3.png";

const Banner = () => {
  return (
    // <div style={{ background: `url(${background})`, padding: "200px" }}>
    //   <div>
    //     <h2 className="text-6xl font-semibold text-white">
    //       <span></span><br></br>
    //       <span className="text-blue-500"> SMART</span> <br></br>
    //       <span> PHONE FOR QUICK CASH</span>
    //     </h2>
    //   </div>
    //   <div>
    //     <img src={} alt="" />
    //   </div>
    // </div>
<header className=" bg-slate-100 dark:bg-gray-900">
    <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
        <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
            <div className="flex justify-center order-2 mt-6 lg:mt-0 lg:space-y-3 lg:flex-col">
                <button className="w-3 h-3 mx-2 bg-blue-500 rounded-full lg:mx-0 focus:outline-none"></button>
                <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-blue-500"></button>
                <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-blue-500"></button>
                <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none hover:bg-blue-500"></button>
            </div>

            <div className="max-w-lg lg:mx-12 lg:order-2">
                <h1 className="text-4xl  font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">SELL YOUR<br></br>
                SMART  PHONE<br></br>
                FOR QUICK CASH
                </h1>
                <p className="mt-4 text-gray-600 dark:text-gray-300">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quia asperiores alias vero magnam recusandae adipisci ad vitae laudantium quod rem voluptatem eos accusantium cumque.</p>
                <div className="mt-8">
                   <button to="#" className="block px-6 py-3 text-sm font-medium tracking-wider text-center text-white uppercase transition-colors duration-300 transform bg-gray-900 rounded-md hover:bg-gray-700">Get Started</button>
                </div>
            </div>
        </div>

        <div className="flex items-center  lg:px-20 justify-left w-full  lg:w-1/2">
           <img src={background} alt="" />
        </div>
    </div>
</header>
  );
};

export default Banner;