import { FetchBrandResponseType } from '@/fetchers/fetchOZCars'
import Link from 'next/link'
import React, { FC } from 'react'
import s from './brands.module.scss'

type BrandsMenuPropsType = {
  brands: FetchBrandResponseType[]
}

export const BrandsMenu: FC<BrandsMenuPropsType> = ({brands}) => {

  return <ul className={s.brandsBlock}>
    {brands.map((el, i) => (<Link key={i} className={s.link} href={`/${el.name}`}>{el.name}</Link>))}
  </ul>
}