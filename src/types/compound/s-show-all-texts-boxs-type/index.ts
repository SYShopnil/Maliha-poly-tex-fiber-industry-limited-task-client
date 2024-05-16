export interface ITextDataElements {
  isChecked: boolean;
  value: number;
  elementId: string;
}

export interface ITextBoxData {
  textId: string;
  total: number;
  elements: ITextDataElements[];
}
