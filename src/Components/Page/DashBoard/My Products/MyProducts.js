import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../../Context/UseContext";
import SignMyproduct from "../SignMyproduct/SignMyproduct";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const [product, setProduct] = useState([]);

  const { data = [], refetch } = useQuery({
    queryKey: ["category"],
    queryFn: () => {
      fetch("https://assignment-server-12-tawny.vercel.app/categorys")
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
    fetch(`https://assignment-server-12-tawny.vercel.app/categorys/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Product Delete SuccessFull");
        console.log(data);
        refetch();
      });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:grid-cols-2">
      {product.map((products) => (
        <SignMyproduct
          key={products._id}
          handleDelete={handleDelete}
          product={products}
        ></SignMyproduct>
      ))}
    </div>
  );
};

export default MyProducts;
