'use client'
import React from 'react'
import { useGastoContext } from '../Providers/GastoProvider'

export default function ListaGastos() {
    const {gastos, eliminarGasto} = useGastoContext()
    
  return (
    <div className='table-responsive mb-4 '>
        <table className='table'>
            <thead>
                <tr>
                    <th>Categoria</th>
                    <th>Precio</th>
                    <th>Fecha</th>
                </tr>
            </thead>
            <tbody>
                {gastos.map((gasto,index) => (
                    <tr key={gasto.idgasto || index}>
                        <td>{gasto.categoria}</td>
                        <td>{gasto.fecha}</td>
                        <td><button className='btn btn-sm btn-danger' onClick={() => eliminarGasto(gasto.idgasto!)}>Eliminar</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}