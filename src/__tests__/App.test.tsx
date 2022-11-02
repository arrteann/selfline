import { render, screen } from "@testing-library/react";
import App from "../App";

test("Renders first page", async () => {
  // Setup
  render(<App />);
  const buttonCount = await screen.findByRole("button");

  // Pre Expcations
  expect(buttonCount.innerHTML).toBe("count is 0");

  // Post expectation
  expect(true).toBeTruthy();
});
