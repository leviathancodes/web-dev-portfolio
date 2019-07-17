import React from "react"

const Error404 = props => {
    return (
    <div className="wrapper">
        <div className="error404">
            <h1 className="error404__heading">Error 404: Page Not Found</h1>
            <img className="error404__img" alt="Illustration of Lance working on fixing a bug." src={require('../img/cartoon.jpg')} />
            <h2 className="error404__subheading">Looks like the page you are looking for isn’t available <span aria-label="Devestated emoji" role="img" >🥺</span>. </h2>
        </div>
    </div>
    )

}

export default Error404