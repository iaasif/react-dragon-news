// import React from 'react';
import { useContext } from 'react';
import Navbar from './shared/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Register = () => {

    // context using

    const { createUser } = useContext(AuthContext);


    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const email = form.get('email');
        const photo = form.get('photo');
        const password = form.get('password');
        // console.log(name, photo, email, password);


        createUser(email, password)
            .then((res) => {
                // Signed up 
                console.log(res);
                // ...
            })
            .catch((error) => {
                console.log(error.code);
                console.log(error.message);
                // ..
            });

    }




    return (
        <div>
            <Navbar></Navbar>
            <div className="text-3xl my-10 text-center">
                <h2 className="text-3xl my-10">Please <span className='text-blue-400'>register</span> </h2>
                <form onSubmit={handleRegister} className=" md:w-3/4 lg:w-1/2 mx-auto">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="text" placeholder="photo url" name="photo" className="input input-bordered" />
                    </div>
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
                        <input type="password" required name="password" placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className="text-center mt-4">already have an account <Link
                    className="text-blue-600"
                    to='/login'>login</Link> </p>
            </div>

        </div>
    );
};

export default Register;