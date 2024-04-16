// import React from 'react';

import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {

    // checking the user is login or not 
    const { user, loading } = useContext(AuthContext);

    // not useing back button 
    const location = useLocation()

    if (loading) {
        return <span className="loading loading-bars loading-lg"></span>
    }

    // the condition of private route 
    if (user) {
        return children;
    }

    // sending user for log in 

    //set location state 
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;