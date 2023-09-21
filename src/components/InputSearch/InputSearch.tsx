'use Client'
import { getPostsBySearch } from '@/fetchers/getData'
import {PostsType} from '@/types/Posts/postsType'
import { FormEventHandler, useState } from "react"
import { CustomInput } from './CustomInput/CustomInput'

type Props = {
    onSearch: (value: PostsType) => void
}

export const InputSearch = ({onSearch}: Props) => {
    
    const [search, setSearch] = useState('')

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault()
        const res = await getPostsBySearch(search)
        onSearch(res) 
    }

    return <form onSubmit={handleSubmit}>
        <CustomInput value={search} onChangeText={setSearch}/>
    </form>
}