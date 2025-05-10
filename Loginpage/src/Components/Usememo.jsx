import React, { useState, useEffect, useCallback, useMemo } from "react";

export default function Usememo(){

    const [count, setCount] = useState(0);

    const expensiveCalculation = useMemo(() => {
    console.log("Expensive calculation running...");
    return count * 2;
    }, [count]);  //  Memoize the value

    const logCount = useCallback(() => {
    console.log("Logging count:", count);
    }, [count]);  // Memoize the function

    useEffect(() => {
    logCount();
    }, [logCount]);  // Optimized with memoized function

    return (
    <div>
        <h3>Count: {count}</h3>
        <h3>Double: {expensiveCalculation}</h3>
        <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
    );
        
}