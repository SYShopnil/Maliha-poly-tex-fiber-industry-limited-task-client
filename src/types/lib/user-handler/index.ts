import { ICommonReturnData } from "@src/types/common";

interface IUser {
  user_id: string;
  first_name: string;
  email: string;
  role: string;
  profile_pic: string;
  last_name: string;
  create_at: string;
  update_at: string;
  is_active: true;
}

export interface IGetLoggedInUserResponse extends ICommonReturnData {
  payload: {
    isLoggedIn: boolean;
    loggedInUser: IUser | null;
  };
}
