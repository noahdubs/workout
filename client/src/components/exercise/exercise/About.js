import React from 'react'
import LeftNavbar from '../../partials/left-nav/LeftNavbar'
import ExerciseHeading from './ExerciseHeading'
import BreadCrumb from './Breadcrumb'

const About = ({ exercise }) => {
    return (
        <div className="wo-div">
            <div className="row all-ex-row">
                <LeftNavbar />
                <div className="col-md-10 all-wo-main-col">
                    <BreadCrumb exercise={exercise} />
                    <ExerciseHeading exercise={exercise} />
                </div>
            </div>
        </div>
    )
}

export default About 