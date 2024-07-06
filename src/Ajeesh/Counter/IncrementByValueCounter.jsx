import { useState } from "react";

export default function IncrementByValueCounter() {
    const [count, setCount] = useState(0);
    const [increment, setIncrement] = useState(1);

    function handleIncrement() {
        setCount(c => c + increment)
    }

    function handleIncrementChange(e) {
        setIncrement(Number(e.target.value));
    }

    return (
        <>
            <div style={{ marginTop: "50px" }}>
                <input type="number" value={increment} onChange={handleIncrementChange} />

                <button onClick={handleIncrement}>+ by {increment}</button> &nbsp;
                Count : {count}
            </div>
        </>
    );
}