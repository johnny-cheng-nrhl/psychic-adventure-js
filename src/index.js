import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store'
import {updateCurrent} from './reducers/todo'
import {bindActionCreators} from 'redux'

// const todoChangehandler = (value) => store.dispatch(updateCurrent(value))
const actions = bindActionCreators({
  todoChangehandler: updateCurrent
}, store.dispatch)

const render = () => {
  const state = store.getState()
  ReactDOM.render(
    <React.StrictMode>
      <App todos={state.todos}
        currentTodo={state.currentTodo}
        changeCurrent={actions.todoChangehandler}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

render()
store.subscribe(render)

// setTimeout(() => {
//   store.dispatch({type: 'TODO_ADD', payload: {id: 5, name: 'New Todo', isComplete: false}})
// }, 1000)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
