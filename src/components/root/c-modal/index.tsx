"use client";
import { IModal } from "@src/types/root/c-modal";
import React, { useState, useEffect } from "react";

export const CModal = ({ show, onClose, children }: IModal) => {
  const [isVisible, setIsVisible] = useState(show);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  useEffect(() => {
    if (show) {
      setIsVisible(true);
      setTimeout(() => setShouldAnimate(true), 200); // Duration of the fade-in animation
    } else {
      setTimeout(() => setShouldAnimate(false), 200); // Duration of the fade-out animation
      setTimeout(() => setIsVisible(false), 200); // Duration of the fade-out animation
    }
  }, [show]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-500 ${
        show && shouldAnimate ? "opacity-100" : "opacity-0"
      }`}
      onClick={onClose}
    >
      <div
        className="bg-white p-4 rounded shadow-lg transition-transform duration-300 overflow-x-hidden overflow-y-scroll max-h-[80vh] w-[65%]"
        onClick={(e) => e.stopPropagation()} // Prevent event propagation to avoid closing modal
      >
        {children}
      </div>
    </div>
  );
};
