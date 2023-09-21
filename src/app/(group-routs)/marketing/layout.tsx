import s from './marketing.module.scss'

export default function MarketingLayout({children}: {children: React.ReactNode}) {
 return <div className={s.container}>
    {children}
 </div>
}