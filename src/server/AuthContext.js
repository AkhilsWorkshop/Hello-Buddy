import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, sendEmailVerification, signInWithEmailAndPassword, signOut, updateEmail } from "firebase/auth";
import { auth, db } from "./fireBase";
import { doc, setDoc, getDoc, updateDoc, addDoc, collection, getDocs, serverTimestamp, onSnapshot } from "firebase/firestore";

// Creating a new context
const UserContext = createContext(null)

// Exporting to provide on App
export const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState({})

    const [userData, setUserData] = useState(null)

    const [serviceData, setServiceData] = useState(null)

    const [isActive, setIsActive] = useState(0);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const saveAccountDetails = async (userID, fullName, age, currencyType) => {
        const data = {
            fullName: fullName,
            age: age,
            currencyType: currencyType
        };
        await setDoc(doc(db, "userData", userID), data);
    }

    const getUserData = async (currentUser) => {
        const docRef = doc(db, "userData", currentUser.uid);
        const docSnap = await getDoc(docRef);
        try {
            console.log("Document data:", docSnap.data());
            setUserData(docSnap.data());
        } catch {
            console.log("No documents found")
        }
    }

    const addServiceData = async (userID, name, type, price, start, end) => {
        const time = new Date();
        const dateTime = time.getDate() + "/" + time.getMonth() + "/" + time.getFullYear() + " " + time.getHours() + ":" + time.getMinutes()
        const data = {
            clientTime: dateTime,
            serverTime: serverTimestamp(),
            sName: name,
            sType: type,
            sPrice: price,
            sStart: start,
            sEnd: end
        }
        const dbRef = collection(db, `${userID}`);
        await addDoc(dbRef, data);
        // await addDoc(doc(db, `${userID}`), data);
    }


    const getServiceData = async (userID) => {
        const querySnapshot = await getDocs(collection(db, userID));
        setServiceData(querySnapshot)
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
        const date = Date.now();
        console.log(date)
        return date
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser)
            setUser(currentUser)
            getUserData(currentUser)
            getServiceData(currentUser.uid)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    return (
        <UserContext.Provider value={{ createUser, saveAccountDetails, logout, login, resetPassword, updateEmailAddress, verifyEmail, getUserData, updateUserData, userData, user, isActive, switchTab, getCurrentTime, addServiceData, serviceData }}>
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserContext)
}