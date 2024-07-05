import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    function handleIncrement() {
        setCount(c => c + 1)
    }

    return (
        <div style={{ marginTop: "50px" }}>
            <button onClick={handleIncrement}>+</button> &nbsp;
            Count : {count}
        </div>
    );
}