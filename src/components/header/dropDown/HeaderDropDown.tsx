import React, {FC} from 'react'
import { useTranslation } from 'react-i18next'
import styles from './style.module.scss'
import { Link } from 'react-router-dom'

export const HeaderDropDown:FC = () => {
	const {t} =useTranslation()
  return (
    <div className={styles.dropdown}>
      <input className="font-roboto" type="checkbox" id="toggle" />
      <label htmlFor="toggle">{t("header.pages")}</label>
      <ul className={styles.menu}>
        <li>
          <Link to="/BlogDetail">{t("header.bdetail")}</Link>
        </li>
        <li>
          <Link to="/Contact">{t("header.contact")}</Link>
        </li>
        <li>
          <Link to="/About">{t("header.about")}</Link>
        </li>
      </ul>
    </div>
  );
}
