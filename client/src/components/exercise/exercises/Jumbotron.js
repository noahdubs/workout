import React from 'react'

const Jumbotron = () => {
    return (
        <div className="jumbotron">
            <div className="jumbo-content">
                <h1 className="wo-heading">Exercises</h1>
                <p className="wo-p">View our hand-picked selection of exercises</p>
                <a href="/exercise/new" className="btn btn-add-wo">Add a new exercise</a>
            </div>
        </div>
    )
}

export default Jumbotron 