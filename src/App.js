import React, { useState, useEffect } from 'react';
import Hand from './components/Hand';
import Deck from './components/Deck';
import './App.css';

const arrayMaster = [{ name: "A", value: 1 },
  { name: "B", value: 2 }, { name: "C", value: 3 },
  { name: "D", value: 4 }, { name: "E", value: 5 }, { name: "F", value: 6 },
  { name: "G", value: 7 }, { name: "H", value: 8 }, { name: "I", value: 9 },
  { name: "J", value: 10 }, { name: "K", value: 11 }, { name: "L", value: 12 },
  { name: "M", value: 13 }, { name: "N", value: 14 }, { name: "O", value: 15 },
  { name: "P", value: 16 }, { name: "Q", value: 17 }, { name: "R", value: 18 },
  { name: "S", value: 19 }, { name: "T", value: 20 }, { name: "U", value: 21 },
  { name: "V", value: 22 }, { name: "W", value: 23 }, { name: "X", value: 24 },
  { name: "Y", value: 25 }, { name: "Z", value: 26 }
];

function App() {
  const [roundNumber, setRoundNumber] = useState(1); 
  const [round, setRound] = useState(0)
  const [master, setMaster] = useState(arrayMaster);
  const [arrayA, setArrayA] = useState([]);
  const [arrayB, setArrayB] = useState([]);
  const [arrayC, setArrayC] = useState([]);
  const [turn, setTurn] = useState('A');
  const [totalA, setTotalA] = useState(0);
  const [totalB, setTotalB] = useState(0);
  const [totalC, setTotalC] = useState(0);

  const moveItem = (item, fromArray, setFromArray, toArray, setToArray) => {
    setFromArray(fromArray.filter(i => i !== item));
    setToArray([...toArray, item]);
  };

  const handleMasterClick = (item) => {
    if (turn === 'A' && arrayA.length < 4) {
      moveItem(item, master, setMaster, arrayA, setArrayA);
      setTurn('B');

    } if (turn === 'B' && arrayB.length < 4) {
      moveItem(item, master, setMaster, arrayB, setArrayB);
      setTurn('C');
    } 
    if (turn === 'C' && arrayC.length < 2) {
      moveItem(item, master, setMaster, arrayC, setArrayC);
      setTurn('A');
    }
  };

  const handleArrayCClick = (item) => {
    moveItem(item, arrayC, setArrayC, master, setMaster);
  };

  const handleMasterClickForC = (item) => {
    moveItem(item, master, setMaster, arrayC, setArrayC);
  };

  const handleClick = () => {
    setRound(round + 1);
  };
  const handleReset = () => {
    setRound(0);
    setMaster(arrayMaster);
    setArrayA([]);
    setArrayB([]);
    setArrayC([]);
    setTurn('A');
    setTotalA(0);
    setTotalB(0);
    setTotalC(0);
  };  


  useEffect(() => {
    const sumA = arrayA.reduce((acc, item) => acc + item.value, 0);
    setTotalA(sumA);
  }, [arrayA]);

  useEffect(() => {
    const sumB = arrayB.reduce((acc, item) => acc + item.value, 0);
    setTotalB(sumB);
  }, [arrayB]);

  useEffect(() => {
    const sumC = arrayC.reduce((acc, item) => acc + item.value, 0);
    setTotalC(sumC);
  }, [arrayC]);

  return (
    <div className="container">
      <Hand />
      <Deck arrayC={arrayC} handleArrayCClick={handleArrayCClick} />
      <Hand/>
      <div className="round-container">
        <h2>Round: {round}</h2>
        <button onClick={handleClick}>Click to advance to next</button>

        <h2>Reset {round}</h2>
        <button onClick={handleReset}>Reset</button>
     
      </div>
      <div className="master-array">
        <h2>Master Array</h2>
        <ul>
          {master.map(item => (
            <li key={item.name} onClick={() => handleMasterClick(item)}>
              {item.name}: {item.value}
            </li>
          ))}
        </ul>
      </div>
      <div className="array-container">
        <h2>Array A (Total: {totalA})</h2>
        <ul>
          {arrayA.map(item => (
            <li key={item.name}>
              {item.name}: {item.value}
            </li>
          ))}
        </ul>
      </div>
      <div className="array-container">
        <h2>Array B (Total: {totalB})</h2>
        <ul>
          {arrayB.map(item => (
            <li key={item.name}>
              {item.name}: {item.value}
            </li>
          ))}
        </ul>
      </div>
      <div className="array-container">
        <h2>Array C (Total: {totalC})</h2>
        <ul>
          {arrayC.map(item => (
            <li key={item.name} onClick={() => handleArrayCClick(item)}>
              {item.name}: {item.value}
            </li>
          ))}
          {arrayC.length === 0 && master.map(item => (
            <li key={item.name} onClick={() => handleMasterClickForC(item)}>
              {item.name}: {item.value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
