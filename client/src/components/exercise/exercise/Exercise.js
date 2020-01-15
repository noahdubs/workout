import React from 'react'
import Loading from './Loading'
import About from './About'
import Navbar from '../../partials/navbar/Navbar'

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
        const current = "Exercise"
        if (!exercise) {
            return (
                <Loading />
            )
        } else {
            return (
                <div className="main-div">
                    <Navbar current={current} />
                    <About 
                        exercise={exercise}
                    />
                </div>
                
            )
        }
        
    }
}

export default Exercise