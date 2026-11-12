export interface Presupuesto {
  presupuesto: number;
  setPresupuesto: (valor: number) => void;
  porcentajeUsado: number;
  superoLimite: boolean;
  gastoTotal: number;
}