import React from "react";
import toast from "react-hot-toast";
import { FaTrashAlt } from "react-icons/fa";
const SignMyproduct = ({ product, handleDelete }) => {
  const { picture, name, resale_price, original_price, _id } = product;

  // handleAdvertise
  const handleAdvertise = () => {
    fetch(`https://assignment-server-12-tawny.vercel.app/advertise`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ product }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("advertised SuccessFully!");
      });
  };
  return (
    <div>
      <div className="flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div className="w-1/3 bg-cover">
          <img src={picture} alt="" />
        </div>

        <div className="w-2/3 p-4 md:p-4">
          <button
            onClick={() => handleDelete(_id)}
            className="hover:text-blue-500 flex justify-end w-full text-red-600 text-2xl"
          >
            <FaTrashAlt />
          </button>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            {name}
          </h1>

          <div className=" mt-2 ">
            <h3 className="text-xl font-semibold">
              Reslase price: USD ${resale_price}
            </h3>
            <h3 className="text-xl font-semibold">
              Original Price:USD ${original_price}
            </h3>
          </div>

          <div className="flex justify-end mt-3 item-center">
            <button
              onClick={() => handleAdvertise(product)}
              className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600"
            >
              Adveritsed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignMyproduct;
