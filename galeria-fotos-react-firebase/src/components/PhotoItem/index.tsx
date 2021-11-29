import React from "react";
import * as C from "./styles";

type Props = {
	url: string;
	name: string;
	onDelete: (name: string) => void;
};

function PhotoItem({ url, name, onDelete }: Props) {
    
	function handleDelete(name: string) {
		onDelete(name);
	}

	return (
		<C.Container>
			<img src={url} alt={name} />
			{name}

			<button onClick={() => handleDelete(name)}>Excluir</button>
		</C.Container>
	);
}

export default PhotoItem;
