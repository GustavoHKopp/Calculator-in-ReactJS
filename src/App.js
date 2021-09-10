import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState('')
  const [operation, setOperation] = useState('+')
  
const handlePlusClick = () =>{
    setValue(value + '+')
    setOperation('+')
}

const handleSubClick = () => {
    setValue(value + '-')
    setOperation('-')
}

const handleMultClick = () => {
  setValue(value + '*')
  setOperation('*')
}

const handleDivdClick = () => {
  setValue(value + '/')
  setOperation('/')
}

const handleResult = () => {
  const splitedValue = value.split(operation)

  switch (operation) {
    case '+':
      const resultSum = splitedValue.map((item) => parseFloat(item)).reduce((sum, current) => sum + current)
      setValue(resultSum)
      break;
    case '-':
      const resultSub = splitedValue.map((item) => parseFloat(item)).reduce((sum, current) => sum - current)
      setValue(resultSub)
      break;
    case '*':
      const resultMult = splitedValue.map((item) => parseFloat(item)).reduce((sum, current) => sum * current)
      setValue(resultMult)
      break;
    case '/':
      const resultDivide = splitedValue.map((item) => parseFloat(item)).reduce((sum, current) => sum / current)
      setValue(resultDivide)
      break;
    
    default:
      break;
  }

}

  return (
    <div className="App">
      <header className="App-header">
        <h1>Calculadora</h1>
        <p>
          {value}
        </p>
        <div>
        <div>
          <button onClick={() => {setValue('')}}>Ac</button>
            <button onClick={() => {setValue(value + '0')}}>0</button>
            <button onClick={handleDivdClick}>/</button>
            <button onClick={handleMultClick}>*</button>
        </div>
        <div>
            <button onClick={() => {setValue(value + '7')}}>7</button>
            <button onClick={() => {setValue(value + '8')}}>8</button>
            <button onClick={() => {setValue(value + '9')}}>9</button>
            <button onClick={handleSubClick}>-</button>
        </div>
        <div>
            <button onClick={() => {setValue(value + '4')}}>4</button>
            <button onClick={() => {setValue(value + '5')}}>5</button>
            <button onClick={() => {setValue(value + '6')}}>6</button>
            <button onClick={handlePlusClick}>+</button>
        </div>
        <div>
            <button onClick={() => {setValue(value + '1')}}>1</button>
            <button onClick={() => {setValue(value + '2')}}>2</button>
            <button onClick={() => {setValue(value + '3')}}>3</button>
            <button onClick={handleResult}>=</button>
        </div>
            <button onClick={() => {setValue(value + '.')}}>.</button>

        </div>
      </header>
    </div>
  );
}

export default App;
