import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "../../../authProvider/AuthProvider";


const Navbar = () => {
    // const [success,setSuccess] = useState('')
    const {user,logOut} = useContext(authContext)
    // const [error,setError] = useState('')
    // setSuccess('')
    // setError('')
   
    const handleLogOut=()=>{
        console.log('out');
        logOut()
        .then(()=>{
            console.log('hoiche');
        })
        .catch(error=>{
            console.log(error);
        })
       
    }
    return (
        <div className="flex flex-col items-center justify-center">
            <ul  className="flex gap-7  text-lg">
              <li className="hover:text-blue-700 hover:font-medium underline"><NavLink to='/'>Home</NavLink></li>
              <li className="hover:text-blue-700 hover:font-medium underline"><NavLink to='/sign-in'>Sign in</NavLink></li>
              <li className="hover:text-blue-700 hover:font-medium underline"><NavLink to='/sign-up'>Sign Up</NavLink></li>
              <li className="hover:text-blue-700 hover:font-medium underline"><NavLink to='/dashboard'>Dashboard</NavLink></li>
            </ul>
           <div>
           {
                <p>{user?.email}</p>
            }
           </div>
           
        </div>
    );
};

export default Navbar;