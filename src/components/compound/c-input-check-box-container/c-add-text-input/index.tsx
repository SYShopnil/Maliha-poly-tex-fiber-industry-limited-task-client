"use client";
import { ICAddTextInput } from "@src/types/compound/c-input-check-box-container";
import React from "react";

export const CAddTextInput = ({
  inputCount,
  isReadOnly,
  setInputCount,
  addElements,
}: ICAddTextInput) => {
  return (
    <div>
      <div className="mb-4 grid grid-cols-12 gap-3">
        <input
          type="number"
          value={inputCount}
          onChange={(e) => setInputCount(Number(e.target.value))}
          className="px-2 py-1 border rounded mr-2 w-[100%] lg:col-span-8 col-span-4"
          readOnly={isReadOnly}
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded lg:col-span-4 col-span-8 lg:text-lg text-sm"
          onClick={addElements}
        >
          Add To Text boxes
        </button>
      </div>
    </div>
  );
};
