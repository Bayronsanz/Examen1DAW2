'use client'
import React from 'react'
import Link from 'next/link';
//import { useGastoContext } from '../Providers/GastoProvider';

export default function BarraNavegacion() {

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-secondary">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="/presupuesto">Gestion</Link>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" href="/presupuesto">Presupuesto</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" href="/gastos">Gastos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" href="/resumen">resumen</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}