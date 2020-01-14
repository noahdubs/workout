import React from 'react'

const Breadcrumb = ({ user }) => {
    return (
        <div className="all-wo-h bread-crumb new-ex-bc">
            <p><a className="bc-before" href={`/users/${user._id}`}>
                Profile
                </a> 
                <i class="fas fa-chevron-right bc-icon"></i>
            </p>
            <p className="bc-active">Edit</p>
        </div>
    )
}

export default Breadcrumb 