import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./userForm";
import { UserInterface } from "./userinterface";
const callBack = jest.fn();

describe("User Form Suite", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
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
    //Not the best implementation
    render(<UserForm onUserAdd={callBack} />);
    const [nameInput, emailInput] =
      screen.getAllByRole<HTMLInputElement>("textbox");

    user.click(nameInput);
    user.keyboard("Shree");
    user.click(emailInput);
    user.keyboard("Shreepad@gmail.com");

    const button: HTMLButtonElement =
      screen.getByRole<HTMLButtonElement>("button");
    user.click(button);

    expect(callBack).toHaveBeenCalledTimes(1);
    expect(callBack).toHaveBeenCalledWith({
      name: "Shree",
      email: "Shreepad@gmail.com",
    });
  });
});
