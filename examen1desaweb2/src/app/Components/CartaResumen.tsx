'use client'
import React from 'react'
import { useGastoContext } from '../Providers/GastoProvider';

export default function Resumen() {
    const { gastos, presupuesto} = useGastoContext();

    const totalGastos = gastos.reduce((total, gasto) => total +gasto.monto, 0)
    const restante = presupuesto !== null? presupuesto - totalGastos: null
  return (
    <div className='card'>
        <div className='card-body'>
            <h5 className='card-title'>Resumen de este mes</h5>
            <p className='card-text'>El presupuesto de este mes es: {presupuesto !== null ? presupuesto: 'ingrese presupuesto'} .Lps</p>
            <p className='card-text'>Total gastado: {totalGastos} .LPS</p>
            <p className='card-text'>Dinero restante: {restante !== null ? restante: 'no hay presupuesto'} LPS</p>
        </div>
    </div>
  )
}