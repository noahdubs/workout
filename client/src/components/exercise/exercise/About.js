import React from 'react'

const About = ({ exercise }) => {
    return (
        <div className="container ex-div">
            <div className="ex-content">
                <h1>{exercise.name}</h1>
                {/* <img src={exercise.picture.url} /> */}
                <p>{exercise.description}</p>
                <a className="ex-author-link" href={`/users/${exercise.author.id}`}><h3>Posted By: {exercise.author.username}</h3></a>
                
            </div>
        </div>
    )
}

export default About 