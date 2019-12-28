import React from 'react'

class LoggedIn extends React.Component {
    state = {}

    componentDidMount = () => {
        fetch("/api/check")
            .then(res => res.json())
            .then(user => {
                this.setState({user})
            })
    }

    render() {
        const user = this.state.user 
        const exercise = this.props.exercise
        if(!user){
            return (
                <div className="col-md-4">
                    <p><span className="ex-info-p">Exercise type:</span> {exercise.exerciseType}</p>
                    <p><span className="ex-info-p">Muscles worked:</span> {exercise.muscleGroup}</p>
                    <p><span className="ex-info-p">Equipment:</span> {exercise.equipment}</p>
                </div>
            )
        } else if(user._id === exercise.author.id){
            return (
                <div className="col-md-4">
                    <a href={`/exercise/${exercise._id}/edit`} className="btn btn-warning">Edit exercise</a>
                    <p><span className="ex-info-p">Exercise type:</span> {exercise.exerciseType}</p>
                    <p><span className="ex-info-p">Muscles worked:</span> {exercise.muscleGroup}</p>
                    <p><span className="ex-info-p">Equipment:</span> {exercise.equipment}</p>
                </div>
            )
            
        } else {
            return (
                <div className="col-md-4">
                    <p><span className="ex-info-p">Exercise type:</span> {exercise.exerciseType}</p>
                    <p><span className="ex-info-p">Muscles worked:</span> {exercise.muscleGroup}</p>
                    <p><span className="ex-info-p">Equipment:</span> {exercise.equipment}</p>
                </div>
            )
        }
    }
}

export default LoggedIn 