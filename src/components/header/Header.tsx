/* eslint-disable no-mixed-spaces-and-tabs */
import React, { FC, useEffect } from "react";
import { useTranslation } from "react-i18next";
import logo from "../../assets/logo.png";
import { Switch, Space } from "antd";
import { HeaderDropDown } from "./dropDown/HeaderDropDown";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { toggleTheme } from "../../redux/slice/ThemeSlice";
import useDarkMode from "../../hook/useDarkMode";
import BurgerMenu from "./burger/BurgerMenu";

const Header: FC = () => {
  const { t, i18n } = useTranslation();
//  const dispatch = useAppDispatch();
//  const isDarkMode = useAppSelector((state) => state.reducer);

//  useEffect(() => {
//    if (isDarkMode) {
//      document.documentElement.classList.add("dark");
//    } else {
//      document.documentElement.classList.remove("dark");
//    }
//	 console.log(isDarkMode);
//  }, [isDarkMode]);
const [darkMode, setDarkMode] = useDarkMode()

  const changeLanguage = (checked: boolean) => {
    const lng = checked ? "ru" : "en";
    i18n.changeLanguage(lng);
  };

	return (
    <div className="flex justify-between py-10 items-center">
      <img src={logo} alt="" />
      <nav className=" lg:flex hidden gap-8 items-center justify-between w-fit">
        <h1 className="font-roboto">{t("header.cours")}</h1>
        <h3>{t("header.detail")}</h3>
        <h3>
          <HeaderDropDown />
        </h3>
        <h3>{t("header.blog")}</h3>
      </nav>
      <div className="flex gap-2 items-center">
        <Switch
          checked={i18n.language === "ru"}
          checkedChildren="RU"
          unCheckedChildren="EN"
          onChange={changeLanguage}
        />
        <Switch
          checkedChildren="🌑"
          unCheckedChildren="🌕"
        />
        <button type="submit">{t("header.login")}</button>

        <button
          className="bg-blackc24 px-4 text-white py-2 rounded-lg"
          type="submit">
          {t("header.join")}
        </button>
      </div>
      <div className="lg:hidden">
        <BurgerMenu />
      </div>
    </div>
  );
}

export default Header