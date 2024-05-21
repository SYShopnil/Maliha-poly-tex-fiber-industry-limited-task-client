import React from "react";

import { IoIosArrowDown } from "react-icons/io";
import { IIconStore, IconEnums } from "@src/types/root";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { TbError404 } from "react-icons/tb";
import { Logo } from "./logo";

export const SIconStore = ({ iconName, fill }: IIconStore) => {
  switch (iconName) {
    case IconEnums.Logo: {
      return <Logo />;
    }
    case IconEnums.TbError404: {
      return <TbError404 fill={fill} />;
    }
    case IconEnums.FaArrowAltCircleRight: {
      return <FaArrowAltCircleRight fill={fill} />;
    }
    default: {
      return <IoIosArrowDown />;
    }
  }
};
