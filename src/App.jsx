import logo from './logo.svg';
import Another from './Another';
import './App.css';
import { useState } from 'react';

function App() {

  // Counter Function
  const [count, setCount] = useState(0)

  function decrement() {
    setCount(prevCount => prevCount - 1);
  }

  function increment() {
    setCount(prevCount => prevCount + 1);
  }
   
  // Css as javascript object.
  // Use camelCase to specify styles.
  const someStyle = {
    background: 'blue',
    color: 'white',
    fontSize: '28px',
    fontWeight: 'bold',
  }
  return (
    <div className="App">
      <header className="App-header">

        {/* Re Use Components: This is me rendering it anywhere.. */}
        {/* Passing props */}
        <Another name="Joseh"/>
        <div>
          <span>{count}</span>
          <button onClick={decrement}>-</button>
          <button onClick={increment}>+</button>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <label htmlFor=""></label>
        <div className="whatever"></div>
        {true &&
          // Using CSS
          <p style={someStyle}>
            {2 + 5}
          </p>
        }

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
