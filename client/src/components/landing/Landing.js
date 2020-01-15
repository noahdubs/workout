import React from 'react'
import Navbar from '../partials/navbar/Navbar'

const Landing = () => {
    const current = "Landing"
    return (
        <div className="landing-div">
            <Navbar current={current}/>
            <div className="spacing"></div>
            <div className="box">
                <div className="square">
                    <h1 className="landing-heading">Start your fitness journey at Total Fitness</h1>
                    <p className="landing-p">Our selection of workouts will have you well on your way to
                        achieving your goals.
                    </p>
                    <a href="/workout" className="btn landing-btn">View Workouts 
                        <i class="fas fa-dumbbell landing-icon"></i>
                    </a>
                </div>
            </div>
        </div>    
    )
}

export default Landing 