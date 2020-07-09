import React from 'react';

function Todo(props){
    return(
        <div className="todo">
            {props.todo}
        </div>
    )
}

export default Todo;
