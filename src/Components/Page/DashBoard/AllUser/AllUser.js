import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

const AllUser = () => {
  const { data = [],refetch } = useQuery({
    queryKey: ['users'],
    queryFn: () =>
      fetch("http://localhost:8000/users").then((res) => res.json()),
  });

  const handleMakeAdmin = id => {
    fetch(`http://localhost:8000/users/admin/${id}`, {
      method: 'PUT', 
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.modifiedCount){
        toast.success('admin SuccessFull');
        refetch();
    }
    })}
    const handleDelete=(id)=>{
        fetch(`http://localhost:8000/users/admin/${id}`,{
            method:"DELETE",
        })
        .then(res=>res.json())
        .then(data=>{
            toast.success('user Delete SuccessFull')
            console.log(data)
            refetch()
        })
       }
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Deleted</th>
              <th>Admin</th>
            </tr>
          </thead>
          <tbody>
            {data.map((users, i) => (
              <tr>
                <th>{i + 1}</th>
                <td>{users.name}</td>
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
