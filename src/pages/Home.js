import React from "react"
import Landing from '../components/Landing'
import About from '../components/About'
import { Helmet } from "react-helmet";

const Home = () => {
    return (
        <div className="wrapper"> 
            <Helmet>
                <title>Web Developer - Front-end/Back-end Services | Lance Huddleston II</title>
                <meta name="author" content="Lance Huddleston II" />
                <meta name="description" content="Get in contact with a web developer today. Lance Huddleston II can help you build web sites and web applications for your business.
                With his experience, the job will get done and it'll be done well."/>
                <meta property="og:title" content="Web Developer - Front-end/Back-end Services | Lance Huddleston II" />
                <meta property="og:description" content="Get in contact with a web developer today. Lance Huddleston II can help you build web sites and web applications for your business.
                With his experience, the job will get done and it'll be done well." />
                <meta property="og:image" content="https://lhuddlesto-api.herokuapp.com/img/openGraph_img.jpg" />
                <meta name="twitter:title" content="Web Developer - Front-end/Back-end Services | Lance Huddleston II"/>
                <link rel="canonical" href="https://lhuddlesto.com"/>
            </Helmet>

            <Landing />
            <About />
      </div>
    )
}

export default Home;