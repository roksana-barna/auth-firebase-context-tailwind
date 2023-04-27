import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

 export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);

    const  createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    // observe auth change
    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth,currentUser =>{
            console.log('auth state change',currentUser);
            setUser(currentUser)

        });
        return()=>{
            unsubscribe();
        }
    },[])
    const  signIn =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const logOut =()=>{
       return signOut(auth)
    }
  const authInfo = {
    user,
    createUser,
    signIn,
    logOut
  }
   

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
            
        </div>
    );
};

export default AuthProvider;