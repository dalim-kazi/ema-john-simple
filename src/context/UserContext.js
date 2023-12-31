import React, { useState } from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut}from 'firebase/auth'
import app from '../firebase/FirebaseConfig';
import { useEffect } from 'react';
export const AuthContext = createContext()
const auth =getAuth(app)
const UserContext = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading,setLoading]=useState(true)
    const craeteUser = (email, password) => {
         return createUserWithEmailAndPassword(auth,email,password)
    }
    const singIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('currentUser', currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return ()=> unSubscribe()
    },[])
    const authInfo ={user,craeteUser,singIn,logOut,loading}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;