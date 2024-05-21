import { render, screen } from "@testing-library/react";
import { EDataTestId } from "@src/types/common";
import { SLoading } from "..";

describe("When loading server component has rendered", () => {
  it("Expect render successfully", () => {
    render(<SLoading text="Loading..." />);
    const myElement = screen.getByRole(EDataTestId.SLoading);
    expect(myElement).toMatchSnapshot();
  });
});
