import React from 'react'

const LeftNavbar = props => {
    const currentPage = props.currentPage
    const pageNames = ["Workouts", "NewWorkout", "Exercises", "NewExercise"]
    let addedStyles = {}, i;

    document.addEventListener("DOMContentLoaded", e=> {
        for(i = 0; i < pageNames.length; i++){
            if(pageNames[i] === currentPage){
                let icon = document.createElement("i")
                icon.setAttribute("class", "fas fa-caret-right nav-left-active-icon")
                let link = document.getElementById(pageNames[i])
                link.className += " nav-left-active"
                if(icon !== null || typeof k !== "undefined"){
                    link.insertBefore(icon, link.firstChild)
                }
            } 
            console.log(addedStyles)
        }
    })


    return (
        <div className="col-md-2 left-nav">
            <div className="list group" id="navbar-left">
                <a href="/workout" id="Workouts" className="btn list-item-btn" style={addedStyles.Workouts}><i class="fas fa-dumbbell li-icon"></i> All workouts</a>
                <a href="/workout/new" id="NewWorkout" className="btn list-item-btn" style={addedStyles.NewWorkout}><i class="fas fa-plus li-icon"></i> New workout</a>
                <a href="/exercise" id="Exercises" className="btn list-item-btn" style={addedStyles.Exercises}><i class="fas fa-running li-icon"></i> All exercises</a>
                <a href="/exercise/new" id="NewExercise" className="btn list-item-btn" style={addedStyles.NewExercise}><i class="fas fa-plus li-icon"></i> New exercise</a>
            </div>
        </div>
    )
    
}

export default LeftNavbar 