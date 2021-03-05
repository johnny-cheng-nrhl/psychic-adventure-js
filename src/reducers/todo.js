const initState = {
    todos: [
        {id: 1, name: 'Create Static UI', isComplete: true},
        {id: 2, name: 'Create Initial State', isComplete: true},
        {id: 3, name: 'Use State to render UI', isComplete: false},
        {id: 4, name: 'Refactor to components', isComplete: false}
    ],
    currentTodo: ''
}

const TODO_ADD = 'TODO_ADD'
const CURRENT_UPDATE = 'CURRENT_UPDATE'

// So this can be used elsewhere
export const updateCurrent = (value) => ({type: CURRENT_UPDATE, payload: value})

function reducer(state= initState, action) {
    switch (action.type) {
        case TODO_ADD:
            return {...state, todos: state.todos.concat(action.payload)}
        case CURRENT_UPDATE: 
            return {...state, currentTodo: action.payload}
        default:
            return state
    }

}

export default reducer;