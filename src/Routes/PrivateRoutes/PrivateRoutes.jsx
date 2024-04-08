import React, { useContext } from 'react'
import { AuthProviderContext } from '../../hook/authProvider/AuthProvider'
import {Navigate,useLocation} from 'react-router-dom'

const PrivateRoutes = ({children}) => {
    const {user,loading}=useContext(AuthProviderContext)
    const location=useLocation()
    console.log(location.pathname)
    if(loading){
        return <div><span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span></div>
    }
    if(user){
        return children
    }
return <Navigate state={location.pathname} to='/login'></Navigate>
}

export default PrivateRoutes
