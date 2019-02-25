import React from 'react'
import { Link } from "react-router-dom"

const PojectSummary = (props) => {
    const {project} = props
    return (
        <div className="card z-depth-2 hoverable">
            <div className="card-content">
                <span className="card-title"> {project.title}</span>
                <p>Posted by USERNAME</p>
                <p className="grey-text">3rd September, 2018 02:52am</p>
            </div>
            <div className="card-action">
                <Link to="/">Project Details</Link>
                <Link to="/" className="red-text right">Delete</Link>
            </div>
        </div>
    )
}

export default PojectSummary
