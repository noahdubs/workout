import React from 'react'

const Form = props => {
    return (
        <form action="/api/register" method="POST" encType="multipart/form-data"> 
            <h2 className="form-name">Register</h2>
            <div className="form-group">
                <label>Your Name</label>
                <input type="text" name="name" value={props.name} placeholder="name" onChange={props.handleChange} className="form-control form-box"/>
            </div>
            <div className="form-group">
                <label>Username</label>
                <input type="text" name="username" value={props.username} placeholder="username" onChange={props.handleChange} className="form-control form-box"  />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" name="password" value={props.password} onChange={props.handleChange} placeholder="password" className="form-control form-box" />
            </div>
            <div className="form-group">
                <label>Profile Picture</label><br />
                <input type="file" name="image" />
            </div>
            <div className="form-group">
                <label>Bio</label><br />
                <textarea rows="5" type="text" name="bio" className="form-control form-box" />
            </div>
            <button className="btn form-button workout-btn">Register <i className="fas fa-user-plus icon"></i></button>
        </form>
    )
}

export default Form 