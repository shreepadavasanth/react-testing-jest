import React from "react";
import { UserInterface } from "./userinterface";

export type userListProps = {
  users: UserInterface[];
};

const UserList: React.FC<userListProps> = ({
  users,
}: userListProps): React.ReactElement => {
  const renderedUsers = users.map((user: UserInterface) => {
    return (
      <tr key={user.name}>
        <td>{user.name}</td>
        <td>{user.email}</td>
      </tr>
    );
  });
  return (
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody data-testid="users">{renderedUsers}</tbody>
    </table>
  );
};

export default UserList;
