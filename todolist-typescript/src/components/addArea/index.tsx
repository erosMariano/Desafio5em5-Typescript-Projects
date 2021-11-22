import React, { useState, KeyboardEvent } from "react";
import * as S from "./styles";

type Props = {
	onEnter: (taskname: string) => void;
};

function AddArea({ onEnter }: Props) {
	const [inputText, setInputText] = useState("");
	const handleKeyUp = (e: KeyboardEvent) => {
		if (e.code === "Enter" && inputText !== "") {

			onEnter(inputText);
			setInputText("");
		}
	};

	return (
		<S.Container>
			<div className="image">➕</div>
			<input
				type="text"
				value={inputText}
				placeholder="Adicione uma tarefa"
				onChange={(e) => setInputText(e.target.value)}
				onKeyUp={handleKeyUp}
			/>
		</S.Container>
	);
}

export default AddArea;
