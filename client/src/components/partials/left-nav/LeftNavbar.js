import React from 'react'

const LeftNavbar = props => {
    const currentPage = props.currentPage
    const pageNames = ["Workouts", "NewWorkout", "Exercises", "NewExercise"]
    let addedStyles = {}
    document.addEventListener("DOMContentLoaded", e =>{
        let styles = {}, i;
        for(i = 0; i < pageNames.length; i++){
            let current = document.getElementById(pageNames[i])
            if(pageNames[i] === currentPage){
                styles[pageNames[i]] = {backgroundColor: "#000000"}
            } else {           
                current.addEventListener("mouseenter", e => {
                    current.style.backgroundColor = "#CAC8C8"
                });
                current.addEventListener('mouseleave', e => {
                    current.style.backgroundColor = '#fff';
                });
            }
        }
        addedStyles.styles = styles 
    })
    return (
        <div className="col-md-2">
            <div className="list group" id="navbar-left">
                <a href="/workout" id="Workouts" className="btn list-item-btn" style={addedStyles.styles.Workouts}><i class="fas fa-dumbbell li-icon"></i> All workouts</a>
                <a href="/workout/new" id="NewWorkout" className="btn list-item-btn" style={addedStyles.styles.NewWorkout}><i class="fas fa-plus li-icon"></i> Add a new workout</a>
                <a href="/exercise" id="Exercises" className="btn list-item-btn" style={addedStyles.styles.Exercises}><i class="fas fa-running li-icon"></i> All exercises</a>
                <a href="/exercise/new" id="NewExercise" className="btn list-item-btn" style={addedStyles.styles.NewExercise}><i class="fas fa-plus li-icon"></i> Add a new exercise</a>
            </div>
        </div>
    )
    
}

export default LeftNavbar 