import React from 'react'
import LoggedIn from './LoggedIn'

const About = ({ exercise }) => {
    return (
        <div className="container ex-div">
            <div className="ex-content">
                <div className="row">
                    <div className="col-md-4">
                        <h1>{exercise.name}</h1>
                        <a className="ex-author-link" href={`/users/${exercise.author.id}`}><p>Posted By: {exercise.author.username}</p></a>
                    </div>
                    <div className="col-md-4">
                        <img className="ex-picture" src={exercise.picture.url} alt={exercise.name}/>
                    </div>
                    <LoggedIn 
                        exercise={exercise}
                    />
                </div>
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-10 ex-desc">
                        <h5 className="ex-desc-h">Description</h5>
                        <p>{exercise.description}</p>
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>
        </div>
    )
}

export default About 