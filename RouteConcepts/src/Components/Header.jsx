import React from "react";
import {NavLink} from "react-router-dom"


export default function Contact(){
    return (
        <div>
            <p>Index Page</p>
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
                <li><NavLink to='/About-us'>About</NavLink></li>
            </ul>
        </div>
    )
}