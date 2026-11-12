'use client'
import React from 'react'
import { useAuth } from './Provider/ProviderUsuario'
import LoginComponent from './Components/LoginComponent'
import DashboardPage from './(general)/Dashboard/page'

export default function Home() {
  const { isLoggedIn } = useAuth()


  if (!isLoggedIn) {
    return (
      <main style={{ padding: '20px' }}>
        <LoginComponent />
      </main>
    )
  }

  
  return <DashboardPage />
}