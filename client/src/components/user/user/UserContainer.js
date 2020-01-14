import React from 'react'
import UserHeading from './UserHeading'

const UserContainer = props => {
    let activeStyles = {workouts: {}, exercises: {}}
    if(props.currentStr === "Workouts"){
        activeStyles.workouts = {color: '#008BEE', borderBottom: "2px solid #008BEE"}
    } else {
        activeStyles.exercises = {color: '#008BEE', borderBottom: "2px solid #008BEE"}
    }
    console.log(activeStyles)
    return (
        <div className="row all-wo-row ind-ex-row">
            <UserHeading user={props.user} />
            <div className="workouts-exercises-div">
                <p name="Workouts" style={activeStyles.workouts} onClick={props.handleClick} className="wo-ex-choose">Workouts</p>
                <p name="Exercises" style={activeStyles.exercises} onClick={props.handleClick} className="wo-ex-choose">Exercises</p>
            </div>
            {props.current}
        </div>
    )
}

export default UserContainer 

