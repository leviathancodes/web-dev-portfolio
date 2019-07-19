import React from "react"
import { Link } from "react-router-dom"

const About = () => {

    return (
        <div className="about" id="about">
            <div className="aboutContent">
                <div className="aboutPortfolio">
                    <Link className="aboutPortfolio__development" exact to='/projects'>
                            <h1 className="aboutPortfolio__development-text">Development</h1>
                    </Link>

                    <Link className="aboutPortfolio__design" exact to='/projects'>
                        <h1 className="aboutPortfolio__design-text">Design</h1>
                    </Link>
                </div>
                <div className="aboutContent__info">
                    <div className="aboutContent__bio">
                        <h2 className="subtitle aboutContent__bio-subtitle aboutContent__bio-subtitle-1">Focused on what you need.</h2>
                        <p className="aboutContent__info-bio aboutContent__bio-body-1">I’ve been a creative go-getter ever since I was young, and when I was 19 I decided to 
                        direct that creative energy towards web development.  A year later, I got into the industry and soaked up more 
                        knowledge than ever.  Now I am at a place where that knowledge and expertise can be shared with you.
                        </p>
                    </div>

                    <div className="aboutContent__services">
                        <h2 className="subtitle aboutContent__services-subtitle aboutContent__services-subtitle-2">Services</h2>
                        <h4 className="aboutContent__services-bodyIntro">Web Design</h4>
                        <p className="aboutContent__services-body aboutContent__services-body-2">We can work together to develop the perfect web site for you.</p>
                        <h4 className="aboutContent__services-bodyIntro">Web Development</h4>
                        <p className="aboutContent__services-body aboutContent__services-body-2">I’ll utilize my expertise to bring our ideas to reality.</p>
                    </div>
                    <div className="aboutContent__skills">
                        <h2 className="subtitle aboutContent__skills-subtitle aboutContent__skills-subtitle-2">Skills</h2>
                        <div className="skills">
                            <ul className="skills__frontEnd">
                                <li className="skills__frontEnd-title"><b>Front-End Development</b></li>
                                <li className="skills__frontEnd-item">HTML5</li>
                                <li className="skills__frontEnd-item">CSS3 (Sass)</li>
                                <li className="skills__frontEnd-item">React</li>
                                <li className="skills__frontEnd-item">JavaScript (ES6)</li>
                            </ul>
                            <ul className="skills__backEnd">
                                <li className="skills__backEnd-title"><b>Back-end Development</b></li>
                                <li className="skills__backEnd-item">Node.js</li>
                                <li className="skills__backEnd-item">MongoDB</li>
                                <li className="skills__backEnd-item">Mongoose</li>
                                <li className="skills__backEnd-item">REST APIs</li>
                            </ul>
                            <ul className="skills__qa">
                                <li className="skills__qa-title"><b>Quality Assurance & Testing</b></li>
                                <li className="skills__qa-item">Jest</li>
                                <li className="skills__qa-item">Selenium WebDriver</li>
                                <li className="skills__qa-item">SauceLabs</li>
                                <li className="skills__qa-item">Applitools</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;