import { getTodos, createTodo } from '../lib/todoServices'

const initState = {
    todos: [],
    currentTodo: ''
}

const TODO_ADD = 'TODO_ADD'
const TODOS_LOAD = 'TODOS_LOAD'
const CURRENT_UPDATE = 'CURRENT_UPDATE'

// So this can be used elsewhere
export const updateCurrent = (value) => ({type: CURRENT_UPDATE, payload: value})
export const loadTodos = (todos) => ({type: TODOS_LOAD, payload: todos})
export const addTodo = (todo) => ({type: TODO_ADD, payload: todo})

export const fetchTodos = () => {
    return (dispatch) => {
        getTodos()
            .then(todos => dispatch(loadTodos(todos)))
    }
    // return () => {
    //     getTodos().then(todos => console.log(todos.json()))
    // }
}

export const saveTodo = (name) => {
    return (dispatch) => {
        createTodo(name)
            .then(res => dispatch(addTodo(res)))
    }
}

function reducer(state= initState, action) {
    switch (action.type) {
        case TODO_ADD:
            return {...state, currentTodo: '', todos: state.todos.concat(action.payload)}
        case TODOS_LOAD: 
            return {...state, todos: action.payload}
        case CURRENT_UPDATE: 
            return {...state, currentTodo: action.payload}
        default:
            return state
    }

}

export default reducer;