import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import SmallSpnner from '../Components/Page/SmallSpnner/SmallSpnner';
import { AuthContext } from '../Context/UseContext';
import UseAdmin from '../Hook/UseAdmin';
const AddminRouter = ({children}) => {
    const {user,loader}= useContext(AuthContext)
    const location= useLocation();
    const [isAdmin, isAdminLoading] = UseAdmin(user?.email);

    if(loader || isAdminLoading){
      return <SmallSpnner></SmallSpnner>
    }
   if(isAdmin ==='admin' ){
    return<Navigate to='/login' state={{from:location}} replace></Navigate>
   }
   return children

};

export default AddminRouter;