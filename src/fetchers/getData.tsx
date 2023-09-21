import {PostType, PostsType} from '@/types/Posts/postsType'

const baseUrl = 'https://jsonplaceholder.typicode.com'
// `http://localhost:3006/posts`
export async function getPosts(): Promise<PostsType> {
    const res = await fetch(`${baseUrl}/posts`,{
        //обьект настроек расширенный next, revalidate - св-во автозапроса через время 
        next: {
            revalidate: 10,
        }
    })
     return res.json()
 }



 export async function getPostsById(id: string): Promise<PostType> {
    const res = await fetch(`${baseUrl}/posts/${id}`,{
    })

    if(!res.ok) throw new Error('Something went wrong...')

     return res.json()
 }

 export async function getPostsBySearch(params:string): Promise<PostsType> {
    const res = await fetch(`${baseUrl}/posts?q=${params}`)
    if(!res.ok) throw new Error('Unable to fetch posts')
    return res.json()
 }