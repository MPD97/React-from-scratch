import React, { useState } from 'react'

import Todo from './Todo';

function   TodoList(props){
    const [todoList, setTodoList] = useState(["1","2"]);
    return (
        <div>
            Moja aplikacja Todo:
            {todoList.map((todo)=> (
                <Todo 
                    todo={todo}
                />
            ))}
        </div>
    )
}

export default TodoList;