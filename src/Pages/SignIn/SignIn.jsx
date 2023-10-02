import { useContext, useRef, useState } from "react";
import { authContext } from "../../authProvider/AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";


const SignIn = () => {
    const [showPass,setShowPass]=useState(false)
    const [error,setError] = useState('')
    const [success,setSuccess] = useState('')
    const emailRef = useRef()
    const {logInUser} = useContext(authContext)
    const navigate = useNavigate()

    const handleSignIn=e=>{
        e.preventDefault()
        const email = emailRef.current.value
        const password = e.target.password.value
        
        setSuccess('')
        setError('')
        logInUser(email,password)
        .then(()=>{
            setSuccess('Logged in successfully')
            e.target.reset()
            navigate('/dashboard')
         
            
        })
        .catch((error)=>{
            setError(error.message)
        })
    }
    return (
        <div>
        <div className="text-center my-11">
         <h2>Please Sign In</h2>
         <form onSubmit={handleSignIn} className="my-7 ">
             <input 
             ref={emailRef}
             placeholder="email" className="border-[2px] rounded-md" type="email" name="email" />
             <br />
             <br />
             <div className="flex justify-center gap-2 ">
             <input  placeholder="password" className="border-[2px] ml-6 rounded-md " 
             type={showPass ? "text" : "password" } 
             name="password"  />
             <div onClick={()=>setShowPass(!showPass)}>
             {
                 showPass ? <i title="Hide Password" className="fa-regular fa-eye-slash"></i> : <i title="Show Password"  className="fa-regular fa-eye"></i>  
             }
             </div>
             </div>
             <br />
             <p>Forget password?</p>
             <p  className="underline hover:text-blue-600 hover:cursor-pointer">Reset from here</p>
             <br />
             <input className="border-[2px] rounded-md text-white p-1 bg-red-500" type="submit" value="Sign In" />
         </form>
         {
             error && <p className="text-red-600">{error}</p>
         }
         {
             success && <p className="text-green-600">{success}</p>
         }
         
     </div>
     </div>
    );
};

export default SignIn;