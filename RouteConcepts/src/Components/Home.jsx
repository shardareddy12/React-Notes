import React from "react";
import { Link } from "react-router-dom";

export default function Home(){
    return (
        <div>
        home <Link to='/about-us'>About</Link>
        </div>
    )
}