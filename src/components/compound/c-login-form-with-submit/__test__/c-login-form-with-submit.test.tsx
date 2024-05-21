import { render, screen } from "@testing-library/react";
import { CLoginFormWithSubmit } from "..";
import { EDataTestId } from "@src/types/common";

describe("When Clone Form with submit rendered ", () => {
  it("Expect it should render successfully", async () => {
    render(<CLoginFormWithSubmit />);
    const myElement = screen.getByRole(EDataTestId.cLoginFormWithSubmit);

    expect(myElement).toMatchSnapshot();
  });
});
