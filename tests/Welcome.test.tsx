import { render, screen, logRoles, logDOM } from "@testing-library/react";
import Welcome from "../pages";

describe("Welcome", () => {
  it("renders main", () => {
    render(<Welcome />);

    const main = screen.getByRole("main");
    expect(main).toBeInTheDocument();
  });
});
