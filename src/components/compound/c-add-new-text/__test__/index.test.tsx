import { render, screen } from "@testing-library/react";
import { EDataTestId } from "@src/types/common";
import { CAddNewText } from "..";

describe("When Add New Text Component Rendered", () => {
  it("Expect render successfully", async () => {
    render(<CAddNewText />);
    const myElement = screen.getByRole(EDataTestId.CAddNewText);
    expect(myElement).toMatchSnapshot();
  });
});
