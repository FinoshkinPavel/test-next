import React from 'react'
import {fetchBrands} from '@/fetchers/fetchOZCars'
import { BrandsMenu} from '@/components/OZCars/BrandsMenu/BrandsMenu'
import s from './ozcars.module.scss'

export default async function layoutOZCars({children}: {children: React.ReactNode}) {

const brands = await fetchBrands()
  return (
    <div className={s.ozCarsLayout}>
        <BrandsMenu brands={brands}/>
        {children}
    </div>
  )
}
