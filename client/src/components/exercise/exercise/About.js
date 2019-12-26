import React from 'react'

const About = ({ exercise }) => {
    return (
        <div className="container ex-div">
            <div className="ex-content">
                <div className="row">
                    <div className="col-md-6">
                        <h1>{exercise.name}</h1>
                        <a className="ex-author-link" href={`/users/${exercise.author.id}`}><p>Posted By: {exercise.author.username}</p></a>
                    </div>
                    <div className="col-md-6">
                        <img className="ex-picture" src={exercise.picture.url} />
                    </div>
                </div>
                <p>{exercise.description}</p>
            </div>
        </div>
    )
}

export default About 