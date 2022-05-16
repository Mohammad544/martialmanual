import React, { useContext, useEffect, useState } from 'react'
import { auth } from '../fb'

const Auth = React.createContext()

export function useAuth() {
    return useContext(Auth)
}

export function AuthProvider({children}) {

    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    function register(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logout() {
        return auth.signOut()
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email)
    }

    useEffect(() => {
        const cancel = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })
        return cancel
    }, [])

    const value = {
        currentUser,
        register,
        login,
        logout,
        resetPassword

    }

    return (
        <Auth.Provider value={value}>
            {!loading && children}
        </Auth.Provider>
    )
}