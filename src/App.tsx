import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [arr, setArr] = useState([]);
  useEffect(()=>{
    async function data() {
      const res:any = await fetch('https://localhost:7000/api/Garage/GetGarage');
      const data = await res.json();
      setArr(data);
    }
    data();
  }, [])

  return (
    <div className="App">
      <h1>hi</h1>
      {
        arr && arr.map((el, index: number) => {
          return (
            <h1 key={index}>{el['garage']}</h1>
          )})
      }
    </div>
  );
}

export default App;
