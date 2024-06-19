import React, { ReactElement } from "react";
import { useState } from "react";
import { UserInterface } from "./userinterface";

type userFormProp = {
  onUserAdd: (user: UserInterface) => void;
};
const UserForm: React.FC<userFormProp> = ({
  onUserAdd,
}: userFormProp): ReactElement => {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onUserAdd({ name, email });
    setEmail(() => "");
    setName(() => "");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ flexDirection: "column" }}>
        <label htmlFor="name">name</label>
        <input
          id="name"
          value={name}
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setName(e.currentTarget.value)
          }
        />
      </div>
      <div>
        <label htmlFor="email">Enter Email</label>
        <input
          id="email"
          value={email}
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setEmail(e.currentTarget.value)
          }
        />
      </div>
      <button> Add User</button>
    </form>
  );
};

export default UserForm;
