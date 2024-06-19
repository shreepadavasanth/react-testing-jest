import { render, screen, within } from "@testing-library/react";
import UserList, { userListProps } from "./userList";
import { UserInterface } from "./userinterface";

const renderComponent = (): { users: UserInterface[] } => {
  const users: UserInterface[] = [
    { name: "jane", email: "jane@gmail.com" },
    { name: "shrfee", email: "shrfee@gmail.com" },
  ];
  render(<UserList users={users} />);
  return {
    users,
  };
};

describe("UserList tests", () => {
  test("render one row per user", () => {
    const users = renderComponent().users;
    const rows: HTMLTableRowElement[] = within(
      screen.getByTestId("users")
    ).getAllByRole("row");
    expect(rows).toHaveLength(2);
  });
  test("render the email and name of each user", () => {
    const users = renderComponent().users;
    render(<UserList users={users} />);

    for (let user of users) {
      const name: HTMLTableCellElement = screen.getByRole("cell", {
        name: user.name,
      });
      const email: HTMLTableCellElement = screen.getByRole("cell", {
        name: user.email,
      });
      expect(name).toBeInTheDocument();
      expect(email).toBeInTheDocument();
    }
  });
});
