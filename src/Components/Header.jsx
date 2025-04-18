import React from "react";



export default function Header(){
    return(
        <div className="navfull">
        <header>
            <div className="header" style={{height:"80px"}}>
            <div className="Name">
            <h1>Shahala</h1>
            </div>
            <div className="nav">
            <nav>    
            <a href="/">Home</a>
            <a href="/about">About</a>
           <a href="/skills">Skills</a>
           <a href="/project">Project</a>
            </nav>
            </div>
            </div>
        </header>
        </div>
    )
}