import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import Todo from './assets/todo.png';
import './App.css';

function App() {
  const [todo, settodo] = useState([
    {
      title: 'Go to GYM',
      description: 'From 12am-1am',
    },
    {
      title: 'Do Front-End',
      description: 'From 1am-3am',
    },
    {
      title: 'Sleep',
      description: 'From 3am-11am',
    },
  ]);

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={Todo} className="todo logo" alt="todo logo" />
        </a>
      </div>
      <h1>To Do Application</h1>
      <div className="card">
        <CustomButton todo={todo} settodo={settodo}></CustomButton>
      </div>

      <p className="read-the-docs">
        Click on the button to Add Random TODO's.
      </p>
    </>
  );
}

function CustomButton(props) {
  function addtodo() {
    props.settodo((prevTodo) => [
      ...prevTodo,
      {
        title: 'Random Todo',
        description: 'Random Description',
      },
    ]);
  }

  return (
    <div>
      <button onClick={addtodo}>Add Todos</button>
      {props.todo.map(function (todos, index) {
        return (
          <TODOS
            key={index}
            title={todos.title}
            description={todos.description}
          ></TODOS>
        );
      })}
    </div>
  );
};

function TODOS(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
}

export default App;

