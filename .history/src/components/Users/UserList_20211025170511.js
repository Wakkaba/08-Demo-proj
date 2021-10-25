import React from 'react'

export const UsersList = (props) => {
    return (

            <ul>
                {props.users.map((user) => (
                <li>
                    {user.name} ({user.age} years old)
                </li>
                ))}
                </ul>
    )
}