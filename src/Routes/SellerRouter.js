
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import SmallSpnner from '../Components/Page/SmallSpnner/SmallSpnner';
import { AuthContext } from '../Context/UseContext';
import UseSeller from '../Hook/UseSeller';

const SellerRouter = ({children}) => {
    const {user,loader}= useContext(AuthContext)
    const [isSeller,isSellerLoading] = UseSeller(user?.email);
    console.log(isSellerLoading,loader,isSeller)
    
    const location= useLocation()
    if(loader || isSellerLoading){
      return <SmallSpnner></SmallSpnner>
    }
   if(!user && isSeller){
    return<Navigate to='/login' state={{from:location}} replace></Navigate>
   }
   return children
  

};

export default SellerRouter;
