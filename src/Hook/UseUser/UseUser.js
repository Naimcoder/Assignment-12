import { useEffect, useState } from "react";

const UseUser = (email) => {
    const [isUser, setIsUser] = useState("");
    const [isUserLoading, setIsUserLoading] = useState(true)
    useEffect(() => {
       if(email){
        fetch(`http://localhost:8000/users/user/${email}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setIsUser(data.isUser)
            setIsUserLoading(false);
        })
       }
    },[email])
    return [isUser, isUserLoading];
};
export default UseUser;