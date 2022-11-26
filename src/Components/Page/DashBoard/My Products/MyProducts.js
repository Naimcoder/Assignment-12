import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../../../Context/UseContext";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const [product, setProduct] = useState([]);

  const { data = [] } = useQuery({
    queryKey: ["categorys"],
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
  return (
    <div>
      <h3>my products</h3>
      
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Resale Price</th>
              <th>Action</th>
              <th>Deleted</th>
            </tr>
          </thead>
          <tbody>
          {product.map((items,i) => (
        <tr>
        <th>{i+1}</th>
        <td>{items.name}</td>
        <td>{items.resale_price}</td>
        <td><button className=" btn btn-xs">Update</button></td>
        <td><button className="btn btn-xs">Deleted</button></td>
      </tr>
      ))}
          </tbody>
        </table>
      </div>
    </div>
  );
  
};

export default MyProducts;

