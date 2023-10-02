import { useContext } from "react";
import { authContext } from "../../authProvider/AuthProvider";
import { useNavigate } from "react-router-dom";


const DashBoard = () => {
    const {user,logOut}=useContext(authContext)
    const navigate = useNavigate()

    const handleLogOut=()=>{
        console.log('out');
        logOut()
        .then(()=>{
           navigate('/sign-in') 
        })
        .catch(error=>{
            console.log(error);
        })
    }

    return (
        <div className="h-[60vh] flex flex-col space-y-3 items-center justify-center">
            <p>Welcome</p>
            <p>{user?.email} </p>
            <button onClick={handleLogOut} className="p-1 rounded bg-red-500 text-white">Sign Out</button>
        </div>
    );
};

export default DashBoard;