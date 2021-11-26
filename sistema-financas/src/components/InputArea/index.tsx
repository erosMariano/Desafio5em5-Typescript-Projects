import React, { useState } from 'react'
import { formatDate } from '../../helpers/dataFilter';
import { Item } from '../../types/Item'
import * as C from './styles'


type Props = {
    onAdd: (item: Item) => void;
}
function InputArea({ onAdd }: Props) {
    const [inputNome, setInputNome] = useState("");
    const [type, setType] = useState("food");
    const [value, setValue] = useState(0);
    const error: string[] = [];
    

    function validateType(): string{
        if(type === ""){
            setType("food")
        }
        return type;
    }


    function myNewDate(): {day:number, month:number, year:number} {
        const date = formatDate(new Date()).split("/")
        const day = parseInt(date[0])
        const month = parseInt(date[1])
        const year = parseInt(date[2])

        return {day, month, year}
    }

    function validateValue(){
        if(value <=  0){
            error.push("O valor digitado é menor que zero")
        }else{
            return value
        }
    }

    function validateName(){
        if(inputNome === ""){
            error.push("O campo de nome tá vazio")
        }else{
            return inputNome
        }
    }


    function errorApp(){
        let MyErros = "";
        error.forEach((element) =>{
            MyErros += `${element} \n`
        })

        alert(MyErros)
    }

    
    const handleAddEvent = () =>{
        const {day, month, year} = myNewDate();

        const category = validateType();
        const value = validateValue();
        const name = validateName();


        if(name && value){
            let newItem: Item = {
                title: name,
                value: value,
                category : category,
                date: new Date(year, month, day)
            }
            onAdd(newItem)
        }else{
            errorApp();
        }

    }


    return (
        <C.Container>
            <div>
                <input type="text" placeholder="Título" onChange={e => setInputNome(e.target.value)}/>
                <select name="#" id="" onChange={e => setType(e.target.value)}>
                    <option value="food">Alimentação</option>
                    <option value="rent">Alugel</option>
                    <option value="salary">Salário</option>
                </select>
                <input type="number" placeholder="Valor" onChange={e => setValue(parseInt(e.target.value))}/>
            </div>
            <button onClick={handleAddEvent}>Clique me</button>
        </C.Container>
    )
}

export default InputArea
