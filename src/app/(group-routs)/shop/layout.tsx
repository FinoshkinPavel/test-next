import s from './shop.module.scss'

export default function ShopLayout({children}: {children: React.ReactNode}) {
 return <div className={s.container}>
    {children}
 </div>
}