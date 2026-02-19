'use client'
import React from 'react'
import { useGastoContext } from '../Providers/GastoProvider'

export default function MensajeDeAlerta() {
    const { alertaDePresupuesto: alertaPresupuesto } = useGastoContext()

    if(alertaPresupuesto === 'ninguna'){
        return null;
    }

    const mensaje = alertaPresupuesto === 'amarilla' ? 'Ha alcanzado el 80% del presupuesto': 'has superado el limite del presupuesto, debes ajustar gastos'

    const claseAlerta = alertaPresupuesto === 'amarilla' ? 'alert alert-warning' : 'alert alert-danger'

  return (
    <div className={claseAlerta} role='alert'>
        {mensaje}
    </div>
  )
}