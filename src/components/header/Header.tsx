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
    <div className="flex justify-between items-center py-10 ">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <nav className="hidden lg:flex justify-between w-1/2 font-roboto">
        <h3 className="">
          <Link to="/List">{t("header.cours")}</Link>
        </h3>
        <h3>
          <Link to="/Detail">{t("header.detail")}</Link>
        </h3>
        <h3>
          <HeaderDropDown />
        </h3>
        <h3>
          <Link to="/Blog">{t("header.blog")}</Link>
        </h3>
      </nav>
      <div className="flex  w-fit gap-4 items-center">
        <Space direction="horizontal">
          <Switch
            checked={i18n.language === "ru"}
            checkedChildren="RU"
            unCheckedChildren="EN"
            defaultChecked
            autoFocus={true}
            onChange={changeLanguage}
          />
        </Space>
        <button type="button">{t("header.login")}</button>
        <Switch
          defaultChecked
          autoFocus={true}
          checkedChildren="&#9788;"
          unCheckedChildren="&#x263E;"
          //onChange={()=> setDarkMode(darkMode === "light" ? "dark" : "light")}
        />
        <button className="py-1 px-4 w-fit bg-blackc24 rounded-lg text-white"  type="button">{t("header.join")}</button>
      </div>
      <div className="lg:hidden">
        <BurgerMenu/>
      </div>
    </div>
  );
};

export default Header;