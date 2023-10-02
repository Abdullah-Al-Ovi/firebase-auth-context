import { createContext, useEffect, useState } from "react";
import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase.config";

export const authContext = createContext()

const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null)
    const [loading,setLoading] = useState(true)
   

    const createUser =(email,password)=>{
        setLoading(true)
        return  createUserWithEmailAndPassword(auth,email,password)
    }

    const logInUser = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut =()=>{
        setLoading(true)
        return signOut(auth)
    }

   useEffect(()=>{
    const unSubscribe =  onAuthStateChanged(auth,(currentUser)=>{
     setUser(currentUser)
     setLoading(false)
        
    })
    return ()=> unSubscribe()
   },[])

    const authInfo = {user,createUser,logInUser,logOut,loading}
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;
