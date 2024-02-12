import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [bankData,setBankData]=useState({});
  const [exchangeData,setExchangeData]=useState({});
  // fetch('https://google.com',async(res)=>{
  //   const json=await res.json();
  //   setBankData(json);
  //   //assume it is like {income:100} so that we can extract income
  // });

  setTimeout(()=>{
    setBankData({
      income : 1000
    })
  },2000);

  setTimeout(()=>{
    setExchangeData({
      returns : 100
    })
  },1000);
  const incomeTax=(bankData.income+exchangeData.returns)*0.3;
  return(
    <div>
      Hii mate , your income is {incomeTax}
    </div>
  )
}

export default App
