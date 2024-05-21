import { render, screen } from "@testing-library/react";
import { EDataTestId } from "@src/types/common";

import { BtnColorSchema, IButton } from "@src/types/root";
import { Button } from "..";

const mock_button: IButton = {
  btnText: "Test Input",
  colorSchema: BtnColorSchema.SolidBgGrayTextViolet,
  isArrow: false,
};
describe("When Button has Rendered", () => {
  it("Expect render successfully", async () => {
    render(<Button {...mock_button} />);
    const myElement = screen.getByRole(EDataTestId.CButton);
    expect(myElement).toMatchSnapshot();
  });
});
