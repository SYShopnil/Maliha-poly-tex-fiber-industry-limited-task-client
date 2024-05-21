import { render, screen } from "@testing-library/react";
import { EDataTestId } from "@src/types/common";
import { CModal } from "..";
import { IModal } from "@src/types/root/c-modal";

const mock_data: IModal = {
  show: true,
  onClose: () => {},
  children: <h1>Bye world</h1>,
};

describe("When Modal Component Has Rendered", () => {
  it("Expect render successfully", () => {
    render(
      <CModal {...mock_data}>
        <h1>Hello world</h1>
      </CModal>
    );
    const myElement = screen.getByRole(EDataTestId.CModal);
    expect(myElement).toMatchSnapshot();
  });
});
