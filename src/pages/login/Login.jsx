import React, { useContext } from 'react'
import Navbar from '../shared/navbar/Navbar'
import { Link ,useLocation,useNavigate} from 'react-router-dom'
import { AuthProviderContext } from '../../hook/authProvider/AuthProvider'
const Login = () => {
  const {login}=useContext(AuthProviderContext)
  /* location */
  const location=useLocation()
  const navigate=useNavigate()
  console.log(location)
    /* handle submit */
    const handleSubmit=(e)=>{
e.preventDefault()
console.log(e)
const form=new FormData(e.currentTarget)
const email=form.get('email')
const password=form.get('password')
    
login(email,password)
.then(result=>console.log(result.user),
/* navigate after login */
navigate(location ? location.state:'/')
)
.catch(err=>console.log(err))

    }
  return (
    <div>
      <Navbar></Navbar>
      <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input name='email' type="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input name='password' type="password" placeholder="password" className="input input-bordered" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
             <h4>
             Dont have an Acoout ?
             <Link to='/regester' className='text-red-400'>Regester</Link>
             </h4>
              
              
              
            </div>
          </form>
        </div>
      </div>
    </div>
    
    </div>
  )
}

export default Login
