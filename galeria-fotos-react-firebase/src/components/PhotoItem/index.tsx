import React from 'react'
import * as C from "./styles";

type Props = {
    url: string;
    name: string;
}

function PhotoItem({url, name}: Props) {
    return (
        <C.Container>
            <img src={url} alt={name}/>
            {name}
        </C.Container>
    )
}

export default PhotoItem
