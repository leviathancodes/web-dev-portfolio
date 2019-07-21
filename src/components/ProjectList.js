import React from "react"
import { Link } from "react-router-dom"
import projectData from "../utils/projectData"

const Projects = () => {

    return (
        <div className="wrapper">
            <div className="projectList">
                {projectData.map((project, index) => {
                    const name = project.name.toLowerCase().replace(/\s/g, "-")
                    if (index % 2 === 0) {
                        return <Link className={`projectList__item projectList__item-orange projectList__item-${index + 1}`}  to={`/projects/${name}`}><h1>{project.name}</h1></Link>                    
                    }
                    return <Link className={`projectList__item projectList__item-${index + 1} projectList__item-white`}  to={`/projects/${name}`}><h1>{project.name}</h1></Link>                    


                })}
            </div>            
        </div>

    )

    
}

export default Projects