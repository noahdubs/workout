import React from 'react'
import Container from './Container'
import Loading from '../exercise/Loading'
import Navbar from '../../partials/navbar/Navbar'

class EditExercise extends React.Component {
    state = {}

    componentDidMount = () => {
        fetch(`/api/exercise/${this.props.match.params.exerciseId}`)
            .then(res => res.json())
            .then(exercise => {
                this.setState({ exercise })
            })
    }

    render() {
        const exercise = this.state.exercise
        const current = "EditExercise"
        if (!exercise) {
            return (
                <Loading />
            )
        } else {
            return (
                <div className="main-div"> 
                    <Container
                        exercise={exercise}
                    />
                    <Navbar current={current} />
                </div>
               
            )
        }
    }
}

export default EditExercise 