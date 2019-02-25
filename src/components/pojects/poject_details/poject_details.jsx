import React from 'react'
// import { Link } from "react-router-dom"

const PojectDetails = (props) => {
    const id = props.match.params.id
    const { project } = props

    return (
        <div className="container section">
            <div className="card z-depth-2">
                <div className="card-content">
                    <span className="card-title"> Card Title {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe veritatis cumque libero dolorem quisquam praesentium pariatur dolore delectus mollitia modi magni beatae, amet ipsam sint harum officia voluptate quod aut.</p>
                </div>
                <div className="card-action">
                    <div>Posted by USERNAME</div>
                    <div className="grey-text">3rd September, 2018 02:52am</div>
                    {/* <Link to="/">Project Details</Link>
                    <Link to="/" className="red-text right">Delete</Link> */}
                </div>
            </div>
        </div>

    )
}

export default PojectDetails
