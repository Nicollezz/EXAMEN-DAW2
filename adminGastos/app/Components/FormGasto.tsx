'use client'
import React, { useState } from 'react'
import { useGasto } from '../Provider/ProviderGasto'

export default function FormGasto() {
    const [monto, setMonto] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [categoria, setCategoria] = useState('')
    const [fecha, setFecha] = useState('')

    const { agregarGasto } = useGasto()

    function crear(e: React.FormEvent) {
        e.preventDefault()
        agregarGasto({
            monto: Number(monto),
            descripcion,
            categoria,
            fecha
        })
        setMonto('')
        setDescripcion('')
        setCategoria('')
        setFecha('')
    }

    return (
        <div style={{ margin: '20px 0' }}>
            <h4>Registrar Gasto</h4>
            <form className='form' onSubmit={crear}>
                <input 
                    type="number" 
                    placeholder="Monto" 
                    className="form-control"
                    value={monto} 
                    onChange={(e) => setMonto(e.target.value)} 
                    required 
                /><br />
                <input 
                    type="text" 
                    placeholder="Descripción" 
                    className="form-control"
                    value={descripcion} 
                    onChange={(e) => setDescripcion(e.target.value)} 
                    required 
                /><br />
                <input 
                    type="text" 
                    placeholder="Categoría (ej. Comida)" 
                    className="form-control"
                    value={categoria} 
                    onChange={(e) => setCategoria(e.target.value)} 
                    required 
                /><br />
                <input 
                    type="date" 
                    className="form-control"
                    value={fecha} 
                    onChange={(e) => setFecha(e.target.value)} 
                    required 
                /><br />
                <button type="submit" className="btn btn-success">Guardar Gasto</button>
            </form>
        </div>
    )
}