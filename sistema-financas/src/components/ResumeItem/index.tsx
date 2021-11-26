import React from 'react'
import * as C from "./styles";

type Props = {
    title: string;
    value: number;
    color?: string;
}
function ResumeItem({title, value,color}: Props) {
    return (
        <C.Container>
            <C.Title>{title}</C.Title>
            <C.Info color={color}>{value.toFixed(2)}</C.Info>
        </C.Container>
            

    )
}

export default ResumeItem
