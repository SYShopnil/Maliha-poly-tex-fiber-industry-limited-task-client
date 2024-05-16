export interface IMenuItem {
  url: string;
  title: DashboardMenuItem;
  isActive: boolean;
  access: string[];
}

export enum DashboardMenuItem {
  Profile = "Profile",
  MyTextBox = "MyTextBox",
}
export const menuItems: IMenuItem[] = [
  {
    url: "/dashboard/profile",
    title: DashboardMenuItem.Profile,
    isActive: false,
    access: ["admin", "user"],
  },
  {
    url: "/dashboard/text-box",
    title: DashboardMenuItem.MyTextBox,
    isActive: false,
    access: ["admin", "user"],
  },
];
