import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateEmail, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
export const UserProvider = createContext(null);
const ContextProvider = ({ children }) => {

    const [loading, SetLoading] = useState(true);
    const [user, setUser] = useState(null);
    const signInPopPup = () => {
        SetLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const githubSignIn = () => {
        SetLoading(true);
        return signInWithPopup(auth, githubProvider);
    }

    const signInEmail = (email, password) => {
        SetLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const createEmailPass = (email, password) => {
        SetLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userUpdate = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    const userEmailUpdate = (email) => {
        SetLoading(true);
        return updateEmail(auth.currentUser, email);
    }

    const verifyEmail = () => {
        SetLoading(true);
        return sendEmailVerification(auth.currentUser);
    }


    const userSignOut = () => {
        SetLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            SetLoading(false);
            console.log(currentUser)
        })
        return () => {
            unSubscribe();
        }
    }, [])
    const userInfo = {
        user,
        loading,
        signInPopPup,
        githubSignIn,
        userSignOut,
        createEmailPass,
        signInEmail,
        userUpdate,
        userEmailUpdate,
        verifyEmail
    }
    return (
        <UserProvider.Provider value={userInfo}>
            {children}
        </UserProvider.Provider>
    );
};

export default ContextProvider;