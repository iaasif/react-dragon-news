
// import React from 'react';

import { Link } from "react-router-dom";
import Navbar from "./shared/Navbar";

const Login = () => {


    const handleLogin = e => {
        e.preventDefault()
    }








    return (

        <>
            <Navbar></Navbar>
            <div className="text-3xl my-10 text-center">
                <h2 className="text-3xl my-10">Please log in </h2>
                <form onSubmit={handleLogin} className=" md:w-3/4 lg:w-1/2 mx-auto">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" required name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className="text-center mt-4">dont have an account <Link 
                className="text-blue-600"
                to='/register'>register</Link> </p>
            </div>



        </>
    );
};

export default Login;