'use client'
import React, { useEffect } from 'react'
import { useGasto } from '@/app/Provider/ProviderGasto'
import { Gasto } from '../modelos/Gasto'

export default function TablaGasto() {
    const { gastos, consultarGasto, eliminarGasto } = useGasto()

    useEffect(() => {
        consultarGasto()
    }, [])

    return (
        <div style={{ margin: '20px 0' }}>
            <h4>Lista de Gastos</h4>
            <table className='table' border={1} style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th>Monto</th>
                        <th>Descripción</th>
                        <th>Categoría</th>
                        <th>Fecha</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {gastos.map((g: Gasto, index: number) => (
                        <tr key={g.id || index}>
                            <td>{g.monto}</td>
                            <td>{g.descripcion}</td>
                            <td>{g.categoria}</td>
                            <td>{g.fecha}</td>
                            <td>
                                <button 
                                    className='btn btn-danger btn-sm' 
                                   onClick={() => eliminarGasto(g.id!)}
                                    style={{ background: 'lightcoral', border: 'none', padding: '5px 10px' }}
                                >
                                    Borrar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}