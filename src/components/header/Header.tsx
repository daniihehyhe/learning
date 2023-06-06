/* eslint-disable no-mixed-spaces-and-tabs */
import React, { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import logo from "../../assets/logo.png";
import { Switch} from "antd";
import { HeaderDropDown } from "./dropDown/HeaderDropDown";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { toggleTheme } from "../../redux/slice/ThemeSlice";
import BurgerMenu from "./burger/BurgerMenu";



const Header: FC = () => {
  const { t, i18n } = useTranslation();
const dispatch =useAppDispatch()
const theme = useAppSelector(state => state.reducer.value)
  const changeLanguage = (checked: boolean) => {
    const lng = checked ? "ru" : "en";
    i18n.changeLanguage(lng);
  };

	return (
      <div className={`container ${theme ? "dark" : ""}`}>
    <div className="flex justify-between py-10 items-center dark:bg-black">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
        <nav className=" lg:flex hidden gap-8 items-center justify-between w-fit">
          <h1 className="font-roboto">
            <Link to="/list">{t("header.cours")}</Link>
          </h1>
          <h3>
            <Link to="/detail">{t("header.detail")}</Link>
          </h3>
          <h3>
            <HeaderDropDown />
          </h3>
          <h3>
            <Link to="/blog">{t("header.blog")}</Link>
          </h3>
        </nav>
        <div className="flex gap-2 items-center">
          <Switch
            checked={i18n.language === "ru"}
            checkedChildren="RU"
            unCheckedChildren="EN"
            onChange={changeLanguage}
          />
          <Switch
            onChange={() => dispatch(toggleTheme())}
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
    </div>
  );
}


export default Header;