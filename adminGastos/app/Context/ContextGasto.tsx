import { createContext } from "react";
import { Gasto } from "../modelos/Gasto";

export const ContextGasto = createContext({
  gastos: [] as Gasto[],
  gastoTotal: 0,
  consultarGasto: () => { },
  agregarGasto: (gasto: Gasto) => { },
 eliminarGasto: (id: number | string) => { },
});