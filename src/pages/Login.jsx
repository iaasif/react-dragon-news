
// import React from 'react';

import Navbar from "./shared/Navbar";

const Login = () => {
    return (

        <>
            <Navbar></Navbar>
            <h2 className="text-3xl">Please log in </h2>
            <form className=" md:w-3/4 lg:w-1/2">

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>



        </>
    );
};

export default Login;