import React from 'react'

const AllExercises = props => {
    return (
        <div className="col-md-6 new-ex-left">
            <h3 className="">Search For Exercises</h3>
            
            {props.exercises.map(exercise => (
                <div className="row new-ex-card" key={exercise._id}>
                    <div className="col-md-7">
                        <h3 className="card-title"><a href={`/exercise/${exercise._id}`}>{exercise.name}</a></h3>
                    </div>
                    <div className="col-md-4">
                        {/* <img src={exercise.picture.url} className="card-img" /> */}
                    </div>
                    <div className="col-md-1">
                        <i className="far fa-plus-square" 
                            onClick={props.onClick} 
                            value={exercise._id} 
                            title={exercise.name}
                        ></i>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default AllExercises