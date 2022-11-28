import { useEffect, useState } from "react";

const UseSeller = (email) => {
  const [isSeller, setIsSeller] = useState("");
  const [isSellerLoading, setIsSellerLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(
        `https://assignment-server-12-tawny.vercel.app/allusres?email=${email}`
      )
        .then((res) => res.json())
        .then((data) => {
          setIsSeller(data.role);
          setIsSellerLoading(false);
        });
    }
  }, [email]);
  return [isSeller, isSellerLoading];
};

export default UseSeller;
