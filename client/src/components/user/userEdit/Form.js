import React from 'react'

const Form = props => {
    return (
        <form action={`/api/users/${props.user._id}?_method=PUT`} method="POST" encType="multipart/form-data" className="new-ex-col new-ex-formm">
            <div className="row all-wo-row">
                <div className="col-md-6 new-ex-side">
                    <div className="form-group new-ex-group">
                        <label for="name">Name</label>
                        <input type="text" name="name" id="new-ex-name" value={props.user.name}  onChange={props.handleChange} className="form-control form-box new-ex-form"/>
                    </div>
                    <div className="form-group new-ex-group">
                        <label for="name">Username</label>
                        <input type="text" name="username" id="new-ex-name" value={props.user.username}  onChange={props.handleChange} className="form-control form-box new-ex-form"/>
                    </div>
                    <div className="form-group new-ex-group">
                        <label for="image">Profile picture</label>
                        <input type="file" name="image" className="form-control new-ex-file" />
                    </div>
                </div>
                <div className="col-md-6 select-col">
                    <div className="form-group new-ex-group">
                        <label for="bio">Bio</label>
                        <textarea rows="6" name="bio" type="text" className="form-control form-box new-ex-form" />
                    </div>
                    <button className="btn form-button workout-btn">Update <i class="fas fa-user-edit icon"></i></button>
                </div>
            </div>
        </form>
    )
}

export default Form