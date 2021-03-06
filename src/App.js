import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import {connect} from 'react-redux'
import {updateCurrent} from './reducers/todo'
import {bindActionCreators} from 'redux'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        
        <div className="Todo-App">
          <TodoForm 
            currentTodo={this.props.currentTodo}
            changeCurrent={this.props.updateCurrent}
          />
          <TodoList todos={this.props.todos} />
        </div>
      </div>
    );
  }
 
}

// const todoChangehandler = (value) => store.dispatch(updateCurrent(value))

const mapStateToProps = (state) => state
// const mapDispatchToProps = {updateCurrent} will work too without bindActionCreators
const mapDispatchToProps = (dispatch) => bindActionCreators({updateCurrent}, dispatch)
const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)
export default ConnectedApp
// export default App;
