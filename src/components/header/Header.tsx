import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import logo from "../../assets/logo.png";
import { Switch } from "antd";
import { HeaderDropDown } from "./dropDown/HeaderDropDown";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../redux/hook";
import { toggleTheme } from "../../redux/slice/ThemeSlice";
import BurgerMenu from "./burger/BurgerMenu";
import ModalRegistration from "./regsterModal/Registration";
import ru from "../../assets/russia.png";
import uk from "../../assets/united-kingdom.png";
import i18n from "i18next"; // Import i18next library here
import Login from "./login/Login";


const lngs: {
  [key: string]: {
    nativeName: string;
  };
} = {
  en: {
    nativeName: uk,
  },
  ru: {
    nativeName: ru,
  },
};

const Header: FC = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();


  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <div className="flex justify-between py-10 items-center">
        <Link to="/">
          <img className="dark:invert" src={logo} alt="" />
        </Link>
        <nav className="lg:flex hidden dark:text-white gap-8 items-center justify-between w-3/6">
          <h1 className="font-roboto ">
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
        
<Login/>
          <ModalRegistration />
        </nav>
        <div className="flex gap-2 items-center">
          <svg
            className="mt-1 mr-2 hidden lg:block  dark:invert"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
          >
            <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
          </svg>
          {Object.keys(lngs).map((lng) => (
            <button
              type="submit"
              key={lng}
              onClick={() => changeLanguage(lng)}
              disabled={i18n.resolvedLanguage === lng}>
              <img
                className="w-7"
                src={lngs[lng].nativeName}
                alt="language icon"
              />
            </button>
          ))}
          <Switch
            onChange={() => dispatch(toggleTheme())}
            checkedChildren="🌑"
            unCheckedChildren="🌕"
          />
        </div>
        <div className="lg:hidden">
          <BurgerMenu />
        </div>
      </div>
    </div>
  );
};
export default Header;
