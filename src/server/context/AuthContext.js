import { createContext, useContext, useEffect, useState } from "react";
import { AuthErrorCodes, createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateEmail } from "firebase/auth";
import { auth } from "../user/fireBase";

// Creating a new context
const UserContext = createContext()

// Exporting to provide on App
export const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState({})

    const [isActive, setIsActive] = useState(0);

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

    const updateEmailAddress = (email) => {
        return updateEmail(auth, email)
    }

    const switchTab = (index) => {
        setIsActive(index)
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
        <UserContext.Provider value={{ createUser, logout, login, resetPassword, updateEmailAddress, user, isActive, switchTab }}>
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserContext)
}