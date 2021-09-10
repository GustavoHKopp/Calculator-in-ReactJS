import handlePlusClick from './funcs/handlePlusClick';
import handleSubClick from './funcs/handleSubClick';
import handleResult from './funcs/handleResult';
import { value, setValue } from './useStats/value';

const calculator = () =>{
    return<>
        <div>
            <button onClick={() => {setValue(value + '1')}}>1</button>
            <button onClick={() => {setValue(value + '2')}}>2</button>
            <button onClick={() => {setValue(value + '3')}}>3</button>
        </div>
        <div>
            <button onClick={() => {setValue(value + '4')}}>4</button>
            <button onClick={() => {setValue(value + '5')}}>5</button>
            <button onClick={() => {setValue(value + '6')}}>6</button>
        </div>
        <div>
            <button onClick={() => {setValue(value + '7')}}>7</button>
            <button onClick={() => {setValue(value + '8')}}>8</button>
            <button onClick={() => {setValue(value + '9')}}>9</button>
        </div>
        <div>
            <button onClick={() => {setValue(value + '0')}}>0</button>
            <button onClick={handlePlusClick}>+</button>
            <button onClick={handleSubClick}>-</button>
        </div>
          <button onClick={handleResult}>=</button>

          <button onClick={() => {setValue('')}}>clear</button>
</>
}

export default calculator