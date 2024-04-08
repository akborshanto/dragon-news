import React, {  createContext, useEffect, useState } from 'react'
export const AuthProviderContext=createContext(null)
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';


const auth = getAuth(app);
 const AuthProvider = ({children}) => {
const [user,setUser]=useState(null)
const [loading,setLoading]=useState(true)

/* create a USER regester/signup*/

const createUser=(email,password)=>{
loading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}
/* onAuthStateChanged user information pawar jnno */

useEffect(()=>{

  const unSubscire=  onAuthStateChanged(auth,createUser=>{
        setUser(createUser)
        setLoading(false)
    })
    /* user clean korar jnno */
    return ()=>{
        unSubscire()
    }
},[])

/* login/signin */
const login=(email,password)=>{
  loading(true)

  return signInWithEmailAndPassword(auth,email,password)
}



/* logout /signout*/
const logOut=()=>{
  loading(true)

  return signOut(auth)

}


const authInfo={user,createUser,login,logOut,loading}

/* c */

  return (
    <div>
<AuthProviderContext.Provider value={authInfo}>

{children}

</AuthProviderContext.Provider>
    </div>
  )
}

export default AuthProvider
