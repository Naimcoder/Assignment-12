import React, { useContext } from "react";
import { FaBabyCarriage, FaHome, FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/UseContext";
import UseAdmin from "../../../Hook/UseAdmin";
import UseSeller from "../../../Hook/UseSeller";
import UseUser from "../../../Hook/UseUser/UseUser";

const SideNavBar = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = UseAdmin(user?.email);
  const [isSeller] = UseSeller(user?.email);
  const [isUser]=UseUser(user?.email)
  return (
    <div>
      <div class="flex flex-col justify-between flex-1 mt-6">
        <nav>
          <ul>
            <li>
              <Link
                to="/"
                className="flex items-center font-medium text-2xl tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                <span className="text-blue-500 mr-2">
                  <FaHome></FaHome>
                </span>
                Home
              </Link>
            </li>
            {isUser &&
              <li>
                  <Link
                    to="/dashboard/myorder"
                    className="flex items-center text-lg font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                  >
                    <span className="text-blue-500 mr-2">
                      {" "}
                      <FaShoppingCart></FaShoppingCart>{" "}
                    </span>
                    My Orders
                  </Link>
                </li>
            }
            { isSeller && (
              <>
                <li>
                  <Link
                    to="/dashboard/addproducts"
                    className="flex items-center text-lg py-2 font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                  >
                    <span className="text-blue-500 mr-2">
                      <FaBabyCarriage></FaBabyCarriage>
                    </span>
                    Add Products
                  </Link>
                </li>

                <li>
                  <Link
                    to="/dashboard/myproducts"
                    className="flex items-center text-lg py-2 font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                  >
                    <span className="text-blue-500 mr-2">
                      <FaBabyCarriage></FaBabyCarriage>
                    </span>
                    My Products
                  </Link>
                </li>
              </>
            )}
            {isAdmin && (
              <>
                <li>
                  <Link
                    to="/dashboard/alluser"
                    className="flex items-center  text-lg pt-3 font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                  >
                    <span className="text-blue-500 mr-2">
                      <FaUser></FaUser>
                    </span>
                    All User
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/allseller"
                    className="flex items-center  text-lg pt-3 font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                  >
                    <span className="text-blue-500 mr-2">
                      <FaUser></FaUser>
                    </span>
                    All Seller
                  </Link>
                </li>
              </>
            )}
            
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SideNavBar;
