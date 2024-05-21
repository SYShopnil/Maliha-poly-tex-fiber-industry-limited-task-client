import { render, screen } from "@testing-library/react";
import { EDataTestId } from "@src/types/common";
import { SIconWithMessage } from "..";
import { IRIconWithMessage } from "@src/types/root/s-icon-with-message";
import { IconEnums } from "@src/types/root";

const mock_data: IRIconWithMessage = {
  icon: IconEnums.TbError404,
  message: "Somethings Error",
  url: "http://www.google.com",
};

describe("When icon with message component has rendered", () => {
  it("Expect render successfully", () => {
    render(<SIconWithMessage {...mock_data} />);
    const myElement = screen.getByRole(EDataTestId.SIconWithMessage);
    expect(myElement).toMatchSnapshot();
  });
});
