import React, { useState } from 'react'

import Todo from './Todo';

function   TodoList(props){
    const [todoList, setTodoList] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [error, setError] = useState("");
    
    const handleInputChange = (event) => {
        const { value, name } = event.target;
        setInputValue(value);
    }
    const handleButtonClick = (event) => {

        if(todoList.some(todo => todo === inputValue)){
            setError("Taka wartość już istnieje.");
            return;
        }else{
            setError("");
        }

        setTodoList([...todoList, inputValue]);
        setInputValue("");
    }

    return (
        <div>
            <h1>Moja aplikacja Todo</h1>

            <input 
                name="TodoInput"
                placeholder="Co bedziemy dzisiaj robic?"
                value={inputValue}
                onChange={handleInputChange}
            />

            <button
                onClick={handleButtonClick}
            >
                dodaj
            </button>

            {error &&
                <p>{error}</p>
            }

            {todoList.map((todo)=> (
                <Todo 
                    key={todo}
                    todo={todo}
                />
            ))}
        </div>
    )
}

export default TodoList;