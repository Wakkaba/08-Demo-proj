import React from "react";
import {Card} from "../../UI/"
export const UsersList = (props) => {
  return (
    <Card>
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
