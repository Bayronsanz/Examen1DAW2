'use client'
import React, { useState } from 'react'
import { useGastoContext } from '../Providers/GastoProvider'

export default function FormularioPresupuesto() {
    const {guardarPresupuesto} = useGastoContext()
    const [monto, setMonto] = useState<number | string> ('')

    const GuardarPresupuesto = ()=> {
        if(monto=='' || isNaN(Number(monto))){
            alert('ingresa un monto valido')
            return
        }
        guardarPresupuesto(Number(monto));
        alert('presupuesto guardado')
        setMonto('')
    }
  return (
    <div className='input-group mb-3 w-50 justify-content-center'>
        <input type='number' className='form-control' placeholder='Ingrese su presupuesto' value={monto} onChange={(e) => setMonto(e.target.value)}></input>
       <br /> <button onClick={GuardarPresupuesto} className='btn btn-primary' type='button'>Guardar</button>
    </div>
  )
}