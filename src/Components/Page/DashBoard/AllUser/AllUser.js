import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaCheckCircle } from "react-icons/fa";

const AllUser = () => {
  const [useBuyer, SetUseBuyer] = useState([]);

  const { data = [], refetch } = useQuery({
    queryKey: ["use"],
    queryFn: () => {
      fetch("https://assignment-server-12-tawny.vercel.app/users")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data) {
            const allBuyer = data.filter((User) => {
              return User.role === "user";
            });
            SetUseBuyer(allBuyer);
          }
        });
    },
  });

  // handlemake Admin
  const handleMakeAdmin = (id) => {
    fetch(`https://assignment-server-12-tawny.vercel.app/users/admin/${id}`, {
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
  // handleDeleted
  const handleDelete = (id) => {
    fetch(`https://assignment-server-12-tawny.vercel.app/users/admin/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("user Delete SuccessFull");
        console.log(data);
        refetch();
      });
  };
  // handleVerifyed
  const handleVerifyed = (id) => {
    fetch(
      `https://assignment-server-12-tawny.vercel.app/users/verifyed/${id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ verifyed: true }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
        toast.success("successfully verifyed");
      });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Buyer Name</th>
              <th>Buyer Email</th>
              <th>Action</th>
              <th>Promotion</th>
              <th>Verifyed</th>
            </tr>
          </thead>
          <tbody>
            {useBuyer.map((users, i) => (
              <tr key={users._id}>
                <th>{i + 1}</th>
                <td className="flex items-center">
                  {users.name}
                  <span className="ml-2 font-semibold">
                    {users?.verifyed ? (
                      <span className="text-blue-600">
                        <FaCheckCircle />
                      </span>
                    ) : (
                      "Not verify"
                    )}
                  </span>
                </td>
                <td>{users?.email}</td>
                <td>
                  <button
                    onClick={() => handleDelete(users?._id)}
                    className="btn   border-t-orange-500 btn-xs text-white"
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
                  {users?.verifyed ? (
                    <button className="bg-green-600 text-white py-1 px-3 rounded-md hover:bg-sky-700 ease-in duration-300">
                      Verified
                    </button>
                  ) : (
                    <button
                      className=" btn btn-blue-600 btn-xs"
                      onClick={() => handleVerifyed(users?._id)}
                    >
                      Verifyed
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
