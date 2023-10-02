import { useContext, useState } from "react";
import { authContext } from "../../authProvider/AuthProvider";


const SignUp = () => {
    const [showPass,setShowPass]=useState(false)
    const [error,setError] = useState('')
    const [success,setSuccess] = useState('')
    const {createUser} = useContext(authContext)
    const handleSignUp=e=>{
        e.preventDefault()
        const email = e.target.email.value
        const name = e.target.name.value
        const password = e.target.password.value
     
        setSuccess('')
        setError('')
        createUser(email,password)
        .then(()=>{
            setSuccess('Sign up successfully')
            e.target.reset()
        })
        .catch((error)=>{
            setError(error.message)
        })
        
    }
    return (
        <div className="text-center my-11">
            <h2>Please Sign Up</h2>
            <form onSubmit={handleSignUp} className="my-7 ">
                <input type="text" placeholder="name" className="border-[2px] rounded-md"  name="name" id="" />
                <br />
                <br />
                <input placeholder="email" className="border-[2px] rounded-md" type="email" name="email" required />
                <br />
                <br />
                <div className="flex justify-center gap-2 ">
                <input placeholder="password" className="border-[2px] ml-6 rounded-md " 
                type={showPass ? "text" : "password" } 
                name="password" required />
                <div onClick={()=>setShowPass(!showPass)}>
                {
                    showPass ? <i title="Hide Password" className="fa-regular fa-eye-slash"></i> : <i title="Show Password"  className="fa-regular fa-eye"></i>  
                }
                </div>
                </div>
                <br />
                <label htmlFor="sign-up">
                <input className="mr-1 mb-3" type="checkbox" name="check" id="sign-up" />Accept terms and conditions.
                </label>
                <br />
                <input className="text-white p-1 rounded bg-red-500" type="submit" value="Sign Up" />
            </form>
            {
                error && <p className="text-red-600">{error}</p>
            }
            {
                success && <p className="text-green-600">{success}</p>
            }
            
        </div>
    );
};

export default SignUp;