"use client";

import React, { useState } from "react";
import { ITextBoxData } from "../config";
import { Button } from "@src/components/root";
import { BtnColorSchema } from "@src/types/root";
import { CModal } from "@src/components/root/c-modal";
import { CInputCheckBoxContainer } from "../../c-input-check-box-container";
import { ECInputCheckBoxContainerMode } from "@src/types/compound/c-input-check-box-container";
import { ITextDataElements } from "@src/types/compound/s-show-all-texts-boxs-type";
import { updateTextListOfLoggedInUserServerAction } from "@src/lib/text-handler";

export const STextBox = ({ elements, textId, total }: ITextBoxData) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeModalMode, setActiveModalMode] =
    useState<ECInputCheckBoxContainerMode>(ECInputCheckBoxContainerMode.READ);

  const updateBtnText = "Update";
  const openModal = (mode: ECInputCheckBoxContainerMode) => {
    setIsModalOpen(true);
    setActiveModalMode(mode);
  };

  const closeModal = () => setIsModalOpen(false);
  const updateTextHandler = async (elements: ITextDataElements[]) => {
    try {
      // setUpdateButtonText("Updating...");
      const response = await updateTextListOfLoggedInUserServerAction(
        elements,
        textId
      );
      if (!response) {
        setTimeout(() => {
          closeModal();
        }, 50);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 col-span-12 md:col-span-6 lg:col-span-4">
      <p className="text-blue-600 font-bold mb-2">Text ID: {textId}</p>
      <p className="text-gray-700 mb-4">Total Amount: {total}</p>
      <div className="flex justify-between">
        <Button
          btnText="View Details"
          colorSchema={BtnColorSchema.SolidBgGrayTextViolet}
          isArrow={false}
          clickHandler={() => openModal(ECInputCheckBoxContainerMode.READ)}
        />
        <Button
          btnText={updateBtnText}
          colorSchema={BtnColorSchema.SolidBgWhiteTextGreen}
          isArrow={false}
          clickHandler={() => openModal(ECInputCheckBoxContainerMode.UPDATE)}
        />
      </div>
      <CModal show={isModalOpen} onClose={closeModal}>
        {/* text box part */}
        <div className={`space-y-5 p-5`}>
          <div className={`text-center`}>
            <h1 className={`font-bold text-2xl mb-2`}>Text ID: {textId}</h1>
            <hr />
          </div>
          <CInputCheckBoxContainer
            existElement={elements}
            mode={activeModalMode}
            btnColorSchema={BtnColorSchema.SolidBgGrayTextViolet}
            btnHandler={
              ECInputCheckBoxContainerMode.UPDATE == activeModalMode
                ? updateTextHandler
                : () => {}
            }
            btnText="Update"
          />
        </div>
      </CModal>
    </div>
  );
};
