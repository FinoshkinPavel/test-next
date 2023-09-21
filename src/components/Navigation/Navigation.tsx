'use client'
import { NavigationType } from "@/types/Navigation/Navigation"
import Link from "next/link"
import {usePathname} from 'next/navigation'
import s from './navigation.module.scss'


type Props = {
    navLink: NavigationType[]
}

export const Navigation = ({navLink}: Props) => {
    const pathName = usePathname()
    return <>
     {
        navLink.map((el, i) => {
            const isActive = pathName === el.href
            
            return (
                <Link key={i} href={el.href} className={`${s.link} ${pathName === el.href ? s.active : ''}`}>{el.label}</Link>
            )
        })
     }
    </>
}