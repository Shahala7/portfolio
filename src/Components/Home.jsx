import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Home.css"

export default function Home(){
    return(
        <div>
            <Header/>
            <div className="container" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
               <div className="textContainer" style={{fontSize:"25px",marginLeft:"80px",marginrigth:"50px"}}>
               <h4>Hello,I am Shahala</h4>
               <h1>Frontend developer</h1>
               <p>"I'm a passionate React Front-End Developer with 1 year of hands-on </p>
               <p> experience crafting responsive, user-friendly web applications."</p>
               </div>
               <div className="imgcontainer">
            <img className="personal-image"  src={"assets/f469857b-706f-4bd1-b140-7b3116bb8427.jpeg"} alt=" " style={{height:"450px",width:"400px",marginRight:"230px",borderRadius:"800px"}} />
            </div>
            </div>
            <Footer/>
        </div>
    )
}