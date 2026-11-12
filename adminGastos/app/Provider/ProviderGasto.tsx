'use client'
import React, { useContext, useState } from 'react'
import { Plantilla } from '../modelos/Plantilla'
import { Gasto } from '../modelos/Gasto'
import { ContextGasto } from '../Context/ContextGasto'

export default function ProviderGasto({ children }: Plantilla) {
  const [gastos, setGastos] = useState<Gasto[]>([])

  async function consultarGasto() {
    try {
      const res = await fetch('http://localhost:5000/gasto')
      const data = await res.json()
      setGastos(data)
    } catch (error) {
      alert('Ocurrió un error al cargar los gastos')
    }
  }

  async function agregarGasto(gasto: Gasto) {
    try {
      const res = await fetch('http://localhost:5000/gasto', {
        method: 'POST',
        body: JSON.stringify(gasto),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      await res.json()
      consultarGasto()
      alert('Gasto guardado exitosamente')
    } catch (error) {
      alert('Ocurrió un error al guardar el gasto')
    }
  }

 async function eliminarGasto(id: number | string) {
    try {
      const res = await fetch('http://localhost:5000/gasto/' + id, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      await res.json()
      consultarGasto()
      alert('Gasto eliminado')
    } catch (error) {
      setGastos(gastos.filter(g => g.id !== id))
    }
  }

  const gastoTotal = gastos.reduce((acc, curr) => acc + Number(curr.monto), 0)

  return (
    <ContextGasto.Provider value={{ gastos, gastoTotal, consultarGasto, agregarGasto, eliminarGasto }}>
      {children}
    </ContextGasto.Provider>
  )
}

export function useGasto() {
  return useContext(ContextGasto)
}