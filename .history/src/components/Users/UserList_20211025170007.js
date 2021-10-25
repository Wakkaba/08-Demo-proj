import React from 'react'

export const UsersList = (props) => {
    return (
        <div className="users">
            <li>{props.data}</li>
        </div>
    )
}