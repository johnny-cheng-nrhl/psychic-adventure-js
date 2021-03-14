import React from 'react';
import {connect} from 'react-redux'

const TodoItem = ({id, name, isComplete}) => (
    <li key={id}>
        <input type="checkbox" defaultChecked={isComplete} /> 
        {name}
    </li>
)

const TodoList = (props) => {
    console.log('Rendering List')
    const {todos} = props
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

export default connect(
    (state) => ({todos: state.todos})
)(TodoList);