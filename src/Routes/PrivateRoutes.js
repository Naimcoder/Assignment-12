import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/UseContext';

const PrivateRoutes = ({children}) => {
    const {user,loader}= useContext(AuthContext)
    const location= useLocation()
    if(loader){
      return   
    }
   if(!user){
       return<Navigate to='/login' state={{from:location}} replace></Navigate>
   }
   return children
};

export default PrivateRoutes;