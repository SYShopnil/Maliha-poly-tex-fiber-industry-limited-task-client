import { render, screen } from "@testing-library/react";
import { EDataTestId } from "@src/types/common";
import CLogout from "..";

describe("When Logout Component Has Rendered", () => {
  it("Expect render successfully", () => {
    render(<CLogout />);
    const myElement = screen.getByRole(EDataTestId.CLogout);
    expect(myElement).toMatchSnapshot();
  });
});
