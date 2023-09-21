import React from 'react'
import s from './brandPage.module.scss'
import { fetchBrands, fetchCarsByBrand } from '@/fetchers/fetchOZCars'
import { CarCard } from '@/components/OZCars/CarCard/CarCard'
import Link from 'next/link'

export const generateStaticParams =  () => {
    // const res = await fetchBrands()
    return [
      {brand: 'Toyota'},
      {brand: 'Ford'},
      {brand: 'Mazda'},
      {brand: 'Lexus'},
      {brand: 'Kia'},
    ]
    // return res.map(el => ({brand: el.name.replace(' ','-')}))
}

export default async function BrandCar({params }: {params: {brand: string}}) {

    const carsBrand = await fetchCarsByBrand(params.brand.replace(' ', '-'))
    const urlBrand = `/ozCars/${params.brand.replace(' ', '-')}`

  return (
    <div className={s.brandPage}>
        {carsBrand.filteredData.map((el)=> (<Link key={el.id} href={`${urlBrand}/${el.name.replace(' ', '-')}`}><CarCard cars={el}/></Link>))}
    </div>
  )
}
