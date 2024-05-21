import { render, screen } from "@testing-library/react";
import { EDataTestId } from "@src/types/common";
import { STextBox } from "..";
import { ITextBoxData } from "../../config";

const mock_data: ITextBoxData = {
  elements: [
    {
      elementId: "123",
      isChecked: true,
      value: 250,
    },
    {
      elementId: "122",
      isChecked: true,
      value: 250,
    },
  ],
  textId: "123456",
  total: 2500,
};

describe("When Text Box Component Rendered", () => {
  it("Expect render successfully", async () => {
    render(<STextBox {...mock_data} />);
    const myElement = screen.getByRole(EDataTestId.STextBox);
    expect(myElement).toMatchSnapshot();
  });
});
