import { render, screen } from "@testing-library/react";
import Nominee from "../components/Nominee";
import { nominee } from "./utils/mockData";

describe("Nominee", () => {
  it("renders title,image and select button", () => {
    render(<Nominee {...nominee} />);

    const title = screen.getByText(nominee.title);
    expect(title).toBeInTheDocument();

    const image = screen.getByAltText(`picture of ${nominee.title}`);
    expect(image).toBeInTheDocument();

    const selectButton = screen.getByTestId(`${nominee.title}-select-button`);
    expect(selectButton).toBeInTheDocument();
  });
});
