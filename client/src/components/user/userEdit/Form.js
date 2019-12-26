import React from 'react'

const Form = props => {
    return (
        <form action={`/api/users/${props.user._id}?_method=PUT`} method="POST">
            <h2 className="form-name">Edit Profile</h2>
            <div className="form-group">
                <label for="name">Name</label>
                <input type="text" name="name" value={props.user.name}  onChange={props.handleChange} className="form-control form-box"/>
            </div><div className="form-group">
                <label for="name">Username</label>
                <input type="text" name="username" value={props.user.username}  onChange={props.handleChange} className="form-control form-box"/>
            </div>
            <button className="btn form-button workout-btn">Update <i class="fas fa-user-edit icon"></i></button>
        </form>
    )
}

export default Form