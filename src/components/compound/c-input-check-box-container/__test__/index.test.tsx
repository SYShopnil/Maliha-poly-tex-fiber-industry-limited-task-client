import { render, screen } from "@testing-library/react";
import { EDataTestId } from "@src/types/common";
import { CInputCheckBoxContainer } from "..";

describe("When Input Check Box Component Rendered", () => {
  it("Expect render successfully", () => {
    render(<CInputCheckBoxContainer />);
    const myElement = screen.getByRole(EDataTestId.CAddNewText);
    expect(myElement).toMatchSnapshot();
  });
});
