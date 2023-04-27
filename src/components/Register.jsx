import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import{ AuthContext } from '../Providers/AuthProvider';

const Register = () => {
    const {user,createUser}= useContext(AuthContext);
    console.log(createUser)
    const handleRegister=(event)=>{
        event.preventDefault();
        const form =event.target;
        const email=form.email.value;
        const password=form.password.value;
        const name=form.password.value;
        console.log(email,password,name);
        createUser(email,password)
        .then (result => {
            const loggedUser =result.user;
            console.log(loggedUser)
            form.reset();
        })
        .catch(error =>{
            console.log(error)
        })
    }

    return (
        <div>
        <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col ">
      <div className="text-center ">
        <h1 className="text-5xl font-bold">Please Register!</h1>
      </div>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form  onSubmit={handleRegister} className="card-body">
        <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" placeholder="name" name='name' className="input input-bordered"  required/>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="email" name='email' className="input input-bordered" required/>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" placeholder="password" name='password' className="input input-bordered" required/>
           
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
            <Link to='/login' className="btn btn-active btn-link">Already Have an account?</Link>
          </div>
        </form>
      </div>
    </div>
  </div>
        
    </div>
    );
};

export default Register;