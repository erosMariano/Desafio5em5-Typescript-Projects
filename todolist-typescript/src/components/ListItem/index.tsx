import { useState } from "react";
import { Item } from "../../types/Item";
import * as S from "./styles";

type Props = {
	item: Item;
	onDone: (element: Item) => void;
};
function ListItem({ item, onDone }: Props) {
	const [isChecked, setIsChecked] = useState(item.done);

	
	function myDone(){
		item.done = !isChecked;
		onDone(item)
	}
	return (
		<S.Container done={isChecked}>
			<input 
                type="checkbox" 
                id={`myId${item.id}`} 
                checked={isChecked} 
                onChange={e => setIsChecked(e.target.checked)}
				onClick={() => myDone()}
            />
			<label htmlFor={`myId${item.id}`}>{item.name} - {item.done.toString()}</label> 

		</S.Container>
	);
}

export default ListItem;
