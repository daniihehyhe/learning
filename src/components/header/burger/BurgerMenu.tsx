import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Login from "../login/Login";
import ModalRegistration from "../regsterModal/Registration";

const BurgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
const {t} =useTranslation()
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div className=" flex transition-all duration-300" />
      <div className="flex items-center">
        <button
          className="mt-2 p-2 rounded-sm text-black dark:invert mr-4"
          onClick={handleClick}>
          <svg className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
        <svg
          className="mt-3 dark:invert"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          //style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"
        >
          <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
        </svg>
      </div>
      {isOpen && (
        <div className="absolute mt-2 py-2 w-64 md:w-96  right-0  bg-white rounded-md shadow-lg z-10">
          <Link
            to="/"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
            Home
          </Link>
          <h1 className="font-roboto block px-4 py-2 text-gray-800 hover:bg-gray-200">
            <Link to="/list">{t("header.cours")}</Link>
          </h1>
          <h3 className="font-roboto block px-4 py-2 text-gray-800 hover:bg-gray-200">
            <Link to="/detail">{t("header.detail")}</Link>
          </h3>
          <h3 className="font-roboto block px-4 py-2 text-gray-800 hover:bg-gray-200">
            <Link to="/blog">{t("header.blog")}</Link>
          </h3>
          <h3 className="font-roboto block px-4 py-2 text-gray-800 hover:bg-gray-200">
            {" "}
            <Link to="/About">{t("Connection.about")}</Link>
          </h3>
          <h3 className="font-roboto block px-4 py-2 text-gray-800 hover:bg-gray-200">
            {" "}
            <Link to="/Contact">{t("Connection.contact")}</Link>
          </h3>
          <h3 className="font-roboto block px-4 py-2 text-gray-800 hover:bg-gray-200">
            <Link to="/BlogDetail">{t("Connection.bdetail")}</Link>
          </h3>
          <div className="flex justify-between p-5 mt-9">
            <Login/>
            <ModalRegistration/>
          </div>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
