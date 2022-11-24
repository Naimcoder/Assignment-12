import React, { useState } from "react";
import { Link } from "react-router-dom";


const CaragoryCard = ({ categorys,setBooke}) => {
  const { name, picture } = categorys;
 
  return (
    <div>
      <div>
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
          <img src={picture} className="object-cover w-full" alt="" />
          <div className="p-5 border border-t-0">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <Link
                to="/"
                className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                aria-label="Category"
                title="traveling"
              >
                traveling
              </Link>
              <span className="text-gray-600">— 28 Dec 2020</span>
            </p>
            <Link
              to="/"
              aria-label="Category"
              title="Visit the East"
              className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              {name}
            </Link>
            <p className="mb-2 text-gray-700">
              Sed ut perspiciatis unde omnis iste natus error sit sed quia
              consequuntur magni voluptatem doloremque.
            </p>
            <label
              htmlFor="bookingModal"
              onClick={()=>setBooke(categorys)}
              className="inline-flex py-2 rounded px-5 bg-black  items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              BOOK NOW
            </label>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaragoryCard;
