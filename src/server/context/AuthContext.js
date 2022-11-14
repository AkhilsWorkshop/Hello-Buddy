import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../user/fireBase";

// Creating a new context
const UserContext = createContext()

// Exporting to provide on App
export const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState({})

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        return signOut(auth)
    }

    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser)
            setUser(currentUser)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    return (
        <UserContext.Provider value={{ createUser, logout, login, resetPassword, user }}>
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserContext)
}