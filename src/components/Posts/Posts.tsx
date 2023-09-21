import { PostsType } from "@/types/Posts/postsType"
import Image from "next/image"
import Link from "next/link"
import  icon from "@/assets/message.svg"

type Props = {
    posts : PostsType
    
}


export default function Posts({posts}: Props){
    return <>
     {posts.map((el) => {
            return <li key={el.id}>
                <Image src={icon} alt="icon" width={20} height={20}/>
                {/* <Icon style={{width: 26, height: 26}}/> */}
                <Link href={`/blog/${el.id}`}>{el.title}</Link>
            </li>
        })}
    </>
}