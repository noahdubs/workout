import React from 'react'

class NewExercise extends React.Component {
    state = {
        name: ""
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({[name]: value})
    }

    render() {
        return (
            <div className="container exs-div">
                <div className="row new-ex-row">
                    <h1>Add a new exercise</h1> 
                    <div className="col-md-12 new-ex-form">
                        <form action="/api/exercise" method="post">
                            <label for="exercise name">
                                <input type="text" name="name" onChange={this.handleChange}  placeholder="exercise name" /> 
                            </label><br />
                            <button className="btn new-ex-btn">Submit new exercise</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewExercise