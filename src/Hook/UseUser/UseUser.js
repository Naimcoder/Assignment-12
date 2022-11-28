import { useEffect, useState } from "react";

const UseUser = (email) => {
  const [isUser, setIsUser] = useState("");
  const [isUserLoading, setIsUserLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(`https://assignment-server-12-tawny.vercel.app/alluser${email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setIsUser(data.role);
          setIsUserLoading(false);
        });
    }
  }, [email]);
  return [isUser, isUserLoading];
};
export default UseUser;
