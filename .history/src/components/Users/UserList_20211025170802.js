import React from "react";
import {Card} from "../UI/Card"
import './UserList.css'
export const UsersList = (props) => {
  return (
    <Card className="user">
      <ul>
        {props.users.map((user) => (
          <li>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};
