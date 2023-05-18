import { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const auth = getAuth(app);
    const providerGoogle = new GoogleAuthProvider()

    const loginWithEmailAndPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const loginWithGoogle = () => {
        signInWithPopup(auth, providerGoogle)
            .then(result => {
                const user = result.user
                setUser(user)
                console.log(user)
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser)
        });
        return () => {
            return unSubscribe()
        }
    }, [])

    const logout = () => {
        return signOut(auth)
    }

    const info = {
        user,
        setUser,
        loginWithEmailAndPassword,
        loginUser,
        loginWithGoogle,
        logout
    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;