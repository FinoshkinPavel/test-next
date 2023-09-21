import { Metadata } from 'next'
import s from './post.module.scss'
import {getPostsById, getPosts} from '@/fetchers/getData'
import { PostsType } from '@/types/Posts/postsType'
import {Post} from '@/components/Posts/Post/Post'

type PropsType ={
    params: {id: string}
}

export async function generateMetadata({params}: PropsType):Promise<Metadata>{
    const post = await getPostsById(params.id)
    return {
        title: `post: ${post.title} | Next App`
    }
}


export async function generateStaticParams() {
    const posts: PostsType = await getPosts()
    return posts.map(el => ({id: el.id.toString()}))
    // return [{slug: "1"}]
}





export default async function PostPage({params: {id}}: PropsType){
   

    const post = await getPostsById(id)


return <div className={s.container}>
            <Post post={post}/>
    </div> 
}