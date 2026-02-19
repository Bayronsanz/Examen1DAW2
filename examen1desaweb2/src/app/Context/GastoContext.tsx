import { createContext } from "react";
import { Gasto } from "../Models/Gastos";

export interface GastoContextType{
    gastos: Gasto[]
    presupuesto: number | null;
    alertaDePresupuesto: 'ninguna' | 'amarilla' | 'roja';
    isLogged: boolean
    login: () => void
    guardarPresupuesto: (monto:number) => void;
    guardarGastos: (gasto: Gasto) => Promise<void>;
    cargarGastos: () => Promise<void>;
    calcularAlerta: () => void;
    eliminarGasto: (idgasto: number) => Promise<void>;
    logout: () => void
}

export const GastoContext = createContext<GastoContextType>({
    gastos:[],
    presupuesto: null,
    alertaDePresupuesto: 'ninguna',
    isLogged: false,
    login: () =>{},
    guardarPresupuesto: () => {},
    guardarGastos: async () =>{},
    cargarGastos: async ()=> {},
    calcularAlerta: () => {},
    eliminarGasto: async () => {},
    logout: ()=>{},
})