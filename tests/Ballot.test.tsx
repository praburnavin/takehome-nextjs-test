import { render, screen, fireEvent } from "@testing-library/react";
import Ballot from "../components/Ballot";
import { ballotsData } from "./utils/mockData";

describe("Ballot", () => {
  it("renders heading ,submit button, catgeory and nominee", () => {
    render(<Ballot ballotsData={ballotsData} />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();

    const submitButton = screen.getByText("SUBMIT BALLOT BUTTON");
    expect(submitButton).toBeInTheDocument();

    const category = screen.getByText(ballotsData[0].title);
    expect(category).toBeInTheDocument();

    fireEvent.click(submitButton);
    const successModal = screen.getByText("Success");
    expect(successModal).toBeInTheDocument();
  });
});
