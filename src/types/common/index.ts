export interface ICommonReturnData {
  message: string;
  status: number;
}

export enum EAuth {
  AuthTokenCookieName = "auth",
}

export enum EDataTestId {
  cLoginFormWithSubmit = "cLoginFormWithSubmit",
  cLogoutContainer = "cLogoutContainer",
  SHeaderMain = "SHeaderMain",
  SProfile = "SProfile",
}
