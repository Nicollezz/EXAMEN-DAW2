import { createContext } from "react";

export const ContextPresupuesto = createContext({
  presupuesto: 0,
  setPresupuesto: (val: number) => { },
  porcentajeUsado: 0,
  superoLimite: false,
});