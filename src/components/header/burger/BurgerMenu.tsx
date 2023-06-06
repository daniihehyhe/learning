import React, { useState } from "react";

const BurgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div className="bg-gray-800 h-0.5 rounded-sm transition-all duration-300" />
      <button
        className="mt-2 p-2 rounded-sm text-white  focus:outline-none focus:bg-gray-800"
        onClick={handleClick}>
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute mt-2 py-2 w-48 right-0 bg-white rounded-md shadow-lg z-10">
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
            Home
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
            About
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
            Services
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
            Contact
          </a>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
