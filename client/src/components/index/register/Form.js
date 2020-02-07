import React from 'react'

const Form = props => {
    return (
        <form className="reg-form" action="/api/register" method="POST" encType="multipart/form-data"> 
            <h2 className="form-name">Register</h2>
            <div className="form-group">
                <label>Your Name</label>
                <div className="input-group">
                    <input type="text" name="name" value={props.name} placeholder="name" onChange={props.handleChange} className="form-control form-box"/>
                </div>
            </div>
            <div className="form-group">
                <label>Username</label>
                <div className="input-group">
                    <input type="text" name="username" value={props.username} placeholder="username" onChange={props.handleChange} className="form-control form-box"  />
                </div>
            </div>
            <div className="form-group">
                <label>Password</label>
                <div className="input-group">
                    <input type="password" name="password" value={props.password} onChange={props.handleChange} placeholder="password" className="form-control form-box" />
                </div>
            </div>
            <div className="form-group">
                <label>Profile Picture</label>
                <div className="">
                    <input type="file" name="image" />
                </div>
            </div>
            <div className="form-group">
                <label>Bio</label>
                <div className="input-group">
                    <textarea rows="5" type="text" name="bio" className="form-control form-box" />
                </div>
            </div>
            <button className="btn form-button workout-btn">Register <i className="fas fa-user-plus icon"></i></button>
        </form>
    )
}

export default Form 