import React from 'react'
import LeftNavbar from '../../partials/left-nav/LeftNavbar'
import ExerciseHeading from './ExerciseHeading'

const About = ({ exercise }) => {
    return (
        <div className=" wo-div">
            <div className="row ">
                <LeftNavbar />
                <div className="col-md-10 ind-ex-col">
                    <ExerciseHeading exercise={exercise} />
                </div>
            </div>
        </div>
    )
}

export default About 