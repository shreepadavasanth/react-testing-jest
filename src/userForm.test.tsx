import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./userForm";

describe("User Form Suite", () => {
  test("it shows 2 inputs and a button", () => {
    render(<UserForm onUserAdd={() => jest.fn()} />);
    const inputs: HTMLTimeElement[] =
      screen.getAllByRole<HTMLTimeElement>("textbox");
    const button: HTMLButtonElement =
      screen.getByRole<HTMLButtonElement>("button");
    expect(inputs).toHaveLength(2);
    expect(button).toBeInTheDocument();
  });

  test("it calls onUserAdd when form is submitted", () => {
    render(<UserForm onUserAdd={() => jest.fn()} />);
    const [nameInput, emailInput] =
      screen.getAllByRole<HTMLInputElement>("textbox");

    const button = screen.getAllByRole<HTMLButtonElement>("button");
    user.click(nameInput);
    user.keyboard("Shree");
    user.click(emailInput);
    user.keyboard("Shree");
  });
});
