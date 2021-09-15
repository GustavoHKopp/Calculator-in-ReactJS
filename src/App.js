import './App.css';
import { useState } from 'react';
import Button from './components/button';

function App() {
  const [value, setValue] = useState('')
  const [operation, setOperation] = useState('+')

  const handleOperation = (opt) => {
    setValue(value + opt)
    setOperation(opt)
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
            <Button handleOnClick={() => { setValue('') }} description="Ac" size="500" />
            <Button handleOnClick={() => { setValue(value + '0') }} description={0} />
            <Button handleOnClick={() => handleOperation('/')} description="/" />
            <Button handleOnClick={() => handleOperation('*')} description="*" />
          </div>
          <div>
            <Button handleOnClick={() => { setValue(value + '7') }} description={7} />
            <Button handleOnClick={() => { setValue(value + '8') }} description={8} />
            <Button handleOnClick={() => { setValue(value + '9') }} description={9} />
            <Button handleOnClick={() => handleOperation('-')} description="-" />
          </div>
          <div>
            <Button handleOnClick={() => { setValue(value + '4') }} description={4} />
            <Button handleOnClick={() => { setValue(value + '5') }} description={5} />
            <Button handleOnClick={() => { setValue(value + '6') }} description={6} />
            <Button handleOnClick={() => handleOperation('+')} description="+" />
          </div>
          <div>
            <Button handleOnClick={() => { setValue(value + '1') }} description={1} />
            <Button handleOnClick={() => { setValue(value + '2') }} description={2} />
            <Button handleOnClick={() => { setValue(value + '3') }} description={3} />
            <Button handleOnClick={handleResult} description="=" />
          </div>
          <Button handleOnClick={() => { setValue(value + '.') }} description="." />
        </div>
      </header>
    </div>
  );
}

export default App;