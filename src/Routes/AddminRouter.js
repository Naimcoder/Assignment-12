import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import SmallSpnner from '../Components/Page/SmallSpnner/SmallSpnner';
import { AuthContext } from '../Context/UseContext';

const AddminRouter = ({children}) => {
    const {user,loader}= useContext(AuthContext)
    const location= useLocation();

    if(loader){
      return <SmallSpnner></SmallSpnner>
    }
   if(!user){
    return<Navigate to='/login' state={{from:location}} replace></Navigate>
   }
   return children
  
 
};

export default AddminRouter;