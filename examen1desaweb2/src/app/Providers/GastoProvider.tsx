'use client'
import React, { useCallback, useContext, useEffect, useState} from 'react'
import { Gasto } from '../Models/Gastos'
import { PlantillaNode } from '../Models/PlantillaReact'
import { GastoContext, GastoContextType } from '../Context/GastoContext'

export default function GastoProvider({children}: PlantillaNode) {
    const [gastos, setGastos] = useState<Gasto[]>([]);
    const [presupuesto, setPresupuesto] = useState<number | null>(null)
    const [alertaPresupuesto, setAlertaPresupuesto] = useState<'ninguna'| 'amarilla'| 'roja'>('ninguna')
    const [isLogged, setIsLogged]= useState<boolean>(false);

    function login(){
        setIsLogged(true);
    }

    function logout(){
        setIsLogged(false)
    }

    const guardarPresupuesto = useCallback((monto: number) =>{
        setPresupuesto(monto);
    }, [])

    const calcularAlerta = useCallback( () => {
        if(presupuesto===null || gastos.length === 0){
            setAlertaPresupuesto('ninguna')
            return
        }

        const totalGastos = gastos.reduce((total,gasto) => total+gasto.monto,0)
        const porcentaje=(totalGastos / presupuesto)*100;

        if(porcentaje >= 100){
            setAlertaPresupuesto('roja')
        }else if (porcentaje>=80){
            setAlertaPresupuesto('amarilla')
        }else{
            setAlertaPresupuesto('ninguna')
        }
    }, [presupuesto, gastos])

    const cargarGastos = useCallback(async()=> {
        try{
            const res = await fetch('http://localhost:5000/gasto')
            const data = await res.json()
            setGastos(Array.isArray(data)? data: []);
        }catch(error){
            console.error('error al cargar gastos:', error);
        }
    }, [])

    const guardarGastos = useCallback(async(gasto: Gasto) =>{
        try{
            const res = await fetch('http://localhost:5000/gasto', {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(gasto),
            })
            if(res.ok){
                await cargarGastos()
                alert('gasto agregado')
            }else{
                alert('no se pudo cargar el gasto')
            }

        }catch(error){
            console.error('error al guardar gasto', error)
            alert('Error al guardar el gasto')
        }
    },[cargarGastos])

    const eliminarGasto = useCallback(async(idgasto: number) => {
        try{
            const res = await fetch(`http://localhost:5000/gasto/${idgasto}`, {
                method: 'DELETE',
            })
            if(res.ok){
                setGastos(prev=>prev.filter(g => g.idgasto !== idgasto))
            }else{
                alert('no se pudo eliminar')
            }
        }catch(error){
            console.error('Error al eliminar el gasto:', error)
            alert('Error al eliminar el gasto')
        }
    }, []);

    useEffect(() =>{
        if(isLogged){
            // eslint-disable-next-line react-hooks/set-state-in-effect
            cargarGastos()
        }

    },[isLogged, cargarGastos])

    useEffect(()=> {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        calcularAlerta();
    },[gastos, presupuesto, calcularAlerta])

    const contextValue: GastoContextType ={
        gastos,
        presupuesto,
        alertaDePresupuesto: alertaPresupuesto,
        isLogged,
        login,
        guardarPresupuesto,
        guardarGastos,
        cargarGastos,
        calcularAlerta,
        eliminarGasto,
        logout,
    }

  return (
    <GastoContext.Provider value={contextValue}>
        {children}
    </GastoContext.Provider>
  )
}

export function useGastoContext(){
    return useContext(GastoContext)
}