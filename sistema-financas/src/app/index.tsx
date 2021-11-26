import { useEffect, useState } from "react";
import InfoArea from "../components/InfoArea";
import InputArea from "../components/InputArea";
import TableArea from "../components/TableArea";
import { categories } from "../data/categories";
import { items } from "../data/items";
import { filterListByMonth, getCurrentMonth } from "../helpers/dataFilter";
import { Item } from "../types/Item";
import * as S from "./App.styles";

const App = () => {
	const [list, setList] = useState(items);
	const [filteredList, setFilteredList] = useState<Item[]>([]);
	const [currentMonth, setCyrrentMonth] = useState(getCurrentMonth);
	const [income, setIncome] = useState(0);
	const [expense, setExpense] = useState(0);


	useEffect(() => {
		setFilteredList(filterListByMonth(list, currentMonth));
	}, [list, currentMonth]);

	const handleMonthChange = (newMonth: string) => {
		setCyrrentMonth(newMonth)
	}

	useEffect(() =>{
		let incomeCount = 0;
		let expenseCount = 0;
		
		for(let i in filteredList){
			if(categories[filteredList[i].category].expense){
				expenseCount += filteredList[i].value;
			}else{
				incomeCount += filteredList[i].value;
			}
		}

		setIncome(incomeCount);
		setExpense(expenseCount);

	}, [filteredList])


	const handleAddItem = (item: Item) =>{
		let newList = [...list];
		newList.push(item);
		setList(newList);
	}
	return (
		<S.Container>
			<S.Header>
				<S.HeaderText>Sistema Financeiro</S.HeaderText>
			</S.Header>

			<S.Body>
				<InfoArea 
					currentMonth={currentMonth}
					onMonthChange={handleMonthChange}
					income={income}
					expense={expense}
				/>

				<InputArea onAdd={handleAddItem}/>

				<TableArea list={filteredList}/>
			</S.Body>
		</S.Container>
	);
};

export default App;
