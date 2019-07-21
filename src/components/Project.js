import React, {useState, useEffect} from "react"
import MediaQuery from "react-responsive"
import projectData from "../utils/projectData"


const Project  = props => {

    const project = projectData.find((project) => project.name === props.name)

    const [projectPage, setProjectPage] = useState("info")
    const [pages, setPages] = useState([])

    // Component Mounting
    useEffect(() => {
        let localPages = ['info']
        if (project.codeLink || project.liveLink) {
            localPages.push('links')
        }

        setPages(localPages)
    }, [])

    // Creates lists for skills
    const listIterate = () => {
        const skills = Object.keys(project.skills)
        return (
            
            <div>
            <h1 className="project__info-title project__skills-head">Skills Utilized</h1>
            <div className="skills-columns">
            {            
                skills.map((skillType) => {
                const skillList = project.skills[skillType]
                    return <ul key={`project__skills-${skillType}`} className="project__skills-list">
                        <li className="project__skills-subhead"><b>{skillType}</b></li>
                            {
                                skillList.map((skill, index) =>  <li key={`project__skils-${skill}`} className="project__skills-item">{skill}</li>)
                            }
                        </ul>
                    })     
            }            
            </div>
      
            </div>
            )   
    }

    // Pagination sub-component
    const pagination = () => {
        return (<div className="project__pagination">
            {        
                pages.map((page) => {
                    if (page === 'info') {
                        return <div key={`project__pagination-${page}`} onClick={handlePage} className={`project__pagination-item project__pagination-${page} activePage`}/>
                    }
                return <div key={`project__pagination-${page}`} onClick={handlePage} className={`project__pagination-item project__pagination-${page}`}/>
            })
        }
            </div>
            )
    }

    // changes current page in state pages
    const handlePage = (e) => {
        console.log('button pushed')
        document.querySelectorAll('.project__pagination-item').forEach((page) => {
            if (page.className.match(/activePage+/)) {
                page.classList.remove('activePage')
            }
        })

        if (e.target.className.match(/info+/)) {
            e.target.classList.toggle('activePage')
            setProjectPage('info')
        }

        if (e.target.className.match(/links+/)) {
            e.target.classList.toggle('activePage')
            setProjectPage("links")
        }

    }

    // Renders content in info panel based on which page is chosen
    const renderInfo = (page) => {

        const info = <div className="project__info">
        <h1 className="project__info-title project__info-titleSummary">Summary</h1>
        <p className="project__info-summary">{project.summary}</p>
        <h1 className="project__info-title project__info-titleWhen">When?</h1>
        <p className="project__info-when">{project.date}</p>
        {listIterate()}
        </div>

        const links = <div className="project__links">
        <h1 className="project__links-title">Project Links</h1>
        
        {project.liveLink ? <a href={project.liveLink} target="_blank"> <button className="project__links-github">View Live</button></a> : <div></div>}        
        <a target="_blank" href={project.codeLink}><button className="project__links-github">View Code</button></a>
        </div>

        switch (page) {
            case 'info':
                return info
            case 'links':
                return links
            default:
                return info
        }
    }

    return (
        <div className="wrapper">
            <div className="project"> 
                    <MediaQuery minWidth={1000}>
                    <div className="project__name">
                        <h1 className="project__name-head">{props.name}</h1>
                        {pagination()}
                    </div>                
                    </MediaQuery>
                <div className="project__summary">
                <MediaQuery maxWidth={1000}>
                <h1 className="project__name-mobile">{props.name}</h1>
                </MediaQuery>
                {renderInfo(projectPage)}
                <MediaQuery maxWidth={1000}>
                <div className="project__links">
                <h2 className="project__links-title">Project Links</h2>
        
                {project.liveLink ? <a href={project.liveLink} target="_blank"> <button className="project__links-github">View Live</button></a> : <div></div>}        
                <a target="_blank" href={project.codeLink}><button className="project__links-github">View Code</button></a>
                </div>
                </MediaQuery>
                </div>
            </div>
        
        </div>
    )
}

export default Project