import React from "react";
import { demoData } from "./config";
import { STextBox } from "./s-text-box";
import { getAllLoggedInUserTextListFromServer } from "@src/lib/text-handler";

export const SShowAllTextBox = async () => {
  //here all loggedInUser text box will be fetch from database
  const { payload } = await getAllLoggedInUserTextListFromServer();
  return (
    <div>
      {/* card part */}
      <div className={`grid grid-cols-12 gap-2`}>
        {payload.map((data, ind) => {
          return (
            <div
              className={`col-span-12 md:col-span-6 lg:col-span-4 `}
              key={ind}
            >
              <STextBox {...data} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
