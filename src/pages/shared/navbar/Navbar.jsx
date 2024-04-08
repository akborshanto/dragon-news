import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import defaultPic from '../../../assets/img/user.png'
import { AuthProviderContext } from '../../../hook/authProvider/AuthProvider'





const Navbar = () => {
const {user,logOut}=useContext(AuthProviderContext)

const handleLogOut=()=>{

logOut()
.then(reult=>console.log(reult))
.catch(err=>console.log(err))
  
}


  const links=[

    <>
  
    <NavLink to='/' className='text-red-50 mr-4 text-xl'>HOME</NavLink>
    <NavLink to='/about'  className='text-red-50 mr-4 text-xl'>About</NavLink>
    <NavLink to='/career'  className='text-red-50 mr-4 text-xl'>Career</NavLink>
    <NavLink to='/login'  className='text-red-50 mr-4 text-xl'>Login</NavLink>
    <NavLink to='/regester'  className='text-red-50 mr-4 text-xl'>Regester</NavLink>
    </>
  ]
  return (
    <div>
    <div className="navbar bg-base-100">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
{links}
        </ul>
      </div>
      <a className="btn btn-ghost text-xl">News Danger</a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
{links}
      </ul>
    </div>
    <div className="navbar-end">
<img src={defaultPic} className='  w-[3rem] mr-4 rounded-full'></img>

{
  user?  <button onClick={handleLogOut} className='btn btn-primary'>Sign out</button>:

  <NavLink to='/login'  className='text-red-50 mr-4 text-xl'>Login</NavLink>
}

   
    </div>
  </div>
    </div>
  )
}

export default Navbar
