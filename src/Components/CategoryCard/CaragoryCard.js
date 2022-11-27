import React from "react";
import { Link } from "react-router-dom";

const CaragoryCard = ({ categorys, setBooke }) => {

  const {
    name,
    picture,
    original_price,
    description,
    condition,
    brandname,
    location,
    time,
    resale_price,
    years_of_use,
    times
  } = categorys;

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
                Date
              </Link>
              <span className="text-gray-600"> -{time}</span>
            </p>
            <Link
              to="/"
              aria-label="Category"
              title="Visit the East"
              className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              {name}
            </Link>
            <div className="pb-4">
              <h3 className="pt-3 text-xl font-semibold">
                Original Price: USD ${original_price}
              </h3>
              <h3 className="text-xl  font-semibold">
              Resale Price: USD ${resale_price}
              </h3>
              <h3 className="text-lg  font-semibold">
               Condition: {condition}
              </h3>
              <h3 className="text-lg  font-semibold">
              BrandName: {brandname}
              </h3>
              <h3 className="text-lg  font-semibold">
              Used Time: {years_of_use}/Year
              </h3>
              <h3 className="text-lg  font-semibold">
              Location: {location}
              </h3>
              <h3 className="text-lg  font-semibold">
               Time: {times}
              </h3>
            </div>
            <p className="text-bold text-xl text-blue-600">Description:</p>
            <p className="mb-2 text-gray-700">{description.slice(0, 200)}</p>
            <label
              htmlFor="bookingModal"
              onClick={() => setBooke(categorys)}
              className="my-2 inline-flex py-2 rounded px-5 bg-black text-white  items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
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
