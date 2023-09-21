import { CarCard } from '@/components/OZCars/CarCard/CarCard'
import { fetchAllCars } from '@/fetchers/fetchOZCars'
import React from 'react'
import s from './ozcars.module.scss'
import Link from 'next/link'

export default async function OZCars() {

    const brands = await fetchAllCars()
    const {filteredData} = brands
    console.log(brands)
  return (
    <div className={s.brandCarsBlock}>
        {filteredData && filteredData.map((el) => <Link key={el.id} href={`ozCars/${el.brand}`}><CarCard  cars={el}/></Link>)}
    </div>
  )
}
