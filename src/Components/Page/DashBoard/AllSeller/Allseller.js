import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const Allseller = () => {
 const [useSeller,setUseSeller]=useState([])
  
 const {data=[],refetch}=useQuery({
 queryKey:[],
 queryFn:()=>{
    fetch("http://localhost:8000/users")
    .then((res) => res.json())
    .then(data=>{
      const allSeller = data.filter((seller) => {
        return seller.selects === "seller";
      });
      setUseSeller(allSeller)
    })
 }
 })


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
                <th>Seller Name</th>
                <th>Seller Email</th>
                <th>Action</th>

              </tr>
            </thead>
            <tbody>
              {useSeller.map((users, i) => (
                <tr>
                  <th>{i + 1}</th>
                  <td>{users.name}</td>
                  <td>{users?.email}</td>
                  <td>
                  <button
                        onClick={() => handleDelete(users?._id)}
                        className="btn btn-orange-500 btn-xs text-white"
                      >
                        Delete
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