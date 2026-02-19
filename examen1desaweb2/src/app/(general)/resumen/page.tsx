'use client'
import React from 'react'
import Resumen from '@/app/Components/CartaResumen'
import MensajeDeAlerta from '@/app/Components/Alerta'

export default function page() {
  return (
    <div>
        <h4 className='mb-4'>Resumen de gastos </h4>
        <MensajeDeAlerta/>
        <Resumen/>
    </div>
  )
}