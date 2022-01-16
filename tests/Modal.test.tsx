import { render, screen, logRoles, logDOM } from "@testing-library/react";
import Modal from "../components/Modal";

describe("Modal", () => {
  it("renders success message and close icon", () => {
    render(<Modal setShowModal={() => {}} />);

    const success = screen.getByText("Success");
    expect(success).toBeInTheDocument();

    const closeIcon = screen.getByTestId("close-icon");
    expect(closeIcon).toBeInTheDocument();
  });
});
