import React from 'react';

function TodoForm(props) {
    const {currentTodo, changeCurrent} = props
    const handleInputChange = (evt) => {
        const value = evt.target.value
        changeCurrent(value)
    }
    return (
        <form>
            <input type="text"
                onChange={handleInputChange}
                value={currentTodo} />
        </form>
    );
}

export default TodoForm;