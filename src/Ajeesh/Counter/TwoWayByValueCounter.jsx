import { useState } from "react";

export default function TwoWayByValueCounter() {
    const [count, setCount] = useState(0);
    const [difference, setDifference] = useState(1);
    const [operator, setOperator] = useState('+');

    function handleIncrement() {
        setOperator('+');
        applyDifference();
    }

    function handleDecrement() {
        setOperator('-');
        applyDifference();
    }

    function applyDifference() {
        if (operator === '+') {
            setCount(c => c + difference);
        } else {
            setCount(c => c - difference);
        }
    }

    function handleIncrementChange(e) {
        setDifference(Number(e.target.value));
    }    

    return (
        <>
            <div style={{ marginTop: "50px" }}>
                <input type="number" value={difference} onChange={handleIncrementChange} />

                <button onClick={handleIncrement}>+ by {difference}</button> &nbsp;
                <button onClick={handleDecrement}>- by {difference}</button> &nbsp;
                Count : {count}
            </div>
        </>
    );
}