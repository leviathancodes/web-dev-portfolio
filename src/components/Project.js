import React, {useState, useEffect} from "react"
import projectData from "../utils/projectData"


const Project  = props => {

    const project = projectData.find((project) => project.name === props.name)
    const name = project.name.toLowerCase().replace(/\s/g, "-")

    const [projectPage, setProjectPage] = useState("info")
    const [pages, setPages] = useState([])

    // Component Mounting
    useEffect(() => {
        let localPages = ['info']
        if (project.codeLink || project.liveLink) {
            localPages.push('links')
        }

        if (project.images) {
            localPages.push('gallery')
        }
        setPages(localPages)
    }, [])

    // Creates lists for skills
    const listIterate = () => {
        const skills = Object.keys(project.skills)
        return (
            <div>
                <h1 className="project__skills-head">Skills Utilized</h1>
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
            )   
    }

    // Grabs and renders photos
    const getImages = () => {
        let images = []
        for (let i = 1; i < project.images; i++) {
            images.push(<img key={`img-${i}`} className="project__image-gallery" src={require(`../img/${name}/${name}_img_${i}.png`)} alt={`${project.name} application`}></img>)
        }
            return(
                <div className="gallery">
                { images }
                </div>
            )
        
    }

    // Pagination sub-component
    const pagination = () => {
        return (<div className="project__pagination">
            {        
                pages.map((page) => {
                return <div key={`project__pagination-${page}`} onClick={handlePage} className={`project__pagination-item project__pagination-${page}`}/>
            })
        }
            </div>
            )
    }

    // changes current page in state pages
    const handlePage = (e) => {

        if (e.target.className.match(/info+/)) {
            setProjectPage('info')
        }

        if (e.target.className.match(/links+/)) {
            setProjectPage("links")
        }

        if (e.target.className.match(/gallery+/)) {
            setProjectPage("gallery")
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
        <h1>Project Links</h1>
        <button className="project__links-github"><a href={project.liveLink}>View Code</a></button>
        <button className="project__links-github"><a href={project.codeLink}>View Live</a></button>
        </div>

        const gallery = <div className="project__gallery">
        {getImages()}
        </div>

        switch (page) {
            case 'info':
                return info
            case 'links':
                return links
            case 'gallery':
                return gallery
            default:
                return info
        }
    }

    return (
        <div className="wrapper">
            <div className="project"> 
                <div className="project__name">
                    <h1>{props.name}</h1>
                    {pagination()}
                </div>
                <div className="project__summary">
                {renderInfo(projectPage)}
                </div>
            </div>
        
        </div>
    )
}

export default Project