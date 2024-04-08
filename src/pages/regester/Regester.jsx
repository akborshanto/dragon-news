import React, { useContext } from "react";
import Navbar from "../shared/navbar/Navbar";
import { Link } from "react-router-dom";
import { AuthProviderContext } from "../../hook/authProvider/AuthProvider";

const Regester = () => {
  /* auth provider hook */
  const {createUser,user}=useContext(AuthProviderContext)
  console.log(user)
  /* handle submit */
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get('email');
    const password = form.get("password");

/* create a user */

createUser(email,password)
.then(result=>console.log(result.user))
.then(errr=>console.log(errr))

  // console.log(name, email, password, photo);
  };
  return (
    <div>
      <Navbar></Navbar>
  
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name..."
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  name="photo"
                  type="text"
                  placeholder="photo url"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <input type="checkbox" />
                  Terms & condition
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
                <h4>
                  You have an accoutn ?
                  <Link to="/login" className="text-red-300">
                    login
                  </Link>
                </h4>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Regester;
