import React from "react";

const AdvertiesedCard = ({ adveritise }) => {
  const {
    name,
    picture,
    location,
    time,
    times,
    resale_price,
    original_price,
    years_of_use,
    condition,
    description,
  } = adveritise.product[0];
  console.log(adveritise.product[0]);
  return (
    <div>
      <div className=" p-6 rounded-md shadow-md bg-white text-black">
        <img
          src={picture}
          alt=""
          className="object-cover object-center w-full rounded-md"
        />
        <div className="mt-6 mb-2">
          <div className="flex justify-between">
            <span className="block text-xs font-medium tracking-widest uppercase text-violet-400">
              Date-{time}
            </span>
            <span className="block text-xs font-medium tracking-widest uppercase text-violet-400">
              Time-{times}
            </span>
          </div>
          <h2 className="text-4xl font-semibold tracking-wide pb-5">{name}</h2>
          <p className="text-xl font-medium">Resale Price: USD ${resale_price}</p>
          <p className="text-xl font-medium">Original Price: USD ${original_price}</p>
          <p className="text-xl font-medium">Condation: {condition}</p>
          <p className="text-xl font-medium">UseTime: {years_of_use}/Year</p>
          <p className="text-xl font-medium">Location: {location}</p>
        </div>
        <h3 className="text-xl">Description:</h3>
        <p className="pb-5">{description}</p>
      </div>
    </div>
  );
};

export default AdvertiesedCard;
