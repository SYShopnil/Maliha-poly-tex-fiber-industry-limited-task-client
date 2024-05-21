import { BtnColorSchema } from "@src/types/root";
import { ITextDataElements } from "../s-show-all-texts-boxs-type";

export enum ECInputCheckBoxContainerMode {
  UPDATE = "UPDATE",
  READ = "READ",
  CREATE = "CREATE",
}

export interface ICInputCheckBoxContainer {
  existElement?: ITextDataElements[];
  mode?: ECInputCheckBoxContainerMode;
  btnHandler?: (elements: ITextDataElements[]) => void;
  btnText?: string;
  btnColorSchema?: BtnColorSchema;
}

export interface ICAddTextInput {
  inputCount: number;
  setInputCount: React.Dispatch<React.SetStateAction<number>>;
  isReadOnly: boolean;
  addElements: () => void;
}

export interface ICDynamicInputCheckBox {
  allSelectCheckBox: boolean;
  handleAllSelectChecked: (checked: boolean) => void;
  isReadOnly: boolean;
  elements: ITextDataElements[];
  handleCheckboxChange: (id: string, checked: boolean, ind: string) => void;
  handleInputChange: (
    id: string,
    field: keyof ITextDataElements,
    value: boolean | number
  ) => void;
}
