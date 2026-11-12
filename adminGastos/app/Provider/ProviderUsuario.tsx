'use client'
import React, { createContext, useContext, useState } from 'react'

interface UsuarioContextType {
    isLoggedIn: boolean;
    login: (u: string, p: string) => boolean;
}

const ContextUsuario = createContext<UsuarioContextType>({
    isLoggedIn: false,
    login: () => false,
})

export function ProviderUsuario({ children }: { children: React.ReactNode }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    function login(u: string, p: string): boolean {
      
        if (u === 'admin' && p === 'admin123') {
            setIsLoggedIn(true)
            return true
        }
        return false
    }

    return (
        <ContextUsuario.Provider value={{ isLoggedIn, login }}>
            {children}
        </ContextUsuario.Provider>
    )
}

export function useAuth() {
    return useContext(ContextUsuario)
}