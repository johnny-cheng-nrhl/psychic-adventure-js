import React from 'react';
import {connect} from 'react-redux'
import {updateCurrent} from '../reducers/todo'

const TodoForm = (props) => {
    console.log('Rendering Form')
    const {currentTodo, updateCurrent} = props
    const handleInputChange = (evt) => {
        const value = evt.target.value
        updateCurrent(value)
    }
    return (
        <form>
            <input type="text"
                onChange={handleInputChange}
                value={currentTodo} />
        </form>
    );
}

export default connect(
    (state) => ({currentTodo: state.currentTodo}),
    {updateCurrent}
)(TodoForm);