'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '../Provider/ProviderUsuario'

export default function LoginComponent() {
    const [usuario, setUsuario] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()
    const { login } = useAuth()

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        
        
        const userClean = usuario.trim()
        const passClean = password.trim()

        if (userClean === 'admin' && passClean === 'admin123') {
         
            if (login) login(userClean, passClean)
            
            
            router.push('/Dashboard')
        } else {
            alert('Usuario o contraseña incorrectos. Use: admin / admin123')
        }
    }

    return (
        <div className='container d-flex justify-content-center align-items-center' style={{ minHeight: '80vh' }}>
            <div className='p-4 bg-white border shadow-sm' style={{ width: '100%', maxWidth: '380px' }}>
                <h3 className='mb-3 text-center'>Iniciar Sesión</h3>
                <hr className='mb-4' />
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label className='form-label'>Usuario</label>
                        <input 
                            type='text' 
                            className='form-control' 
                            value={usuario} 
                            onChange={(e) => setUsuario(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Contraseña</label>
                        <input 
                            type='password' 
                            className='form-control' 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                    </div>
                    <button type='submit' className='btn btn-dark w-100 mt-2'>Ingresar</button>
                </form>
            </div>
        </div>
    )
}