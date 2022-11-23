import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, sendEmailVerification, signInWithEmailAndPassword, signOut, updateEmail } from "firebase/auth";
import { auth, db } from "../user/fireBase";
import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";

// Creating a new context
const UserContext = createContext()

// Exporting to provide on App
export const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState({})

    const [userData, setUserData] = useState({})

    const [isActive, setIsActive] = useState(0);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const getUserData = async (currentUser) => {
        const docRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(docRef);
        try {
            console.log("Document data:", docSnap.data());
            setUserData(docSnap.data());
        } catch {
            console.log("No documents found")
        }
    }

    const addServiceData = async (name, type, price, start, end) => {
        await setDoc(doc(db, "users", user.uid), {
            serviceName: name,
            serviceType: type,
            servicePrice: price,
            serviceStart: start,
            serviceEnd: end
        });
    }

    const updateUserData = async (value) => {
        const docRef = doc(db, "users");
        await updateDoc(docRef, {
            userName: value
        });
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        return signOut(auth)
    }

    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    const verifyEmail = () => {
        return sendEmailVerification(user)
    }

    const updateEmailAddress = (email) => {
        return updateEmail(user, email)
    }

    // Other Functions

    // For switching active tab in Dashboard
    const switchTab = (index) => {
        setIsActive(index)
    }

    // For getting current time
    const getCurrentTime = () => {
        const date = new Date();
        console.log(date)
        return date
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser)
            setUser(currentUser)
            getUserData(currentUser)

        })
        return () => {
            unsubscribe()
        }
    }, [])

    return (
        <UserContext.Provider value={{ createUser, logout, login, resetPassword, updateEmailAddress, verifyEmail, getUserData, updateUserData, userData, user, isActive, switchTab, getCurrentTime, addServiceData }}>
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserContext)
}