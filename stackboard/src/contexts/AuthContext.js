"use client"

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth,githubProvider,googleProvider } from '@/config/firebase';
import { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

// Create a context
const AuthContext = createContext();

// Create a custom hook for using the color context
export function useAuth() {
  return useContext(AuthContext);
}

// Create a provider component to wrap your app
export function AuthProvider({ children }) {

    const [currentUser, setCurrentUser] = useState(null)
    const router = useRouter();


    function signup(email, password){
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function signin(email, password){
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logout(){
        // return signOut(auth)

        signOut(auth).then(() => {
            router.push('/login')
        }).catch((error) => {
            alert(error.message)
        });
    }

    async function loginWithGoogle(){
        await signInWithPopup(auth, googleProvider)
        router.push('/')
    }

    async function loginWithGitHub(){
        await signInWithPopup(auth, githubProvider)
        router.push('/')
    }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUser(user)
            } else {
                setCurrentUser(null)
            }
        });
    
        return unsubscribe;
      }, []);

    const value = {
        currentUser,
        signup,
        signin,
        logout,
        loginWithGoogle,
        loginWithGitHub
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
