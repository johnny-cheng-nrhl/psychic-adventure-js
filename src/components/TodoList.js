import React, {Component} from 'react';
import {connect} from 'react-redux'
import {fetchTodos} from '../reducers/todo'

const TodoItem = ({id, name, isComplete}) => (
    <li key={id}>
        <input type="checkbox" defaultChecked={isComplete} /> 
        {name}
    </li>
)

class TodoList extends Component {
    componentDidMount() {
        this.props.fetchTodos()
    }

    render () {
        return (
            <div className="Todo-List">
                <ul>
                    { this.props.todos && this.props.todos.length > 0 
                        ? this.props.todos.map(todo => <TodoItem key={todo.id} {...todo} />)
                        : "Loading..."
                    }
                </ul>
            </div>  
        )
    }
}

export default connect(
    (state) => ({todos: state.todos}),
    {fetchTodos}
)(TodoList);