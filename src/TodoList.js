import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

export class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { task: 'Make Tea' },
        { task: 'Get Water' },
        { task: 'Make Breakfast' },
      ],
    };
  }
  render() {
    const todos = this.state.todos.map((todo) => {
      return <Todo task={todo.task} />;
    });
    return (
      <div>
        <h1>Todo List</h1>
        <NewTodoForm />
        <ul>
          <li>{todos}</li>
        </ul>
      </div>
    );
  }
}

export default TodoList;