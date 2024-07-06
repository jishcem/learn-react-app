import { useState } from "react";

export default function TwoWayCounter() {
    const [count, setCount] = useState(0);

    function handleIncrement() {
        setCount(c => c + 1)
    }

    function handleDecrement() {
        setCount(c => c - 1)
    }

    return (
        <div style={{ marginTop: "50px" }}>
            <button onClick={handleIncrement}>+</button> &nbsp;
            <button onClick={handleDecrement}>-</button> &nbsp;
            Count : {count}
        </div>
    );
}