import { ReactNode } from "react";

export interface IModal {
  show: boolean;
  onClose: () => void;
  children: ReactNode;
}
