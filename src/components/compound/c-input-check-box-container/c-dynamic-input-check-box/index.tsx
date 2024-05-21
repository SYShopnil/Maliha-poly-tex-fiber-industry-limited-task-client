import { ICDynamicInputCheckBox } from "@src/types/compound/c-input-check-box-container";
import React from "react";

export const CDynamicInputCheckBox = ({
  allSelectCheckBox,
  elements,
  handleAllSelectChecked,
  handleCheckboxChange,
  isReadOnly,
  handleInputChange,
}: ICDynamicInputCheckBox) => {
  return (
    <div>
      {/* all select wrapper */}
      <div className="flex items-center my-2 space-x-4">
        <input
          type="checkbox"
          checked={allSelectCheckBox}
          onChange={(e) =>
            // handleCheckboxChange(element.elementId, e.target.checked)
            handleAllSelectChecked(e.target.checked)
          }
          className="mr-2 h-[1.5rem] w-[1.5rem]"
          disabled={isReadOnly}
        />
        <div
          className={`bg-[#FFE6CC]  w-[100%] flex justify-center item-center p-2`}
        >
          <p className={`text-lg font-bold `}>All Select</p>
        </div>
      </div>

      {/* visualization of all elements */}
      {elements.map((element, ind) => (
        <div
          key={element.elementId}
          className="flex items-center my-2 space-x-4 "
        >
          <input
            type="checkbox"
            checked={element.isChecked}
            onChange={(e) =>
              handleCheckboxChange(
                element.elementId,
                e.target.checked,
                ind.toString()
              )
            }
            className="mr-2 h-[1.5rem] w-[1.5rem] "
            disabled={isReadOnly}
          />
          <input
            type="number"
            value={element.value}
            onChange={(e) =>
              handleInputChange(
                element.elementId,
                "value",
                Number(e.target.value)
              )
            }
            className="px-2 py-1 border rounded mr-2 w-[100%] text-center"
            readOnly={isReadOnly}
          />
        </div>
      ))}
    </div>
  );
};
