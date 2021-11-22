import { useState } from "react";
import AddArea from "../components/addArea";
import ListItem from "../components/ListItem";
import { Item } from "../types/Item";
import * as S from "./styles";

function App() {
	const [list, setList] = useState<Item[]>([
		{ id: 0, name: "Ir no mercado", done: false },
		{ id: 1, name: "Comprar bolo", done: true },
	]);

	const handleAddTask = (taskName: string) => {
		let newList = [...list];

		newList.push({
			id: list.length + 1,
			name: taskName,
			done: false,
		});

		setList(newList);
		
	};
	
	const handleDone = (element: Item) => {
		let newList = [...list];
		
		newList.forEach((myItem, i) => {
			if(myItem.id === element.id){
				newList[i].done = element.done
			}
		})
		setList(newList);
	};

	return (
		<S.Container>
			<S.Area>
				<S.Header>Lista de tarefas</S.Header>
				<AddArea onEnter={handleAddTask} />
				{list.map((item, index) => (
					<ListItem key={index} item={item} onDone={handleDone}/>
				))}
			</S.Area>
		</S.Container>
	);
}

export default App;
