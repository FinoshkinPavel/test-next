import { BrandCarType, baseUrl } from '@/fetchers/fetchOZCars'
import Image from 'next/image'
import React, { FC } from 'react'
import s from './carCard.module.scss'

type BrandCardPropsType = {
    cars: BrandCarType
}

export const CarCard: FC<BrandCardPropsType> = ({cars}) => {
  const {comments_count, gallery_set, name, rating_avg} = cars
  return (
    <div className={s.card}>
        <Image src={`${baseUrl}${gallery_set}`} alt='img car' width={200} height={150}/>
        <div>name car: {name}</div>
        <div>rating: {rating_avg}</div>
        <div>comment car: {comments_count ? comments_count : 0}</div>
    </div>
  )
}
