
import { Metadata } from 'next'
import s from './about.module.scss'
import Link from 'next/link'
import {getPosts} from '@/fetchers/getData'
import { useEffect, useState } from 'react'
import { PostType } from '@/types/Posts/postsType'
import Posts from '@/components/Posts/Posts'
import { InputSearch } from '@/components/InputSearch/InputSearch'



 export const metadata: Metadata = {
    title: 'Blog | Next App'
 }

export default async function Blog(){
    const posts = await getPosts()
    
    return <div className={s.container}>
    <h1 >Blog</h1>
    {/* <InputSearch onSearch={setPosts}/> */}
    
    <ol><Posts posts={posts}/></ol>
    
    
    </div>
}