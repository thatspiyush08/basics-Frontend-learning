import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [title,setTitle]=useState('Piyush');

  function Click(){
    setTitle(Math.random().toString());
  }
  return (<div>
    <button onClick={Click}>Click Here to Change Title</button>
    <Header title={title}></Header>
    <Header title="Narula"></Header>
  </div>);
}

function Header({title}){
  return <div>
    {title}
  </div>
}


export default App
