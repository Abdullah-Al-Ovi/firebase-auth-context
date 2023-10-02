import {  useContext } from "react";
import { authContext } from "../authProvider/AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
   let {user,loading} = useContext(authContext)
   
   if(loading){
     return <div className="h-[60vh] flex items-center justify-center"><span className="loading loading-dots loading-lg"></span></div>
   }
    
   
   if(!user){
      
       return  <Navigate to='/sign-in'></Navigate>
   }
   
   return children  
  
   
};

export default PrivateRoute;