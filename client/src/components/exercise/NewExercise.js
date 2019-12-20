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
            <div>
                <h3>Add a new exercise</h3>
                <form action="/api/exercise" method="post">
                    <input type="text" name="name" onChange={this.handleChange} />
                    <button>Submit new exercise</button>
                </form>
            </div>
        )
    }
}

export default NewExercise