import Link from "next/link";
import React from "react";
import { menuItems } from "@src/types/app/dashboard/layout";
import { getLoggedInUser } from "@src/lib/user-handler";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    payload: { loggedInUser, isLoggedIn },
  } = await getLoggedInUser(); // get the logged in user

  if (isLoggedIn && loggedInUser) {
    return (
      <div className={`grid grid-cols-12 `}>
        <nav className={`col-span-12 lg:col-span-2 bg-[#E0E3EA] p-4 space-y-2`}>
          {menuItems.map((item, ind) => {
            if (item.access.includes(loggedInUser?.role))
              return (
                <div key={ind}>
                  <Link href={item.url}>
                    <div
                      className={`${
                        item.isActive
                          ? "bg-[#7F4D4F] text-[#FAFCFF]"
                          : "bg-[#FAFCFF]"
                      } hover:bg-[#7F4D4F] duration-[0.2s] hover:text-[#FAFCFF] rounded-sm  p-[0.5rem] `}
                    >
                      <span>{item.title}</span>
                    </div>
                  </Link>
                </div>
              );
          })}
        </nav>
        <div className={`col-span-12 lg:col-span-10 pl-4 `}>{children}</div>
      </div>
    );
  } else {
    redirect("/login");
  }
}
