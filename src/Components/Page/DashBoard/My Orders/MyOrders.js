import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../../Context/UseContext";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const { data = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: () =>
      fetch(
        `https://assignment-server-12-tawny.vercel.app/bookings?email=${user?.email}`
      ).then((res) => res.json()),
  });
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Image</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Promition</th>
          </tr>
        </thead>
        <tbody>
          {data.map((order) => (
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={order?.picture}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>{order?.productname}</td>
              <td>{order?.resale_price}</td>
              <th>
                <button className="btn  btn-orange-600 btn-xs">Pay</button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;
