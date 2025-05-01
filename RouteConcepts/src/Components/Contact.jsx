import React from "react";
import { useNavigate } from "react-router-dom";

export default function Contact(){
    const navigate = useNavigate()
    return (
        <div>
        contact
        <button onClick={()=> navigate('/')}>Go to Home</button>
        </div>
    )
}