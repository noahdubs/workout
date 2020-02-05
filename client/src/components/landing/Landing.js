import React from 'react'
import Navbar from '../partials/navbar/Navbar'

const Landing = () => {
    const current = "Landing"
    return (
        <div className="test-landing">
            <Navbar current={current}/>
            <div className="left-side">
                <div className="left-side-content">
                    <h1 className="landing-h">Welcome to Total Fitness</h1>
                    <p className="landing-p">Our selection of workouts will have you well on your way to
                        achieving your goals.</p>
                    <div className="btn-div">
                        <a href="/workouts" className="btn new-landing-btn">See workouts  <i class="fas fa-dumbbell landing-icon"></i></a>
                    </div>
                </div>
            </div>
            <div className="right-side"></div>
        </div>
    )
}

export default Landing 