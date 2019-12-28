import React from 'react'
import Container from './Container'
import Loading from '../exercise/Loading'

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
        if (!exercise) {
            return (
                <Loading />
            )
        } else {
            return (
                <Container
                    exercise={exercise}
                />
            )
        }
    }
}

export default EditExercise 