import { useState } from 'react'
import reactLogo from './assets/react.svg'

import todo from './assets/todo.png'
import './App.css'

function App() {
  const [todo, settodo] = useState([{
    
  }])

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={todo} className="todo logo" alt="todo logo" />
        </a>
      </div>
      <h1>To Do Application</h1>
      <div className="card">
        <CustomButton count={count} setCount={setCount}></CustomButton>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

function CustomButton(props){
  function addtodo(){
    props.setCount(props.count+1);
  }
  return <button onClick={addtodo}>Counter: {props.count}</button>

}

export default App
