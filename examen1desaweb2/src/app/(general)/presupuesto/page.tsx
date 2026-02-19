/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import React from 'react'
import FormularioPresupuesto from '@/app/Components/FormularioDePresupuesto'
import MensajeDeAlerta from '@/app/Components/Alerta'
import { useGastoContext } from '@/app/Providers/GastoProvider'

export default function page() {
    const { presupuesto } = useGastoContext()
    const presupuestoTexto = presupuesto !== null? `LPS.${presupuesto}`: 'No se ingresado un presupuesto'
  return (
    <div className='container'>
        <div className='card text-center mt-4'>
           <h3>Presupuesto del mes: {presupuestoTexto}</h3>
        </div>
        <MensajeDeAlerta>
        </MensajeDeAlerta>
        <h2 className='text-center mt-4'>Ingresar Presupuesto mensual</h2><br />
        <FormularioPresupuesto/>
    </div>
  )
}