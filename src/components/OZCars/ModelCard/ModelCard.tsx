import { FetchCarResponseType } from '@/fetchers/fetchCarType'
import Image from 'next/image'
import React, { FC } from 'react'
import {baseUrl} from '@/fetchers/fetchOZCars'
import s from './modelCar.module.scss'
import Link from 'next/link'

type ModelCardPropsType = {
    modelCar: FetchCarResponseType
}

export const ModelCard: FC <ModelCardPropsType> = (props) => {
    const {modelCar} = props
    const urlBrandModel = `/ozCars/${modelCar.card.brand}/${modelCar.card.name}`
  return (
    <div className={s.modelCarCard}>
        <Image src={`${baseUrl}${modelCar.card.gallery_set}`} alt='modelCar' width={200} height={150}/>
        <ul>
            {modelCar.openCar.cargrade_set.map((el, i) => <Link key={i} href={`${urlBrandModel}/${i}-${el.grade}`}><li>{el.grade}: ⇀</li></Link>)}
        </ul>
    </div>
  )
}
