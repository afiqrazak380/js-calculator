import { useState } from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState('0');

  const handleNumber = (e) => {
    const number = e.target.textContent;

    if (display === '0') {
      setDisplay(number);
    } else {
      setDisplay(display + number);
    }
  };

  const handleOperator = (e) => {
    const operator = e.target.textContent;
    setDisplay(display + ' ' + operator + ' ');
  };

  const handleEqual = () => {
    setDisplay(eval(display));
  };

  const handleDecimal = () => {
    const array = display.split(' ');
    const lastElement = array[array.length - 1];

    if (!lastElement.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const handleAC = () => {
    setDisplay('0');
  };
  return (
    <div className='App'>
      <div className='calculator'>
        <div id='display' className='row'>
          {display}
        </div>
        <div id='clear' className='row' onClick={handleAC}>
          AC
        </div>
        <div id='seven' onClick={handleNumber}>
          7
        </div>
        <div id='eight' onClick={handleNumber}>
          8
        </div>
        <div id='nine' onClick={handleNumber}>
          9
        </div>
        <div id='multiply' onClick={handleOperator}>
          *
        </div>
        <div id='four' onClick={handleNumber}>
          4
        </div>
        <div id='five' onClick={handleNumber}>
          5
        </div>
        <div id='six' onClick={handleNumber}>
          6
        </div>
        <div id='divide' onClick={handleOperator}>
          /
        </div>
        <div id='one' onClick={handleNumber}>
          1
        </div>
        <div id='two' onClick={handleNumber}>
          2
        </div>
        <div id='three' onClick={handleNumber}>
          3
        </div>
        <div id='add' onClick={handleOperator}>
          +
        </div>
        <div id='zero' onClick={handleNumber}>
          0
        </div>
        <div id='decimal' onClick={handleDecimal}>
          .
        </div>
        <div id='equals' onClick={handleEqual}>
          =
        </div>
        <div id='subtract' onClick={handleOperator}>
          -
        </div>
      </div>
    </div>
  );
}

export default App;
