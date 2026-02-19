'use client'
import React, { useState } from 'react'
import { Gasto } from '../Models/Gastos'
import { useGastoContext } from '../Providers/GastoProvider'

export default function FormularioGastos() {
    const { guardarGastos } = useGastoContext()

    const [categoria, setCategoria] = useState('')
    const [monto, setMonto] = useState<number | string>('')
    const [fecha, setFecha] = useState('');

    const guardarGasto = (e: React.FormEvent) => {
        e.preventDefault()

        const nuevoGasto: Gasto = {
            categoria,
            monto: parseFloat(monto as string),
            fecha
        }

        guardarGastos(nuevoGasto)
        setCategoria('')
        setMonto('');
        setFecha('')
    }

    return (
        <form onSubmit={guardarGasto}>
            <div className="row mb-3">
                <div className="col-md-6">
                    <input type="number" className="form-control" placeholder="Monto" value={monto} onChange={(e) => setMonto(e.target.value)} required
                    />
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-md-6">
                    <select className="form-select" value={categoria} onChange={(e) => setCategoria(e.target.value)} required>
                        <option value="">Categoría</option>
                        <option value="Comida">Comida</option>
                        <option value="Transporte">Transporte</option>
                        <option value="Servicios">Servicios</option>
                        <option value="Entretenimiento">Entretenimiento</option>
                        <option value="Otros">Otros</option>
                    </select>
                </div>
                <div className="col-md-6">
                    <input type="date" className="form-control" value={fecha} onChange={(e) => setFecha(e.target.value)} required />
                </div>
            </div>
            <div className="text-center">
                <button type="submit" className="btn btn-primary px-4">
                    Guardar
                </button>
            </div>
        </form>
    )
}