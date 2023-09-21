import React from 'react'
import s from './typeCarPage.module.scss'

export default function ModelTypePage({params}: {params: {brand: string, model: string, type: string}}) {
  return (
    <div className={s.typeBlock}>
        <p>brand: {params.brand}</p>
        <p>model: {params.model}</p>
        <p>type: {params.type}</p>
    </div>
  )
}
