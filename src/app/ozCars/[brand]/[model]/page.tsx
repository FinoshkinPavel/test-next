import { ModelCard } from '@/components/OZCars/ModelCard/ModelCard'
import React from 'react'
import {fetchCarsByModel,fetchCarsByBrand,fetchAllCars} from '@/fetchers/fetchOZCars'
import s from './modelCarPage.module.scss'

// export const generateStaticParams = async () => {
//     const allCars = await fetchAllCars()
//     return allCars.filteredData.map(el => ({brand: el.brand, model: el.name}))
// }

export default async function CarModelPage({params}: {params: {brand: string, model: string}}) {
  
    const car = await fetchCarsByModel(params.brand, params.model)

    return (
    <div className={s.modelBlock}>
        <ModelCard modelCar={car}/>
    </div>
  )
}
