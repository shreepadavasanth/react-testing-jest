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

  test("it calls onUserAdd when form is submitted", async () => {
    //Not the best implementation
    render(<UserForm onUserAdd={callBack} />);
    const nameInput: HTMLInputElement = screen.getByRole("textbox", {
      name: /name/i,
    });
    const emailInput: HTMLInputElement = screen.getByRole("textbox", {
      name: /email/i,
    });
    await user.click(nameInput);
    await user.keyboard("Shree");
    await user.click(emailInput);
    await user.keyboard("Shreepad@gmail.com");

    const button: HTMLButtonElement =
      screen.getByRole<HTMLButtonElement>("button");
    await user.click(button);

    expect(callBack).toHaveBeenCalledTimes(1);
    expect(callBack).toHaveBeenCalledWith({
      name: "Shree",
      email: "Shreepad@gmail.com",
    });
  });

  test("it should empty the inputs when submitting the form", async () => {
    render(<UserForm onUserAdd={() => {}} />);
    const inputComponent: HTMLInputElement = screen.getByRole<HTMLInputElement>(
      "textbox",
      { name: /name/i }
    );
    const emailComponent: HTMLInputElement = screen.getByRole<HTMLInputElement>(
      "textbox",
      { name: /email/i }
    );
    await user.click(inputComponent);
    await user.keyboard("inputComponent");
    await user.click(emailComponent);
    await user.keyboard("inputComponent@gmail.com");
    const buttonComponent: HTMLButtonElement = screen.getByRole("button");
    await user.click(buttonComponent);
    expect(inputComponent).toHaveValue("");
    expect(emailComponent).toHaveValue("");
  });
});
