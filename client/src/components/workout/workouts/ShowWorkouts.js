import React from 'react'
import { Link } from 'react-router-dom'

const ShowWorkout = ({ workouts }) => {

    return (
        <div className="row all-wo-row">
            {workouts.map(workout => (
                <div key={workout._id}  className="col-lg-3 col-sm-6">
                    <div  className="card wo-card">
                        <a href={`/workout/${workout._id}`}>
                            <img className="card-img-top all-wo-img" 
                                src={workout.picture.url} 
                                alt={workout.name} 
                            />
                        </a>
                        <div className="card-body">
                            <a className="all-wo-title-link" href={`/workout/${workout._id}`}>
                                <h5 className="card-title">
                                    <i class="fas fa-dumbbell all-wo-icon"></i>
                                    {workout.name}
                                </h5>
                            </a>
                            <a href={`/users/${workout.author.id}`} className="all-wo-author">Made by {workout.author.name}</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ShowWorkout