import { useState } from "react";

export default function Counter(){
    const [count, setCount] = useState(0);

    function handleIncrement(){
        setCount(count => count+ 1)
    }

    return (
        <div>
            <label>Value: {count} </label>
            <button onClick={handleIncrement}> Increment [+] </button>
        </div>
    )
}