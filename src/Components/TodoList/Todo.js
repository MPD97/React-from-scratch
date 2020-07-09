import React from 'react';

function Todo(props){
    return(
        <div className="todo">
            <span>{props.todo}</span>
            <button
                onClick={() => props.handleCloseClick(props.todo)}
            >X</button>
        </div>
    )
}

export default Todo;
