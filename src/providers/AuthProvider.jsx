// import React from 'react';

import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

import app from '../firebase/firebase.config'
// import App from "../App";


// context using
const auth = getAuth(app)


// context using
export const AuthContext = createContext(null);








const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }
    // context using
    const authInfo = {

        user,
        createUser,
    };



    return (
        <AuthContext.Provider
            value={authInfo}
        >
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;