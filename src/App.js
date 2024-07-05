import logo from './logo.svg';
import './App.css';
import Counter from './Counter/Counter';

// 1. Create a counter component - a + button and when clicked increases the value of the number displayed.
// 2. Create a counter component with increment and decrement option.
// 3. Create a counter component with increment and decrement and a number text box which would decide how much it has to increment or decrement.

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
