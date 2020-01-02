import React from 'react'

const ExerciseList = ({ exercises }) => {
    return (
        <div className="well">
            {exercises.map(exercise => (
                <div className="row ex-one">
                    <div className="col-md-3 wo-ex-name">
                        <h3><a href={`/exercise/${exercise._id._id}`} className="left-nav-link">{exercise._id.name}</a></h3>
                    </div>
                    <div className="col-md-3 wo-reps-sets">
                        <p className="sets">{exercise.sets} sets</p>
                        <p>{exercise.reps} reps</p>
                    </div>
                    <div className="col-md-3 img-div">
                        <img src={exercise._id.picture.url} alt={exercise.name} className="card-img"/>
                    </div>
                    <div className="col-md-3">
                        <p className="ex-information"><span className="ex-span">Exercise type:</span> {exercise._id.exerciseType}</p>
                        <p className="ex-information"><span className="ex-span">Muscles worked:</span> {exercise._id.muscleGroup}</p>
                        <p className="ex-information"><span className="ex-span">Equipment used:</span> {exercise._id.equipment}</p>
                        
                    </div>
                </div>
            )) }
        </div>
    )
}

export default ExerciseList


// <div className="ex-list">
//     {exercises.map(exercise => (
//         <div className="row ex-one" key={exercise._id._id}>
//             <div className="col-md-4">
//                 <div className="card-body">
//                     <a className="new-wo-ex-title" href={`/exercise/${exercise._id._id}`}><h3 className="card-title">{exercise._id.name}</h3></a>
//                 </div>
//             </div>
//             <div className="col-md-4 img-div">
//                 <img src={exercise._id.picture.url} className="wo-ex-picture" alt={exercise.name} />
//             </div>
//             <div className="col-md-4 wo-reps-sets">
//                 <h5>{exercise.sets} sets</h5>
//                 <h5>{exercise.reps} reps</h5>
//             </div>
//         </div>
//     ))}                        
// </div>