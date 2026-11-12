'use client'
import React from 'react'
import PresupuestoForm from '../../Components/PresupuestoForm'
import FormGasto from '../../Components/FormGasto'
import TablaGasto from '../../Components/TablaGasto'

export default function DashboardPage() {
    return (
        <div className='container py-4' style={{ maxWidth: '1100px' }}>
            <h2 className='mb-3'>Control de Gastos</h2>
            <hr className='mb-4' />

            {/* Presupuesto */}
            <div className='mb-4'>
                <PresupuestoForm />
            </div>

            <hr className='my-4' />

            {/* Formulario y Tabla */}
            <div className='row'>
                <div className='col-md-5 mb-4'>
                    <FormGasto />
                </div>
                <div className='col-md-7'>
                    <TablaGasto />
                </div>
            </div>
        </div>
    )
}