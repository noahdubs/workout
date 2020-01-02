import React from 'react'
import LeftNavabr from '../../partials/left-nav/LeftNavbar'
import ExerciseHeading from './ExerciseHeading'

const About = ({ exercise }) => {
    return (
        <div className="container wo-div">
            <div className="row ">
                <LeftNavabr />
                <div className="col-md-9 ind-ex-col">
                    <ExerciseHeading exercise={exercise} />
                </div>
            </div>
        </div>
    )
}

export default About 