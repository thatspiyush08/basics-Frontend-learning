import { useEffect, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [bankData, setBankData] = useState({});
  const [exchangeData1, setExchangeData1] = useState({});
  const [exchangeData2, setExchangeData2] = useState({});

  useEffect(() => {
    setTimeout(() => {
      setBankData({
        income: 1000
      });
    }, 2000);
  }, []);
//useEffect is used to allow fucntion re render given  number of times and if its [] it re renders only once 

  useEffect(() => {
    setTimeout(() => {
      setExchangeData1({
        returns: 100
      });
    }, 1000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setExchangeData2({
        returns: 200
      });
    }, 1500); // Set a different delay for exchangeData2
  }, []);

  // const exchangeIncome=(exchangeData1.income+exchangeData2.income);

    //useMemo allows this data to render on the basis of depencies array making sure this data is only rendered when the depencies are changed
  //this is is used to avoid re rendering of independent data
  const exchangeIncome = useMemo(() => {
    return exchangeData1.returns + exchangeData2.returns;
  }, [exchangeData1, exchangeData2]);

  const incomeTax = (bankData.income + exchangeIncome) * 0.3;

  return (
    <div>
      Hii mate, your income is {incomeTax}
    </div>
  )
}

export default App