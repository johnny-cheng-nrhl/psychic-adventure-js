import React from 'react';

const TodoItem = ({id, name, isComplete}) => (
    <li key={id}>
        <input type="checkbox" defaultChecked={isComplete} /> 
        {name}
    </li>
)



function TodoList(props) {
    const { todos } = props
    
    return (
        <div className="Todo-List">
        <ul>
            { todos && todos.length > 0 
                ? todos.map(todo => <TodoItem key={todo.id} {...todo} />)
                : "Loading..."
            }
            </ul>
          </div>  
    );
}

export default TodoList;