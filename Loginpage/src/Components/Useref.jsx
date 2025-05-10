import React, { useState, useRef } from "react";

export default function Useref(){
    const [show, setShow] = useState(false);
    const isFirstRender = useRef(true);
    
    const handleClick = () => {
        if (!isFirstRender.current) {
            setShow((prev) => !prev);
        }
        isFirstRender.current = false;
        };
    
    return (
        <div>
        <button onClick={handleClick}>Toggle</button>
            {show && <h3>Visible!</h3>}
        </div>
        );
}

