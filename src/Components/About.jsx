import React from "react";


export default function About(){
    return(
        <div className="Abtmain" style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginRight:'70px',marginLeft:'50px',marginBottom:'30px',marginTop:'40px'}} >
            <div className="Aboutimage">
            <img className="personal-image"  src={"assets/profile11.jpeg"} alt=" " style={{height:"550px",width:"250"}} />
            </div>
            <div className="aboutcontainer" style={{height:"250px",witdh:"150px",marginLeft:"40px"}}>
                <h1>About Me</h1>
            <p>Hi, I'm Shahala, a passionate and detail-oriented web-developer and software tester with a strong focus on creating clean, user-friendly, and responsive web applications. I love turning ideas into reality through code and design, and I'm always looking for new challenges to grow and refine my skills. With experience in technologies React, Node.js, MongoDB,express.js,JavaScript, I strive to build solutions that are not only functional but also visually appealing. When I'm not coding, you can find me exploring new tools, learning something new, or brainstorming my next creative project.</p>
<h3>Name : Shahala </h3>
<h3>Email : shahalahammedh7@gmail.com</h3>
<h3>Phone : 502591447</h3>
</div>
    
        </div>
    )
}