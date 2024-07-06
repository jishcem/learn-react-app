import './App.css';
import {default as AjeeshCounter} from './Ajeesh/Counter/Counter';
import {default as AjeeshIncrementByValueCounter} from './Ajeesh/Counter/IncrementByValueCounter';
import {default as AjeeshTwoWayCounter} from './Ajeesh/Counter/TwoWayCounter';
import {default as AjeeshTwoWayByValueCounter} from './Ajeesh/Counter/TwoWayByValueCounter';

// 1. Create a counter component - a + button and when clicked increases the value of the number displayed.
// 2. Create a counter component with increment and decrement option.
// 3. Create a counter component with increment and decrement and a number text box which would decide how much it has to increment or decrement.

function App() {
  return (
    <div className="App">
      <AjeeshCounter />
      <AjeeshTwoWayCounter />
      <AjeeshIncrementByValueCounter />
      <AjeeshTwoWayByValueCounter />
    </div>
  );
}

export default App;
