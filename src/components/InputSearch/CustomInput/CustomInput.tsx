import { ChangeEvent, ComponentProps, FC } from "react"

type PropsType = ComponentProps<'input'> & {
    onChangeText?: (value: string) => void
}

export const CustomInput: FC <PropsType> = ({onChangeText, ...restProps}) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeText && onChangeText(e.currentTarget.value)
    }
    return <div>
    <input 
        type="search"
        placeholder="search..." 
        onChange={onChangeHandler}
        {...restProps}
        />
    <button type="submit">Search</button>
        </div>

}