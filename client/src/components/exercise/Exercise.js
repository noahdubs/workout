import React from 'react'

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
        console.log(exercise);

        if (!exercise) {
            return (
                <div class="spinner-border loader" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            )
        } else {
            return (
                <div className="container ex-div">
                    <div className="ex-content">
                        <h1>{exercise.name}</h1>
                        <img src={exercise.picture.url} />
                        <p>{exercise.description}</p>
                        <a className="ex-author-link" href={`/users/${exercise.author.id}`}><h3>Posted By: {exercise.author.username}</h3></a>
                        
                    </div>
                </div>
            )
        }
        
    }
}

export default Exercise