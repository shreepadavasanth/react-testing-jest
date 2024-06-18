import React, { ReactElement, useState } from "react";
import UserForm from "./userForm";
import { UserInterface } from "./userinterface";
import UserList from "./userList";
const App: React.FC = (): ReactElement => {
  const [users, setUsers] = useState<UserInterface[]>([]);

  const onUserAdd = (user: UserInterface): void => {
    setUsers((users) => [...users, user]);
  };
  return (
    <div>
      <UserForm onUserAdd={onUserAdd} />
      <hr />
      <UserList users={users} />
    </div>
  );
};

export default App;
