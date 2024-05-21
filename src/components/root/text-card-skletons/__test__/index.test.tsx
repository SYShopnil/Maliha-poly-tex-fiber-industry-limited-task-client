import { render, screen } from "@testing-library/react";
import { EDataTestId } from "@src/types/common";
import { STextCardSkelton } from "..";

describe("When text card skelton  has rendered", () => {
  it("Expect render successfully", () => {
    render(<STextCardSkelton />);
    const myElement = screen.getByRole(EDataTestId.STextCardSkelton);
    expect(myElement).toMatchSnapshot();
  });
});
