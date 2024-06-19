import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";
describe("testing APP.tsx", () => {
  test("can recieve a new user and show it on  the list", async () => {
    render(<App />);
    const nameInput: HTMLInputElement = screen.getByRole("textbox", {
      name: /name/i,
    });
    const emailInput: HTMLInputElement = screen.getByRole("textbox", {
      name: /email/i,
    });
    await userEvent.click(nameInput);
    await userEvent.keyboard("jane");
    await userEvent.click(emailInput);
    await userEvent.keyboard("jane@gmail.com");
    const button: HTMLButtonElement = screen.getByRole("button");
    await userEvent.click(button);
    const name = screen.getByRole("cell", { name: "jane" });
    const email = screen.getByRole("cell", { name: "jane@gmail.com" });
    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  });
});
