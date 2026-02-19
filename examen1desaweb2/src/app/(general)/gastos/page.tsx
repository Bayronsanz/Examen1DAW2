'use client'
import React from 'react'
import FormularioGastos from '@/app/Components/FormularioDeGastos'
import ListaGastos from '@/app/Components/ListaDeGastos'
import { useGastoContext } from '@/app/Providers/GastoProvider'

export default function page() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { presupuesto } = useGastoContext()
    if(presupuesto===null){
        return(
            <div className='alert alert-info'>
            Ingresae presupuesto 
            </div>
        )
    }

  return (
    <div>
        <h4 className='mb-4'>Ingrese sus gastos</h4>
        <div className='row'>
            <div className='col-12'>
                <FormularioGastos/>
            </div>
            <div className='col-12'><br />
                <ListaGastos/>
            </div>
        </div>
    </div>
  )
}