import { render, screen } from "@testing-library/react";
import { EDataTestId } from "@src/types/common";
import { SShowAllTextBox } from "..";

describe("When Input Check Box Component Rendered", () => {
  it("Expect render successfully", async () => {
    render(await SShowAllTextBox());
    const myElement = screen.getByRole(EDataTestId.SShowAllTextBox);
    expect(myElement).toMatchSnapshot();
  });
});
