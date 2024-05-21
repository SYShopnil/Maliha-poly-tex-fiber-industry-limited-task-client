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
  CAddNewText = "CAddNewText",
  CInputCheckBoxContainer = "CInputCheckBoxContainer",
  SShowAllTextBox = "SShowAllTextBox",
  STextBox = "STextBox",
  CButton = "CButton",
  CLogout = "CLogout",
  CModal = "CModal",
  SIconWithMessage = "SIconWithMessage",
  SLoading = "SLoading",
  STextCardSkelton = "STextCardSkelton",
  ProfilePage = "ProfilePage",
}
