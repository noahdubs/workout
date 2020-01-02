import React from 'react'
import Search from './Search'

const AllExercises = props => {
    return (
        <div className="col-md-6 new-ex-left">
            <h3 className="new-wo-search-h">Search For Exercises</h3>
            <Search 
                value={props.value}
                handleSearch={props.handleSearch}
                handleChange={props.handleChange}
            />
            {props.exercises.map(exercise => (
                <div className="row new-ex-card" key={exercise._id}>
                    <div className="col-md-5 add-ex-name">
                        <h3 className="card-title"><a className="new-wo-ex-title" href={`/exercise/${exercise._id}`}>{exercise.name}</a></h3>
                    </div>
                    <div className="col-md-5">
                        <img src={exercise.picture.url} className="card-img" alt={exercise.name} />
                    </div>
                    <div className="col-md-2 add-btn-col">
                        <i className="far fa-plus-square add-ex" 
                            onClick={props.onClick} 
                            value={exercise._id} 
                            title={exercise.name}
                        ></i>
                    </div>
                    <div className="col-md-12 new-ex-information">
                        <p className="new-ex-item"><span className="ex-span">Exercise type:</span> {exercise.exerciseType}</p>
                        <p className="new-ex-item"><span className="ex-span">Muscles worked:</span> {exercise.muscleGroup}</p>
                        <p className="new-ex-item"><span className="ex-span">Equipment used:</span> {exercise.equipment}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default AllExercises

