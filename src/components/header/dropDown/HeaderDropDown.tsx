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
          <Link to="/BlogDetail">Blog Detail</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
      </ul>
    </div>
  );
}
