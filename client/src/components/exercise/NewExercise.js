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
                    <div className="col-md-12 new-ex-form">
                        {/* encType="multipart/form-data"*/}
                        <form action="/api/exercise" method="post">
                            <h2 className="form-name">Add a new exercise</h2>
                            <div className="form-group">
                                <label for="exercise name">
                                    <input type="text" name="name" onChange={this.handleChange}  placeholder="exercise name" className="form-control form-box" /> 
                                </label>
                            </div>
                            <div className="form-group">
                                <label for="exercise description">
                                    <input type="text" name="description" onChange={this.handleChange}  placeholder="exercise description" className="form-control form-box" /> 
                                </label>
                            </div>
                            <div className="form-group">
                                <label for="exercise picture">
                                    <input type="file" name="image" /> 
                                </label>
                            </div>
                            <button className="btn new-ex-btn">Submit new exercise</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewExercise