"use client";
import React from "react";
import { Button } from "../button";
import { BtnColorSchema } from "@src/types/root";
import { logoutController } from "@src/lib/login-handler";
import { EDataTestId } from "@src/types/common";

const CLogout = () => {
  const logoutHandler = async () => {
    try {
      await logoutController();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div role={EDataTestId.CLogout}>
      <Button
        btnText="Logout"
        colorSchema={BtnColorSchema.SolidBgVioletTextWhite}
        isArrow={false}
        clickHandler={logoutHandler}
      />
    </div>
  );
};
export default CLogout;
