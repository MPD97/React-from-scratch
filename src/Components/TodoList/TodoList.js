import React, { useState } from 'react'

import Todo from './Todo';

function   TodoList(props){
    const [todoList, setTodoList] = useState([]);
    const [inputValue, setInputValue] = useState("");
    
    const handleInputChange = (event) => {
        const { value, name } = event.target;
        setInputValue(value);
    }

    return (
        <div>
            Moja aplikacja Todo
            <input 
                name="TodoInput"
                placeholder="Co bedziemy dzisiaj robic?"
                value={inputValue}
                onChange={handleInputChange}
            />
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