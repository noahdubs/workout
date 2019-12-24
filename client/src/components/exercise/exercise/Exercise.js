import React from 'react'
import Loading from './Loading'
import About from './About'

class Exercise extends React.Component {
    state = {}

    componentDidMount = () => {
        fetch(`/api/exercise/${this.props.match.params.exerciseId}`)
            .then(res => res.json())
            .then(exercise => {
                this.setState({exercise})
            })
    }

    render() {
        const exercise = this.state.exercise;

        if (!exercise) {
            return (
                <Loading />
            )
        } else {
            return (
                <About 
                    exercise={exercise}
                />
            )
        }
        
    }
}

export default Exercise