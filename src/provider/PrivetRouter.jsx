import React, { useContext } from 'react';
import { AuthContext } from '../context/ContextProvider';
import Loding from '../components/Loding';
import { Navigate, useLocation } from 'react-router';

const PrivetRouter = ({children}) => {
  const {user, loding} = useContext(AuthContext);
  const locations = useLocation();
  console.log(locations)
   
  if(loding){
    return <Loding></Loding>
  }

  if(user){
    return children;
  }


    return  <Navigate state={locations.pathname} to="/connect/login"></Navigate>
};

export default PrivetRouter;