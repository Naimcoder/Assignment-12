import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../../Context/UseContext";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const [product, setProduct] = useState([]);

  const { data = [],refetch } = useQuery({
    queryKey: ["category"],
    queryFn: () => {
      fetch("http://localhost:8000/categorys")
        .then((res) => res.json())
        .then((data) => {
          const myproduct = data.filter((products) => {
            return products.email === user?.email;
          });
          setProduct(myproduct);
        });
    },
  });

  
// handleDelete
  const handleDelete = (id) => {
    fetch(`http://localhost:8000/categorys/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Product Delete SuccessFull");
        console.log(data);
        refetch();
      });
  };


  // handleAdvertise
  const handleAdvertise =()=>{
    fetch(`http://localhost:8000/advertise`,{
     method:"POST",
     headers:{
       "content-type":"application/json"
     },
     body: JSON.stringify({product})
    })
    .then(res=>res.json())
    .then(data => {
     console.log(data)
     toast.success('advertised SuccessFully!')
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
              <th>Product Name</th>
              <th>Sale Prices</th>
              <th>Adverticed</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {product.map((product, i) => (
              <tr key={product._id}>
                <th>{i + 1}</th>
                <td>
                  {" "}
                  <div className="mask mask-squircle w-20 h-20">
                    <img src={product.picture} alt="" />
                  </div>{" "}
                </td>
                <td>{product.name}</td>
                <td>{product.resale_price}</td>
                <td> <button onClick={() => handleAdvertise(product)} className="inline-flex btn-xs bg-red-600 text-white  items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">Advertised</button></td>
                <td><buton onClick={()=>handleDelete(product._id)} className="btn btn-xs">
                   Delete
                  </buton></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProducts;
