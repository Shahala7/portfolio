import React from "react";
import "./skills.css"

export default function Project(){
    return(
        <div className="project" style={{height:'590px',width:'1200px',marginLeft:'130px'}}>
            <div style={{marginLeft:'470px'}}>
            <h1>My Projects</h1>
            </div>
            <div className="semiheading">
                <h3>DawCosmetics.shop</h3>
                </div>
                <div  className="Links">
                <h4>https://github.com/Shahala7/Daw-cosmetics.git</h4>
                </div>
        
                <p>     Built a feature-rich and user-friendly e-commerce platform tailored for a cosmetics brand using Node.js, Express, EJS, and JavaScript. The application includes a responsive and intuitive UI, ensuring seamless navigation across user and admin interfaces.

Developed a robust backend architecture with Node.js to handle user management, product listings, order processing, and inventory tracking efficiently.

Integrated multiple payment methods, including Cash on Delivery (COD) and online payments via the Razorpay API, ensuring a smooth and secure checkout experience.

Implemented OTP-based user registration to enhance account security and user trust.

Designed a comprehensive admin dashboard for managing users, categories, products, stock levels, and promotional offers, along with real-time sales report generation.

Added automated invoice generation using Invoice Generator, enabling users to download order receipts directly from their account.</p>
              <div className="semiheading">
                <h3>Netflix Clone</h3>
                </div>
                <p>   Independently developed a Netflix Clone, replicating the core functionalities of the popular streaming platform. This project involved fetching real-time movie and TV show data from The Movie Database (TMDB) API to showcase trending content. 
React.js Frontend – Built a sleek and responsive UI using React.js to display trending movies, popular TV shows, and category-based content. 
TMDB API Integration – Utilized RESTful API calls to dynamically fetch and update movie/show data in real time. 
Dynamic UI with React Hooks – Implemented useState and useEffect to manage component states efficiently.
CSS & Styled Components – Designed an engaging UI with modern styles, including hover effects, smooth transitions, and a dark theme similar to Netflix.
Responsive Design – Ensured seamless adaptability across devices, including desktops, tablets, and mobile screens.
Movie Trailers & Details – Integrated video previews and detailed movie/show information for an immersive experience.</p>
<div className="semiheading">
 <h3>personal portfolio</h3>
 </div>
<p>    Independently designed, developed, and deployed a personal portfolio website to showcase my skills, projects, and achievements. The website serves as a professional digital presence, allowing visitors to learn about my expertise in web development.
 Modern & Responsive Design – Utilized HTML, CSS, Bootstrap, and React.js to create a sleek, fully responsive UI that adapts seamlessly to all devices. 
Interactive UI – Designed an engaging and visually appealing layout with smooth animations, transitions, and hover effects. 
Projects Showcase – Displayed detailed descriptions of my projects.</p>
        </div>
    )
}