import { useEffect, useState } from "react";

const UseAdmin = (email) => {
  const [isAdmin, setIsAdmin] = useState("");
  const [isAdminLoading, setIsAdminLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(
        `https://assignment-server-12-tawny.vercel.app/allusres?email=${email}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setIsAdmin(data.role);
          setIsAdminLoading(false);
        });
    }
  }, [email]);
  return [isAdmin, isAdminLoading];
};
export default UseAdmin;
