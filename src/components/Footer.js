import React from "react"
import { NavLink } from "react-router-dom"
// SVGS
import { ReactComponent as FreeCodeCampIcon } from '../img/free-code-camp-social.svg'
import { ReactComponent as CodePenIcon } from '../img/codepen-social.svg'
import { ReactComponent as GitHubIcon } from '../img/github-social.svg'
import { ReactComponent as TwitterIcon } from '../img/twitter-social.svg'
import { ReactComponent as LinkedInIcon } from '../img/linkedin-social.svg'
import { ReactComponent as InstagramIcon } from '../img/instagram-social.svg'
import { ReactComponent as TumblrIcon } from '../img/tumblr-social.svg'

const Footer = props => {
    return (
        <footer>
        <div className="footer__left">
            <div className="footer__lance">
                    <p className="footer__lance-description">Designed and developed by Lance Huddleston II</p>
                    <ul className="footer__socials">
                        <li className="footer__socials-item"><a className="footer__socials-link" href={props.freeCodeCamp}><FreeCodeCampIcon /></a></li>
                        <li className="footer__socials-item"><a className="footer__socials-link" href={props.codepen}> <CodePenIcon /></a></li>
                        <li className="footer__socials-item"><a className="footer__socials-link" href={props.github}><GitHubIcon /></a></li>
                        <li className="footer__socials-item"><a className="footer__socials-link" href={props.twitter}><TwitterIcon /></a></li>
                        <li className="footer__socials-item"><a className="footer__socials-link" href={props.linkedin}><LinkedInIcon /></a></li>
                    </ul>
            </div>
            <div className="footer__gabby">
                <p className="footer__gabby-description">Illustrations by Gabby Jerome</p>
                    <ul className="footer__socials">
                        <li className="footer__socials-item"><a className="footer__socials-link" href={props.gabbyTwitter}><TwitterIcon /></a></li>
                        <li className="footer__socials-item"><a className="footer__socials-link" href={props.gabbyInstagram}><InstagramIcon /></a></li>
                    </ul>
            </div>
        </div>

        <div className="footer__right">
        <div>
            <h4 className="footer__right-description">Navigate</h4>
        </div>
        <div>
            <ul className="footer__navigation">
                <li className="footer__navigation-item"><NavLink className="menu__link" activeClassName="menu__link-selected" className="menu__link" exact={true} to="/">Home</NavLink></li>
                <li className="footer__navigation-item"><a className="menu__link" href={props.apiRoute}>Resume</a></li>
                <li className="footer__navigation-item"><NavLink className="menu__link" activeClassName="menu__link-selected" className="menu__link" exact={true} to="/projects">Projects</NavLink></li>
                <li className="footer__navigation-item"><NavLink className="menu__link" activeClassName="menu__link-selected" className="menu__link" exact={true} to="/contact">Contact</NavLink></li>
            </ul>
        </div>
        </div>
    </footer>    
    )

}

export default Footer