import s from './header.module.scss'
import { NavigationType } from "@/types/Navigation/Navigation"
import { Navigation } from "../Navigation/Navigation"

const navList: NavigationType[] = [
    {href: '/', label: 'Home'},
    {href: '/blog', label: 'Blog'},
    {href: '/about', label: 'About'},
    {href: '/ozCars', label: 'OZCars'},
]

export const TheHeader = () => {
    return <header className={s.container}>
        <Navigation navLink={navList}/>
    </header>
}