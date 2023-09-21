// 'use client'
import { getPostsById } from '@/fetchers/getData'
import s from './post.module.scss'
import React, {  FC, useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { PostType } from '@/types/Posts/postsType'

type PropsType = {
    post: PostType
}

function fun<T> (arg: T){
  
}

export const Post:FC<PropsType> = ({post}) => {
    // const [post, setPost] = useState<Record<string, any>>()
    // const params = useParams()
    // const {id} = params
    // // console.log(params)
    // const fetchP =  async () => {
    //     const res = await getPostsById((id as string))
    //     setPost(res)
    // }

    // useEffect(()=>{
    //     fetchP()
    // },[])
  
  return <>
        <div className={s.headerPost}>
        <h1>Post</h1>
        <h3>{post?.title}</h3>
        </div>
        <div className={s.bodyPostContainer}>
        <p>{post?.body}</p>
        </div>
  </>
}