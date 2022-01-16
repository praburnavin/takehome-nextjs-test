import { render, screen } from "@testing-library/react";
import Ballot from "../components/Ballot";
import { ballotsData } from "./utils/mockData";

describe("Ballot", () => {
  it("renders heading and submit button", () => {
    render(<Ballot ballotsData={ballotsData} />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();

    const submitButton = screen.getByText("SUBMIT BALLOT BUTTON");
    expect(submitButton).toBeInTheDocument();
  });
});
