
import Header from "./Header";
import "./skills.css"

import {FaHtml5,FaCss3Alt,FaJs,FaReact,FaNodeJs,FaGitAlt,FaDatabase,} from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiExpress,SiFigma  } from "react-icons/si";

export default function Skills(){

    const skillss = [
        { name: "HTML5", icon: <FaHtml5 className="icon html" /> },
        { name: "CSS3", icon: <FaCss3Alt className="icon css" /> },
        { name: "JavaScript", icon: <FaJs className="icon js" /> },
        { name: "React", icon: <FaReact className="icon react" /> },
        { name: "Node.js", icon: <FaNodeJs className="icon node" /> },
        { name: "Express.js", icon: <SiExpress className="icon express" /> },
        { name: "MongoDB", icon: <SiMongodb className="icon mongo" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="icon tailwind" /> },
        { name: "Git", icon: <FaGitAlt className="icon git" /> },
        { name: "Database", icon: <FaDatabase className="icon db" /> },
        { name: "Figma", icon: <SiFigma className="icon figma" /> }
      ];

    return(
      <div>
       <Header/>
        <div className="skills-page" style={{height:'50px',width:'1100px'}}>
        <h2 className="skills-heading">My Skills</h2>
        <div className="skills-grid">
          {skillss.map((skill, index) => (
            <div key={index} className="skill-card">
              {skill.icon}
              <p className="skill-name">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
    )
}