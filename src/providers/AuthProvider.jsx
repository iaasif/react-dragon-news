// import React from 'react';

import { createContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword, getAuth, onAuthStateChanged,
    signInAnonymously, signInWithEmailAndPassword, signOut
} from "firebase/auth";

import app from '../firebase/firebase.config'
// import App from "../App";


// context using
const auth = getAuth(app)


// context using
export const AuthContext = createContext(null);








const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    // a satate for checking  user is login or not 
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)

    }

    //sign in with email and password 
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }


    //sign out or log out 
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // Get the currently signed-in user 

    useEffect(() => {

        const unSubscirbe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            unSubscirbe();
        }
    }, [])

    // context using
    const authInfo = {

        user,
        loading,
        createUser,
        logOut,
        signIn,
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