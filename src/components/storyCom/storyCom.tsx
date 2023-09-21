import React from 'react'
import s from './storyCom.module.scss'
import Message from '@/assets/message.svg'
export const storyCom = () => {
  return (
    <div className={s.storytest}>{<Message/>}</div>
  )
}
