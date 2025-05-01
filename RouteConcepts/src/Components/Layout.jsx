import React from "react";
import Header from "./Header"
import { Navigate, Outlet } from "react-router-dom";

export default function Layout(){

    //--------------- Protected Routing --------------
    // if login is true render the header and other pages if not reroute to login page

    let login =true
    
    return (
        <>
            {
                login ? 
                (<><Header /><Outlet /></>) : 
                (<Navigate to="Login">Login</Navigate>)
            }
            
        </>
    )
}