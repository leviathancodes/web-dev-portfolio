import React from "react"
import {Link} from "react-router-dom"
import MediaQuery from 'react-responsive'

const Landing = () => {
    return (
        <div className="home">
            <div className="homeContent">
                <div className="homeContent__main">
                    <h1 className="homeContent__main-title">Develop your dreams.</h1>
                    <h2 className="subtitle homeContent__main-subtitle">Bring your vision to life.</h2>
                    <p className="homeContent__main-body body-text">
                    I’m a web developer based in Alexandria, VA and I can provide you with beautiful, responsive web sites 
                    and applications to help bring more traffic and views to your business.  Click the button below to 
                    contact me or keep scrolling to learn more.
                    </p>
                    <Link to="/contact" className="homeContent__contact">Contact Me</Link>
                </div>
                <MediaQuery minWidth={1000}>
                    <img alt="Calm, zen workspace built for productivity" class="homeContent__img"src={require('../img/home-page.jpg')}></img>                
                </MediaQuery>
                
            </div>
        </div>
    )
}

export default Landing