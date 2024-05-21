"use client";
import {
  ECInputCheckBoxContainerMode,
  ICInputCheckBoxContainer,
} from "@src/types/compound/c-input-check-box-container";
import { ITextDataElements } from "@src/types/compound/s-show-all-texts-boxs-type";
import React, { useState, useEffect } from "react";
import { CAddTextInput } from "./c-add-text-input";
import { CDynamicInputCheckBox } from "./c-dynamic-input-check-box";
import { Button } from "@src/components/root";
import { BtnColorSchema } from "@src/types/root";
import { EDataTestId } from "@src/types/common";

export const CInputCheckBoxContainer = ({
  existElement,
  mode = ECInputCheckBoxContainerMode.CREATE,
  btnHandler,
  btnText,
  btnColorSchema,
}: ICInputCheckBoxContainer) => {
  const [elements, setElements] = useState<ITextDataElements[]>(
    existElement || []
  );
  const [inputCount, setInputCount] = useState<number>(elements.length);
  const [totalSum, setTotalSum] = useState<number>(0);
  const isReadOnly = mode == ECInputCheckBoxContainerMode.READ;
  const [allSelectCheckBox, setAllSelectCheckBox] = useState(false);
  const [checkElementPositionTracker, setCheckElementPositionTracker] =
    useState<string[]>([]);

  const addElements = () => {
    const newInputLength =
      elements.length < inputCount ? inputCount - elements.length : inputCount;
    const newElements =
      elements.length < inputCount
        ? Array.from({ length: newInputLength }, () => ({
            isChecked: false,
            value: 0,
            elementId: Math.random().toString(36).substring(7), // Generating a random elementId
          }))
        : elements.filter((_, ind) => ind <= inputCount - 1);
    elements.length < inputCount
      ? setElements([...elements, ...newElements])
      : setElements(newElements); // Appending new elements to existing ones
  };

  const handleInputChange = (
    id: string,
    field: keyof ITextDataElements,
    value: boolean | number
  ) => {
    const updatedElements = elements.map((element) =>
      element.elementId === id ? { ...element, [field]: value } : element
    );
    setElements(updatedElements);
  };

  const handleCheckboxChange = (id: string, checked: boolean, ind: string) => {
    handleInputChange(id, "isChecked", checked);
    if (checked) {
      setCheckElementPositionTracker([...checkElementPositionTracker, ind]);
    } else {
      const deletableValue = ind;
      checkElementPositionTracker.splice(
        checkElementPositionTracker.findIndex(
          (value) => value == deletableValue
        ),
        1
      );
      setAllSelectCheckBox(false);
      setCheckElementPositionTracker(checkElementPositionTracker);
    }
  };

  const handleAllSelectChecked = (checked: boolean) => {
    const positionTracker: string[] = [];
    const updateElement = elements.map((element, ind) => {
      element.isChecked = checked;
      checked && positionTracker.push(ind.toString());
      return element;
    });
    setElements(updateElement);
    setAllSelectCheckBox(!allSelectCheckBox);
    checked
      ? setCheckElementPositionTracker(positionTracker)
      : setCheckElementPositionTracker([]);
  };

  const generateSelectedMessage = () => {
    if (checkElementPositionTracker.length === elements.length) {
      return (
        <>
          Selected all{" "}
          <strong>
            {elements.length} {elements.length > 1 ? "Items" : "Item"}
          </strong>
        </>
      );
    } else {
      const positions = checkElementPositionTracker.join(", ");
      return (
        <>
          Selected <strong>{checkElementPositionTracker.length} Items </strong>,
          their <strong> positions are {positions}</strong>
        </>
      );
    }
  };

  useEffect(() => {
    const selectedElements = elements.filter((element) => element.isChecked);
    // setSelectedCount(selectedElements.length);
    setTotalSum(
      selectedElements.reduce((sum, element) => sum + element.value, 0)
    );
  }, [elements]);

  // DID THE Default POSITION TRACKER
  useEffect(() => {
    const checkedPositionTracker: string[] = [];
    existElement?.length &&
      existElement.forEach((element, ind) => {
        element.isChecked && checkedPositionTracker.push(ind.toString());
      });

    checkedPositionTracker.length &&
      setCheckElementPositionTracker(checkedPositionTracker);
  }, []);

  return (
    <div role={EDataTestId.CAddNewText}>
      {/* will be hide in read mode */}
      {ECInputCheckBoxContainerMode.READ !== mode && (
        <CAddTextInput
          addElements={addElements}
          inputCount={inputCount}
          isReadOnly={isReadOnly}
          setInputCount={setInputCount}
        />
      )}

      <CDynamicInputCheckBox
        allSelectCheckBox={allSelectCheckBox}
        elements={elements}
        handleAllSelectChecked={handleAllSelectChecked}
        handleCheckboxChange={handleCheckboxChange}
        handleInputChange={handleInputChange}
        isReadOnly={isReadOnly}
      />

      {/* select section display part */}
      <div className="mt-4">
        <div className="border-[2px] border-solid p-2 text-center bg-[#E1D5E7]">
          <p>
            {generateSelectedMessage()} and total number is{" "}
            <strong>{totalSum}</strong>
          </p>
        </div>

        {/* will be hide in read mode */}
        <div className={`flex justify-end items-start mt-3`}>
          {ECInputCheckBoxContainerMode.READ !== mode && (
            <Button
              btnText={btnText ? btnText : ""}
              colorSchema={
                btnColorSchema
                  ? btnColorSchema
                  : BtnColorSchema.SolidBgGrayTextViolet
              }
              isArrow={false}
              clickHandler={() => {
                btnHandler && btnHandler(elements);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};
