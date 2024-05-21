"use client";
import { CModal } from "@src/components/root/c-modal";
import React, { useState } from "react";
import { CInputCheckBoxContainer } from "../c-input-check-box-container";
import { ITextDataElements } from "@src/types/compound/s-show-all-texts-boxs-type";
import { ECInputCheckBoxContainerMode } from "@src/types/compound/c-input-check-box-container";
import { BtnColorSchema } from "@src/types/root";
import { Button } from "@src/components/root";
import { addNewTextListServerAction } from "@src/lib/text-handler";
import { EDataTestId } from "@src/types/common";

export const CAddNewText = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeModalMode, setActiveModalMode] =
    useState<ECInputCheckBoxContainerMode>(ECInputCheckBoxContainerMode.READ);
  const openModal = (mode: ECInputCheckBoxContainerMode) => {
    setIsModalOpen(true);
    setActiveModalMode(mode);
  };
  const closeModal = () => setIsModalOpen(false);
  const createTextHandler = async (elements: ITextDataElements[]) => {
    try {
      const response = await addNewTextListServerAction(elements);
      !response && closeModal();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div role={EDataTestId.CAddNewText}>
      <div>
        <Button
          btnText="Add new Text List"
          colorSchema={BtnColorSchema.SolidBgWhiteTextGreen}
          isArrow={false}
          clickHandler={() => openModal(ECInputCheckBoxContainerMode.CREATE)}
        />
      </div>
      <div>
        <CModal show={isModalOpen} onClose={closeModal}>
          {/* text box part */}
          <div className={`space-y-5 p-5`}>
            <div className={`text-center`}>
              <h1 className={`font-bold text-2xl mb-2`}>Add New Text</h1>
              <hr />
            </div>
            <CInputCheckBoxContainer
              mode={activeModalMode}
              btnColorSchema={BtnColorSchema.SolidBgGrayTextViolet}
              btnHandler={createTextHandler}
              btnText="Create"
            />
          </div>
        </CModal>
      </div>
    </div>
  );
};
