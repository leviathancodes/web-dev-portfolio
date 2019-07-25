import React, { useState } from "react"
import MediaQuery from 'react-responsive'
import { NavLink } from 'react-router-dom'
// SVGS
import { ReactComponent as FreeCodeCampIcon } from '../img/free-code-camp-social.svg'
import { ReactComponent as CodePenIcon } from '../img/codepen-social.svg'
import { ReactComponent as GitHubIcon } from '../img/github-social.svg'
import { ReactComponent as TwitterIcon } from '../img/twitter-social.svg'
import { ReactComponent as LinkedInIcon } from '../img/linkedin-social.svg'

// Utils
import links from "../utils/links"

const Nav = () => {
    const apiRoute = "https://lhuddlesto-api.herokuapp.com"
    const [hamburgerMenu, setHamburgerMenu] = useState(false)    

    const handleHamburgerState = () => {
        if (hamburgerMenu === false) {
            window.scrollTo(0, 0)
            document.body.style.overflow = "hidden"
            return setHamburgerMenu(true)
            
        }
        setHamburgerMenu(false)
        document.body.style.overflow = "visible"
    }

    if (hamburgerMenu === true) {
        return (
                <div className="mobileMenu">
                    <nav>
                        <img className="mobileMenu__exit" src={require('../img/exit-icon.svg')} alt="Exit ixon" onClick={handleHamburgerState}></img>
                        <ul className="mobileMenu__list">
                            <li className="mobileMenu__list-item" onClick={handleHamburgerState}><NavLink className="mobileMenu__link" exact to='/'>Home</NavLink></li>
                            <li className="mobileMenu__list-item" onClick={handleHamburgerState}><NavLink className="mobileMenu__link" to='/projects'>Projects</NavLink></li>
                            <li className="mobileMenu__list-item"><a className="mobileMenu__link" href="https://lhuddlesto-api.herokuapp.com">Resume</a></li>
                            <li className="mobileMenu__list-item" onClick={handleHamburgerState}><NavLink className="mobileMenu__link" exact to='/contact'>Contact</NavLink></li>
                        </ul>
                    </nav>
                </div>
        )
    }

    return (
            <nav className="menu">
                <div className="menu__left">
                <NavLink to="/"><img className="menu__icon" src={require("../img/lance-icon.png")} alt="Lance Huddleston II"></img></NavLink>
                    <p className="menu__title">
                        <span className="menu__title-head">Lance Huddleston II</span>
                        <span className="menu__title-subhead">Software Development</span>
                    </p>
                    <MediaQuery minWidth={1000}>
                        <ul className="menu__list">
                            <li className="menu__list-item menu__list-about"><NavLink activeClassName="menu__link-selected" exact to='/' className="menu__link">Home</NavLink></li>
                            <li className="menu__list-item menu__list-resume"><a className="menu__link" href={apiRoute}>Resume</a></li>
                            <li className="menu__list-item menu__list-projects"><NavLink activeClassName="menu__link-selected" exact to='/projects' className="menu__link">Projects</NavLink></li>
                            <li className="menu__list-item menu__list-contact"><NavLink activeClassName="menu__link-selected" exact to='/contact' className="menu__link">Contact</NavLink></li>
                        </ul>           
                    </MediaQuery>
                </div>
                <div className="menu__right">
                <MediaQuery minWidth={1000}>
                    <ul className="menu__social">
                        <li className="menu__social-item"><a className="menu__social-link" href={links.lance.freeCodeCamp}><FreeCodeCampIcon /></a></li>
                        <li className="menu__social-item"><a className="menu__social-link" href={links.lance.codepen}> <CodePenIcon /></a></li>
                        <li className="menu__social-item"><a className="menu__social-link" href={links.lance.linkedin}><LinkedInIcon /></a></li>
                        <li className="menu__social-item"><a className="menu__social-link" href={links.lance.github}><GitHubIcon /></a></li>
                        <li className="menu__social-item"><a className="menu__social-link" href={links.lance.twitter}><TwitterIcon /></a></li>
                    </ul>
                </MediaQuery>
                    <MediaQuery maxWidth={1000}>
                        <img className="menu__hamburger-icon" src={require("../img/hamburger-icon.svg")} alt="Mobile menu button" onClick={handleHamburgerState}></img>
                    </MediaQuery>
                </div>
            </nav>
    )
}

export default Nav