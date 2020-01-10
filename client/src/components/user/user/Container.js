import React from 'react'
import Jumbotron from './Jumbotron'
import Workouts from './Workouts'
import LeftNavbar from '../../partials/left-nav/LeftNavbar'

const Container = ({ user }) => {
    return (
        <div className="wo-div">
            <div className="row">
                <LeftNavbar />
                <div className="col-md-10">
                    <Jumbotron user={user} />
                    <Workouts workouts={user.workouts} user={user} />
                </div>
            </div>
            
        </div>
    )
}

export default Container 