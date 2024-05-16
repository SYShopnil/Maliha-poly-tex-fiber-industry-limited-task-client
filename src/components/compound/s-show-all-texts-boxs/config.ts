interface ITextDataElements {
  isChecked: boolean;
  value: number;
  elementId: string;
}

export interface ITextBoxData {
  textId: string;
  total: number;
  elements: ITextDataElements[];
}
export const demoData: ITextBoxData[] = [
  {
    textId: "#12345",
    total: 2500,
    elements: [
      {
        elementId: "123",
        isChecked: true,
        value: 500,
      },
    ],
  },
  {
    textId: "#12345",
    total: 2500,
    elements: [
      {
        elementId: "123",
        isChecked: false,
        value: 500,
      },
      {
        elementId: "1234",
        isChecked: true,
        value: 500,
      },
      {
        elementId: "1235",
        isChecked: true,
        value: 500,
      },
      {
        elementId: "1236",
        isChecked: true,
        value: 500,
      },
      {
        elementId: "1237",
        isChecked: true,
        value: 500,
      },
      {
        elementId: "1238",
        isChecked: true,
        value: 500,
      },
    ],
  },
  {
    textId: "#12345",
    total: 2500,
    elements: [
      {
        elementId: "12333",
        isChecked: true,
        value: 500,
      },
    ],
  },
];
