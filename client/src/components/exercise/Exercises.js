import React from 'react'

class Exercises extends React.Component {
    state = {
        exercises: [],
        name: ""
    }

    componentDidMount = () => {
        fetch("/api/exercise")
            .then(res => res.json())
            .then(exercises => this.setState({ exercises }))
    }

    handleChange = event => {
        const { name, value }  = event.target;
        this.setState({[name]:value})
    }

    handleSubmit = event => {
        event.preventDefault();

        const exercise = this.state.name
        console.log(exercise)
        fetch("/api/exercise", {
            method: "POST",
            body: JSON.stringify(exercise),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(response => console.log("success:", JSON.stringify(response)))
        .catch(error => console.log("error:", error));
    }

    render() {
        const exercises = this.state.exercises;
        return (
            <div className="container exs-div">
                <div className="jumbotron">
                    <div className="jumbo-content">
                        <h1 className="wo-heading">Exercises</h1>
                        <p className="wo-p">View our hand-picked selection of exercises</p>
                        <a href="/exercise/new" className="btn btn-add-wo">Add a new exercise</a>
                    </div>
                </div> 
                <div className="row ex-row">
                    {exercises.map(exercise => (
                        <div key={exercise._id}  className="col-lg-3 col-sm-6">
                            <div className="card wo-card">
                                <img class="card-img-top" src="https://images.unsplash.com/photo-1521805103424-d8f8430e8933?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
                                <div className="card-body">
                                    <h5 className="card-title">{exercise.name}</h5>
                                    <p className="card-text">Description of exercise</p>
                                    <a href={`/exercise/${exercise._id}`} class="btn wo-sm-btn">See More</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Exercises