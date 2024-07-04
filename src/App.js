import logo from './logo.svg';
import './App.css';

// 1. Create a counter component - a + button and when clicked increases the value of the number displayed.
// 2. Create a counter component with increment and decrement option.
// 3. Create a counter component with increment and decrement and a number text box which would decide how much it has to increment or decrement.

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
