'use client'
import React, { useState } from 'react'
import { usePresupuesto } from '../Provider/ProviderPresupuesto'

export default function PresupuestoForm() {
    const [valorInput, setValorInput] = useState('')
    const { presupuesto, setPresupuesto, porcentajeUsado, superoLimite } = usePresupuesto()

    function guardar(e: React.FormEvent) {
        e.preventDefault()
        setPresupuesto(Number(valorInput))
        setValorInput('')
    }

    return (
        <div style={{ margin: '20px 0' }}>
            <h4>Presupuesto Establecido: Lps. {presupuesto.toFixed(2)}</h4>
            <form className='form' onSubmit={guardar}>
                <input 
                    type="number"
                    placeholder="Monto de presupuesto mensual"
                    className="form-control"
                    value={valorInput}
                    onChange={(e) => setValorInput(e.target.value)}
                /><br />
                <button type="submit" className="btn btn-primary">Guardar Presupuesto</button>
            </form>

            
            {porcentajeUsado >= 80 && !superoLimite && (
                <div style={{ background: 'yellow', padding: '10px', marginTop: '10px' }}>
                    Ha alcanzado el 80% del presupuesto
                </div>
            )}

            {/* Alerta roja si supera el límite */}{superoLimite && (
                <div style={{ background: 'lightcoral', color: 'white', padding: '10px', marginTop: '10px' }}>
                    Has superado el límite del presupuesto, debes ajustar gastos
                </div>
            )}
        </div>
    )
}