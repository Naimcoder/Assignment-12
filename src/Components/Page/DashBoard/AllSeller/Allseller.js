import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaCheck, FaCheckCircle } from "react-icons/fa";

const Allseller = () => {
  const [useSeller, setUseSeller] = useState([]);

  const { data = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: () => {
      fetch("http://localhost:8000/users")
        .then((res) => res.json())
        .then((data) => {
          const allSeller = data.filter((seller) => {
            return seller.role === "seller";
          });
          setUseSeller(allSeller);
        });
    },
  });

  const handleVerifyed = (id) => {
    fetch(`http://localhost:8000/users/verifyed/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ verifyed: true }),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("successfully verifyed");
        refetch()
      });
  };

  const handleMakeAdmin = (id) => {
    fetch(`http://localhost:8000/users/admin/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.success("admin SuccessFull");
          refetch();
        }
      });
  };
  const handleDelete = (id) => {
    fetch(`http://localhost:8000/users/admin/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("user Delete SuccessFull");
        console.log(data);
        refetch();
      });
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Seller Name</th>
              <th>Seller Email</th>
              <th>Action</th>
              <th>Promation</th>
              <th>verifyed</th>
            </tr>
          </thead>
          <tbody>
            {useSeller.map((users, i) => (
              <tr>
                <th>{i + 1}</th>
                <td className='flex items-center'>{users.name} 
                <span className='ml-2 font-semibold'>{users?.verifyed ? <span className="text-blue-600"><FaCheckCircle/></span> : 'Not verify'}
                </span>
                </td>
                <td>{users?.email}</td>
                <td>
                  <button
                    onClick={() => handleDelete(users?._id)}
                    className="btn btn-orange-500 btn-xs text-white"
                  >
                    Delete
                  </button>
                </td>
                <td>
                  {users?.role !== "admin" && (
                    <button
                      onClick={() => handleMakeAdmin(users?._id)}
                      className="btn btn-blue-600 btn-xs text-white"
                    >
                      Make Admin
                    </button>
                  )}
                </td>
                <td>
                <button
                      className=" btn btn-blue-600 btn-xs"
                      onClick={() => handleVerifyed(users?._id)}
                    >
                      Verifyed
                    </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Allseller;
