import React, { useEffect } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from '../firebase/firebase.config';
import { useState } from 'react';



export const AuthContext = createContext(null);


const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const AuthProvider = ({ children }) => {
    const [ user, setUser ] = useState({});
    const [ loading, setLoading ] = useState(true)

    //    google login
    const gooleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }


    const githubLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }




    const singIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const handleUpdateProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user)
            setLoading(false)
        });
    }, [])



    const authentication = {
        gooleLogin,
        githubLogin,
        createUser,
        singIn,
        logOut,
        handleUpdateProfile,
        loading,
        user,

    }


    // observ 


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user)

        });
    }, [])
    return (
        <AuthContext.Provider value={authentication}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
