'use client'
import s from './post.module.scss'
//компонента ошибки использует дерективу 'use client' обязательно 

export default function ErrorPost({error}: {error: Error}){
    return <div className={s.container}>
        <h1>Oppps!</h1>
        <h3>{error.message}</h3>
    </div>
}