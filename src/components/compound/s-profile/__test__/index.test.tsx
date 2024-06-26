import { render, screen } from "@testing-library/react";
import { SProfile } from "..";
import { EDataTestId } from "@src/types/common";

describe("When Profile has rendered", () => {
  it("Expect render successfully", async () => {
    render(await SProfile());
    const myElement = screen.getByRole(EDataTestId.SProfile);
    expect(myElement).toMatchSnapshot();
  });
});
