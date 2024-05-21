import React from "react";

export const STextCardSkelton = () => {
  const counter = new Array(9).fill(0);
  return (
    <div className={`grid grid-cols-12 gap-2`}>
      {counter.map((_, ind) => {
        return (
          <div
            className={`col-span-12 md:col-span-6 lg:col-span-4  shadow-lg p-3 `}
            key={ind}
          >
            <>
              <div className="text-blue-600 font-bold mb-2 bg-gray-200 h-6 rounded w-1/2 "></div>
              <div className="text-gray-700 mb-4 bg-gray-200 h-4 rounded w-3/4"></div>
              <div className="flex justify-between">
                <button className="bg-gray-200 w-8 text-gray-600 py-2 px-4 rounded-md cursor-not-allowed"></button>
                <button className="bg-gray-200 w-8  text-gray-600 py-2 px-4 rounded-md cursor-not-allowed"></button>
              </div>
            </>
          </div>
        );
      })}
    </div>
  );
};
