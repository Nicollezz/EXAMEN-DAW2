'use client'
import React, { createContext, useContext, useState } from 'react'
import { Plantilla } from '../modelos/Plantilla'
import { ContextPresupuesto } from '../Context/ContextPresupuesto'
import { useGasto } from './ProviderGasto'


export default function ProviderPresupuesto({ children }: Plantilla) {
  const [presupuesto, setPresupuesto] = useState<number>(0)
  const { gastoTotal } = useGasto()

  const porcentajeUsado = presupuesto > 0 ? (gastoTotal / presupuesto) * 100 : 0
  const superoLimite = presupuesto > 0 && gastoTotal > presupuesto

  return (
    <ContextPresupuesto.Provider value={{ presupuesto, setPresupuesto, porcentajeUsado, superoLimite }}>
      {children}
    </ContextPresupuesto.Provider>
  )
}

export function usePresupuesto() {
  return useContext(ContextPresupuesto)
}